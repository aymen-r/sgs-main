import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

const QR = ({ text }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL(text)
      .then(setSrc)
      .catch((err) => {
        console.error(err);
      });
  }, [text]);

  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

export default QR;
