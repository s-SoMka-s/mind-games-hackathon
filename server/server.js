const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
var cookie = '';
app.use(express.json());
app.use(cookieParser('my secret key'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api', (request, response) => {
    const fetch = require("node-fetch")
    
    var myHeaders = new fetch.Headers();

    myHeaders.append("Cookie", cookie);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        credentials: 'include'
    };

    fetch("https://www.gokgs.com/json-cors/access", requestOptions)
        .then(res => res.json())
        .then(result => {console.log(result); response.send(result);})
        .catch(error => console.log('error', error));
     });


app.post('/api', function (r, res) {
    const body = r.body;
    const fetch = require("node-fetch")
    console.log(JSON.stringify(body))

    var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/json");

    url = 'https://www.gokgs.com/json-cors/access';

    const options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
    }

    fetch(url, options).then(response => {
        cookie = response.headers.get('set-cookie');
        res.send(cookie);
    })
}
)

app.get('/parse', (request, response) => {
    const fetch = require("node-fetch")
    
    var myHeaders = new fetch.Headers();

    myHeaders.append("Cookie", cookie);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        credentials: 'include'
    };

    fetch("https://www.gokgs.com/top100.jsp", requestOptions)
        .then(response => response.text())
        .then(result => response.send(result))
        .catch(error => console.log('error', error));
     });

const PORT = process.env.PORT || 3000;
const host = 'localhost';
app.listen(PORT, host, () => console.log(`listening on http://${host}:${PORT}`));
