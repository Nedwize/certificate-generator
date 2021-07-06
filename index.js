const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const generatePDF = async ({ name, id }) => {
  return new Promise(async (resolve, reject) => {
    name = name.toUpperCase();
    id = id.toUpperCase();

    try {
      const pdfDoc = await PDFDocument.load(fs.readFileSync('./amity.pdf'));
      const timesRomanFont = await pdfDoc.embedFont(
        StandardFonts.HelveticaBold
      );

      const pages = pdfDoc.getPages();
      const certificate = pages[0];

      const { width, height } = certificate.getSize();

      // Draw Name
      certificate.drawText(name, {
        x: 270,
        y: height / 2 + 10,
        size: 30,
        font: timesRomanFont,
        color: rgb(0.945, 0.3725, 0.5647),
      });

      certificate.drawText(id, {
        x: width / 2 + 30,
        y: 20,
        size: 8,
        font: timesRomanFont,
        color: rgb(0.22, 0.23, 0.22),
      });

      const uri = await pdfDoc.saveAsBase64({ dataUri: true });
      await fs.writeFile(
        path.join(__dirname, 'certificates', `${id}.pdf`),
        await pdfDoc.save(),
        () => {
          console.log('Saved Certificate');
        }
      );
      resolve({
        success: true,
        pdfURI: uri,
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = generatePDF;
