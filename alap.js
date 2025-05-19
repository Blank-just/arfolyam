fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x=>x.json())
.then(y=>megjelenitusd(y))

function megjelenitusd(y){
    console.log(y)
    document.getElementById("usd").innerHTML=y.rates.HUF+" Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x=>x.json())
.then(y=>megjeleniteur(y))

function megjeleniteur(y){
    console.log(y)
    document.getElementById("eur").innerHTML=y.rates.HUF+" Ft"
}
fetch("https://api.exchangerate-api.com/v4/latest/gbp")
.then(x=>x.json())
.then(y=>megjelenitgbp(y))

function megjelenitgbp(y){
    console.log(y)
    document.getElementById("gbp").innerHTML=y.rates.HUF+" Ft"
}
fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x=>x.json())
.then(y=>megjeleniteur(y))

function megjeleniteur(y){
    console.log(y)
    document.getElementById("eur").innerHTML=y.rates.HUF+" Ft"
}
