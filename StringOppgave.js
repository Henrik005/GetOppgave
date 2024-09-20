//Model

let app = document.getElementById('App')






//View

UpdateView();
function UptadeView(){
   app.innerHTML = /*HTML*/ `
   <div id="InputRslt"></div>
   <input onchange="MakeString(this.value)"></input>`
}






//Controller

function MakeString(String){
    let NewString = String[0].toUpperCase()+ String.slice(1)
document.getElementById('InputRslt').innerHTML = NewString}