import express from "express";
import expressAsyncHandler from "express-async-handler";
import Client from "../models/clientModel.js";
// import sendMail from "../mailContact.js";
import { sendMailSales, sendMailSalesQuote } from "../mailSales.js";

const clientRouter = express.Router();

clientRouter.post(
  "/new",
  expressAsyncHandler(async (req, res) => {
    const {
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
    } = req.body;
    const newClient = new Client({
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
    });
    sendMailSales(
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
    );
    const client = await newClient.save();
    res.send({
      _id: client._id,
      report_no: client.report_no,
      name: client.name,
      address: client.address,
      sample_name: client.sample_name,
      sample_batch_no: client.sample_batch_no,
      produced_date: client.produced_date,
      manufactured: client.manufactured,
      sgs_sample_no: client.sgs_sample_no,
      date_sample: client.date_sample,
      test_period: client.test_period,
    });
  })
);
clientRouter.get("/:report_no", async (req, res) => {
  const client = await Client.findOne({ report_no: req.params.report_no });
  if (client) {
    res.send(client);
  } else {
    res.status(404).send({ message: "report Not Found" });
  }
});

clientRouter.post("/contact", (req, res) => {
  const {
    inquiry,
    firstName,
    lastName,
    companyName,
    jobTitle,
    location,
    phone,
    email,
    text,
  } = req.body;
  sendMail(
    email,
    inquiry,
    firstName,
    lastName,
    companyName,
    jobTitle,
    location,
    phone,
    text,
    (err, data) => {
      if (err) {
        res.status(500).json({ message: "error" });
      } else {
        res.json({ message: "email sent" });
      }
    }
  );
});

clientRouter.post(
  "/quote",
  expressAsyncHandler(async (req, res) => {
    const {
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
    } = req.body;

    sendMailSalesQuote(
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
      (err, data) => {
        if (err) {
          res.status(500).json({ message: "error" });
        } else {
          res.json({ message: "email sent" });
        }
      }
    );
  })
);

export default clientRouter;
