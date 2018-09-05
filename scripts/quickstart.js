//empty  literal
var app = {}

app.show = function show() {
console.log("Hello");
var majHead = document.getElementById('majHead');
majHead.innerHTML="Java Script Examples";
//window.alert("alert")
}
app.init = function () {
    var grtButton = document.getElementById('grtBtn');
/*    grtButton.addEventListener('click',function () {
    console.log('click event fired');
    })*/
//   console.log(app.show);
//   console.log(app.show());
    grtButton.addEventListener('click',app.show);
}