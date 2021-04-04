require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendMessage = (message, sender) => {
  client.messages
  .create({
     body: message,
     from: '+14403731652',
     to: sender
   })
  .then(message => console.log(message.sid));
}

module.exports = {
  sendMessage
}