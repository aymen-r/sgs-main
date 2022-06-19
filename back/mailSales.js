import nodemailer from "nodemailer";
import mailGun from "nodemailer-mailgun-transport";
import "dotenv/config";

const auth = {
  auth: {
    api_key: process.env.API_KEY_SALES,
    domain: process.env.DOMAIN_SALES,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

export const sendMailSales = (
  report_no,
  name,
  address,
  sample_name,
  sample_batch_no,
  produced_date,
  manufactured,
  sgs_sample_no,
  date_sample,
  test_period
) => {
  const mailOptions = {
    from: "new@new.com",
    to: process.env.SALES_EMAIL,

    subject: "new report added",
    text: ` Report number : ${report_no} \n Name : ${name}\n address: ${address}\n Sample name: ${sample_name} \n  sample batch number: ${sample_batch_no}\n produced date: ${produced_date} \n  manufactured: ${manufactured} \n sgs sample number : ${sgs_sample_no}\n date sample: ${date_sample}\n test_period: ${test_period[0]} to  ${test_period[1]}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

export const sendMailSalesQuote = (
  email,
  report_no,
  name,
  address,
  sample_name,
  sample_batch_no,
  produced_date,
  manufactured,
  sgs_sample_no,
  date_sample,
  test_period,
  cb
) => {
  const mailOptions = {
    from: email,
    to: process.env.SALES_EMAIL,

    subject: "new quote requested",
    text: `email: ${email}\n Report number : ${report_no} \n Name : ${name}\n address: ${address}\n Sample name: ${sample_name} \n  sample batch number: ${sample_batch_no}\n produced date: ${produced_date} \n  manufactured: ${manufactured} \n sgs sample number : ${sgs_sample_no}\n date sample: ${date_sample}\n test_period: ${test_period[0]} to  ${test_period[1]}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
