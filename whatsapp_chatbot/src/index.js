const bodyParser = require('body-parser');
const express = require('express');
const axios = require("axios");
require('dotenv').config();
const PORT = process.env.PORT;  
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;  


const client = require('twilio')(accountSid, authToken, { 
    lazyLoading: true 
});

const data = {};  let count = 0;
app.post('/whatsapp',async (req, res) => {
    if(count == 0){     
        client.messages
        .create({
            body: 'Hey there\nWhat is your full name?',
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log("This is the error " + err));       
    }
    if(count == 1){
        data.name = req.body.Body;
        client.messages
        .create({
            body: `Hi ${data.name}, \nWhat is your age?`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 2){
        data.age = req.body.Body;
        client.messages
        .create({
            body: `What is your Birth Date in MM/DD/YYYY format?`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 3){
        data.dob = req.body.Body;
        client.messages
        .create({
            body: `Please enter your cell phone number`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 4){
        data.phoneNumber = req.body.Body;
        client.messages
        .create({
            body: `Please enter your Email Id`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 5){
        data.email = req.body.Body;
        client.messages
        .create({
            body: `Please enter your Median Household Income`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 6){
        data.medianhouseholdincome = req.body.Body;
        client.messages
        .create({
            body: `Please enter your Median Home Value`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 7){
        data.medianhomevalue = req.body.Body;
        client.messages
        .create({
            body: `What is your product type('Government_insured', 'Fixed_rate', 'Adjustable_rate', 'Jumbo')`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 8){
        data.productype = req.body.Body;
        client.messages
        .create({
            body: `What is your Household Size?`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 9){
        data.householdsize = req.body.Body;
        client.messages
        .create({
            body: `Please enter your state`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
  /*  if(count == 10){
        data.state = req.body.Body;
        client.messages
        .create({
            body: ``,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }*/
    if(count == 10){
        data.state = req.body.Body;
        client.messages
        .create({
            body: `Please enter your net monthly income`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 11){
        data.monthlyIncome = req.body.Body;
        client.messages
        .create({
            body: `Please enter the value of interest rate you want to take loan at`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 12){
        data.interestrate = req.body.Body;
        client.messages
        .create({
            body: `Please enter your credit score`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 13){
        data.creditScore = req.body.Body;
        client.messages
        .create({
            body: `Please enter your debt amount`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 14){
        data.debt = req.body.Body;
        client.messages
        .create({
            body: `Please enter your loan term`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 15){
        data.loanTerm = req.body.Body;
        client.messages
        .create({
            body: `Please enter your credit incidents`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 16){
        data.creditIncidents = req.body.Body;
        client.messages
        .create({
            body: `Please enter the loan amount`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 17){
        data.loanAmount = req.body.Body;
        client.messages
        .create({
            body: `Please enter your home value`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;     
        }).catch(err => console.log(err)); 
    }
    if(count == 18){
        data.homeValue = req.body.Body;
        client.messages
        .create({
            body: `Please enter your gender`,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            count += 1;
        }).catch(err => console.log(err)); 
    }
    if(count == 19){
        data.gender = req.body.Body;
        client.messages
        .create({
            body: `You just entered the following details:
Name : ${data.name}
Age : ${data.age}
Birth Date: ${data.dob}
Phone Number : ${data.phoneNumber}
Email : ${data.email}
Median Household Income: ${data.medianhouseholdincome}
Median Home Value: ${data.medianhomevalue}
Product Type: ${data.productype}
Household Size:${data.householdsize}
State: ${data.state}
Monthly net income: ${data.monthlyIncome}
Interest Rate: ${data.interestrate}
CreditScore: ${data.creditScore}
Debt: ${data.debt}
Loan Term: ${data.loanTerm}
Credit Incidents: ${data.creditIncidents}
Loan Amount: ${data.loanAmount}
Home Value: ${data.homeValue}
Gender : ${data.gender}\n\nWe are processing your details....
            `,
            from: 'whatsapp:+14155238886',
            to: req.body.From
        }).then(() => {
            function postData(){
                axios.post('http://localhost:5000/postdata', {
                    Name : data.name, 
                    Age : data.age,
                    BirthDate: data.dob,
                    PhoneNumber : data.phoneNumber,
                    Email : data.email,
                    MedianHouseholdIncome: data.medianhouseholdincome,
                    MedianHomeValue: data.medianhomevalue,
                    ProductType: data.productype,
                    HouseholdSize: data.householdsize,
                    State: data.state,
                    Monthlynetincome: data.monthlyIncome,
                    InterestRate: data.interestrate,
                    CreditScore: data.creditScore,
                    Debt: data.debt,
                    LoanTerm: data.loanTerm,
                    CreditIncidents: data.creditIncidents,
                    LoanAmount: data.loanAmount,
                    HomeValue: data.homeValue,
                    Gender : data.gender,
                    botNumber : req.body.From
                    
                })
                .then((res) => {
                    console.log("Post response is "+ res);
                })
                .catch((err) => {
                    console.log("Post error is "+err);
                })
            }
            postData();
            count += 1;

        }).catch(err => console.log(err));         
    }
console.log(data);
});

app.get("/postResults", (req, res) => {
    console.log(res );
})


    

