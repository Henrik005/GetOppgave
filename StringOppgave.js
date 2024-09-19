function MakeString(String){
    let NewString = String[0].toUpperCase()+ String.slice(1)
document.getElementById('MainDiv').innerHTML = `${NewString}`}