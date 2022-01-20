let firstName = prompt("Kullanıcı Adınızı Giriniz");
let surName = prompt("Kullanıcı Soyadınızı Giriniz");
const myName = document.querySelector("#myName")
myName.innerHTML = `${firstName} ${surName}`

//saat

function showTime() {
    const hours = document.getElementById("hour")
    const minutes = document.getElementById("min")
    const seconds = document.getElementById("sec")

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h + ":"
    minutes.innerHTML = m + ":"
    seconds.innerHTML = s


}

var interval = setInterval(showTime, 1000);


// günler

const history = document.querySelector("#history")
var date = new Date();
var day = date.getDay()
if (day == 1) {
    history.innerHTML = "Pazartesi"
} else if (day == 2) {
    history.innerHTML = "Salı"

} else if (day == 3) {
    history.innerHTML = "Çarşamba"
} else if (day == 4) {
    history.innerHTML = "Perşembe"
} else if (day == 5) {
    history.innerHTML = "Cuma"
} else if (day == 6) {
    history.innerHTML = "Cumartesi"
} else if (day == 0) {
    history.innerHTML = "Pazar"
}

