const url = 'http://localhost:3000/api'
const is_logged_in = false

function sendPost() {
    // create a JSON object
    const data = {
        type: 'LOGIN',
        name: 'somka',
        password: 'ewkihv',
        locale: 'en_US',
    }
    send('POST', JSON.stringify(data)).then((resp) => console.log(resp))
}

function sendGet() {
    send().then((resp) => console.log(resp))
}

function send(method = 'GET', body = null) {
    const options = {
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    // send post request
    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.log('error', error))
}

function parse(data) {
    const root = parse(data)
    console.log(root)
}
