// import nodemailer from "nodemailer";
// import mailGun from "nodemailer-mailgun-transport";
// import "dotenv/config";
// let key = process.env.API_KEY_SALES;
// const auth = {
//   auth: {
//     api_key: key,
//     domain: process.env.DOMAIN_SALES,
//   },
// };

// const transporter = nodemailer.createTransport(mailGun(auth));

// const sendMail = (
//   email,
//   inquiry,
//   firstName,
//   lastName,
//   companyName,
//   jobTitle,
//   location,
//   phone,
//   text,
//   cb
// ) => {
//   const mailOptions = {
//     from: email,
//     to: process.env.SALES_EMAIL,

//     subject: inquiry,
//     text: `first name : ${firstName} \n last name : ${lastName}\n company name: ${companyName}\n job title: ${jobTitle} \n location: ${location}\n phone: ${phone} \n message: ${text}`,
//   };
//   transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//       cb(err, null);
//     } else {
//       cb(null, data);
//     }
//   });
// };

// export default sendMail;
