const axios = require("axios");
const express= require("express");
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());

app.post('/getdata',(req,res)=>{
  const encodedParams = new URLSearchParams();
  encodedParams.append("text", req.body.text);
  encodedParams.append("language", "en-US");
  
  const options = {
    method: 'POST',
    url: 'https://grammarbot.p.rapidapi.com/check',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '8f4ab499b2msh4857d944198a10dp16ff0fjsnfbcd876d0f8f',
      'X-RapidAPI-Host': 'grammarbot.p.rapidapi.com'
    },
    data: encodedParams
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });
})



app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});