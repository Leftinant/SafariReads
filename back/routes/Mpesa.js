import axios from "axios";
import express from "express";
const router = express.Router();

const consumerKey = process.env.MPESA_KEY;
const consumerSecret = process.env.MPESA_SECRET;
const shortcode = "4395832";
const passkey = process.env.MPESA_PASSKEY;

router.post("/stkpush", async (req, res) => {
  const { amount, phone } = req.body;
  const timestamp = new Date()
    .toISOString()
    .replace(/[^0-9]/g, "")
    .slice(0, 14);
  const password = Buffer.from(shortcode + passkey + timestamp).toString(
    "base64"
  );

  // 1. Get access token
  const tokenRes = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      auth: {
        username: consumerKey,
        password: consumerSecret,
      },
    }
  );

  const accessToken = tokenRes.data.access_token;

  // 2. Initiate STK Push
  const response = await axios.post(
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: "https://yourdomain.com/api/mpesa/callback",
      AccountReference: "Bookstore",
      TransactionDesc: "Payment for books",
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  res.json(response.data);
});
