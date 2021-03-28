function send() {
const Http = new XMLHttpRequest();
const url='';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
}