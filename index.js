const express = require('express');
const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');
require('dotenv').config();

const port = 8000;
const app = express();


  const imageUrl = getSignedUrl({
    url: "https://beneathatree-test.s3.eu-north-1.amazonaws.com/pexels-giorgio-de-angelis-1413412.png",
    dateLessThan: new Date(Date.now() + 1000 * 60 * 60), // expires in 5 minutes
    privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
    keyPairId: process.env.CLOUDFRONT_KEY_PAIR_ID,
  });
  console.log("imageUrl", imageUrl);


app.listen(port, () => {
  console.log('Server is running on port 8000');
});