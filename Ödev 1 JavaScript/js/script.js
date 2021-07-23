let userName = prompt("Lütfen İsminizi Giriniz.")
let greeting = document.querySelector("#greeting")

greeting.innerHTML = `Merhaba, ${userName.toUpperCase()}! Hoşgeldin!`

//* Saat ve Tarih
let clock = document.querySelector("#clock")

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDay();
    let dayList = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    clock.innerHTML =  ` ${h}:${m}:${s} ${dayList[day]} `;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // 10 dan küçük sayıların önüne 0 eklendi.
    return i;
}

