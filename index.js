const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");

const generatePDF = async ({
  name,
  institute,
  course,
  date,
  user_id,
  course_id,
}) => {
  return new Promise(async (resolve, reject) => {
    name = name.toUpperCase();
    user_id = user_id.toUpperCase();
    course_id = course_id.toUpperCase();

    try {
      const pdfDoc = await PDFDocument.load(
        fs.readFileSync("./certificate.pdf")
      );
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      const pages = pdfDoc.getPages();
      const certificate = pages[0];

      const { width, height } = certificate.getSize();
      console.log(width, height);

      // Draw Name
      certificate.drawText(name, {
        x: 65,
        y: height / 2,
        size: 30,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      });

      // Draw Institute
      certificate.drawText(institute, {
        x: 95,
        y: 205,
        size: 25,
        font: timesRomanFont,
        color: rgb(0.22, 0.23, 0.22),
      });

      // Draw Institute
      certificate.drawText(course, {
        x: 95,
        y: 155,
        size: 16,
        font: timesRomanFont,
        color: rgb(0.22, 0.23, 0.22),
      });

      // Draw Date
      certificate.drawText(date, {
        x: 485,
        y: 205,
        size: 16,
        font: timesRomanFont,
        color: rgb(0.22, 0.23, 0.22),
      });

      // Draw UserID
      certificate.drawText(user_id, {
        x: 65,
        y: 255,
        size: 12,
        font: timesRomanFont,
        color: rgb(0.22, 0.23, 0.22),
      });

      // Draw CourseID
      certificate.drawText(course_id, {
        x: 95,
        y: 138,
        size: 10,
        font: timesRomanFont,
        color: rgb(0.22, 0.23, 0.22),
      });

      const uri = await pdfDoc.saveAsBase64({ dataUri: true });
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
