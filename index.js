const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = 8000;

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'AKIAZ4D5EIE6ZKYQ2CAU',
  secretAccessKey: 'vJgMeFDuKNYHyCv4Su4NcN38QocJpnvAzlfxQWvK',
});

// Create an instance of the S3 service
const s3 = new AWS.S3();

// Route to generate a signed URL for the image file
app.get('/signed-url', (req, res) => {
  const bucketName = '';
  const fileName = '';
  const expiryTime = 300; // 5 minutes

  // Generate a signed URL
  const signedUrl = s3.getSignedUrl('getObject', {
    Bucket: bucketName,
    Key: fileName,
    Expires: expiryTime,
  });

  // Log the signed URL to the console
  console.log('Signed URL:', signedUrl);

  res.send('Signed URL generated. Check the console for the URL.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




