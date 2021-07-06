const generatePDF = require('./index');

const attendees = [
  'Diksha Dobwal',
  'Hrishabh Jain',
  'Divyanshi Goyal',
  'Suraj Landage',
  'prashant shrotriya',
  'Alok Singh',
  'Bhumika Mina',
  'Himanshu Paliwal',
  'Naincy',
  'Akash Soni',
  'Vishal Kumar Singh',
  'Amrutha H D',
  'Amartya Chakraborty',
  'Krishna Kushwah',
  'Hitesh Agarwal',
  'Anish Mahawar',
  'Lisha Vasundhariya',
  'Meenu Antil',
  'Prashansha Agarwal',
  'Rashika Gupta',
  'Sneha Tomar',
  'Dinesh Kumar',
  'Rohit Kumar',
  'Garima Bhargava',
  'Pooja Bohra',
  'Rutuja Arkile',
  'Spondon Jyoti Dutta',
  'Khushi Agarwal',
  'Pallab Sarkar',
  'HARJINDER KAUR',
  'GULSHAD SHUJAI',
  'Naman Vashishta',
  'VIJAY DIWAN',
  'Manish Kumar',
  'Rutuja Yadav',
  'Ashika Malagi',
  'yash jain',
  'Shubham Agarwal',
  'Aanchal Negi',
  'Harish Venkatram Saripella',
  'Sanchit Chaudhary',
  'Akshita Kothapalli',
  'Priyanshi Khare',
  'Palash Gupta',
  'Sanjay Yadav',
  'NANDARAJ M',
  'Mohd Sakib',
  'Shruti Jain',
  'Anjali Agrawal',
  'Anish Mahawar',
  'Rajan Kumar',
  'Mohit Gupta',
  'KINGSHUK KIRTANIA',
  'SURAJ YADAV',
  'Vasudha Arumugam',
  'Minal Deshpande',
  'Baisali Ishore',
  'Satvik Saxena',
  'Pratheek Tirunagari',
  'Aishwarya Tenginakai',
  'Harsh Kumar',
  'Komal kumari',
  'Atul Deshpande',
  'AAKRITI GOYAL',
  'V Rubika',
  'Aanchal Negi',
  'SHRIRAM BANSAL',
  'Dr. Manju Kaushik',
];

for (let i = 0; i < attendees.length; i++) {
  generatePDF({ name: attendees[i], id: `AUR-CGI00${i + 1}` }).then((res) =>
    console.log(`${i} Done`)
  );
}
