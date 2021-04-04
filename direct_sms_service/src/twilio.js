const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
require('dotenv').config();
const WA = require('../src/send_twilio');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

data = {}; let senderID; 

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  senderID = req.body.From;

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  const [age, ageValue,
    income, incomeValue,
    creditScore, creditScoreValue,
    householdSize, householdSizeValue,
    state, stateValue,
    medianHomeValue, medianHomeValueValue,
    medianHouseholdIncome, medianHouseholdIncomeValue,
    debt, debtValue,
    loanTerm, loanTermValue,
    interestRate, interestRateValue,  
    creditIncidents, creditIncidentsValue,  
    homeValue, homeValueValue,  
    loanAmount, loanAmountValue, 
    productType, productTypeValue ] = req.body.Body.split(' ');
    data.age = ageValue; 
    data.income = incomeValue;  
    data.creditScore = creditScoreValue; 
    data.householdSize = householdSizeValue; 
    data.state = stateValue
    data.medianHomeValue = medianHomeValueValue;
    data.medianHouseholdIncome = medianHouseholdIncomeValue;
    data.debt = debtValue;
    data.loanTerm = loanTermValue;
    data.InterestRate = interestRateValue;
    data.creditIncidents = creditIncidentsValue;
    data.homeValue = homeValueValue;
    data.loanAmount = loanAmountValue;
    data.productType = productTypeValue;

    function postData(){
      axios.post('http://localhost:5000/postsmsdata', {
        ageValue : data.age,
        incomeValue : data.income,
        creditScoreValue  : data.creditScore,
        householdSizeValue : data.householdSize,
        stateValue : data.state,
        medianHomeValueValue : data.medianHomeValue,
        medianHouseholdIncomeValue : data.medianHouseholdIncome,
        debtValue : data.debt,
        loanTermValue : data.loanTerm,
        interestRateValue : data.InterestRate,
        creditIncidentsValue : data.creditIncidents,
        homeValueValue : data.homeValue,
        loanAmountValue : data.loanAmount,
        productTypeValue : data.productType,
        smsNumber : req.body.From
      })
      .then((res) => {
        WA.sendMessage(res.data, req.body.From);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    postData();
});

http.createServer(app).listen(4000, () => {
  console.log('Express server listening on port 4000');
});
