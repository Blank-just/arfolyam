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

fetch("https://api.exchangerate-api.com/v4/latest/ron")
.then(x=>x.json())
.then(y=>megjelenitron(y))

function megjelenitron(y){
    console.log(y)
    document.getElementById("ron").innerHTML=y.rates.HUF+" Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/cny")
.then(x=>x.json())
.then(y=>megjelenitcny(y))

function megjelenitcny(y){
    console.log(y)
    document.getElementById("cny").innerHTML=y.rates.HUF+" Ft"
}
