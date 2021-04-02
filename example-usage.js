const generatePDF = require("./index");

const data = {
  name: "Nakshatra Saxena",
  institute: "IIIT KOTA",
  course: "Wildlife Naturalist",
  date: "22/05/2021",
  user_id: "62369ksbvaslgv2387",
  course_id: "a9ueqt09283yjabvlab",
};

generatePDF(data).then((res) => console.log(res));
