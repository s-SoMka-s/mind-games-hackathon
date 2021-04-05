function send() {
    const Http = new XMLHttpRequest()
    const url = 'https://www.gokgs.com/top100.jsp'
    Http.open('GET', url, true)
    Http.setRequestHeader('content-type', 'application/json;charset=UTF-8') // Make sure Unicode is used.
    Http.send()

    Http.onreadystatechange = (e) => {
        parse(e.responseText)
    }
}

function parse(data) {
    const htmlparser2 = require('htmlparser2')
    const parser = new htmlparser2.Parser({
        onopentag(name, attributes) {
            if (name === 'a') {
                console.log('JS! Hooray!')
            }
        },
        onclosetag(tagname) {
            if (tagname === 'script') {
                console.log("That's it?!")
            }
        },
    })
    parser.write(data)
    parser.end()
}
