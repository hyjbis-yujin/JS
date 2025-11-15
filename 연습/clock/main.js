function clock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    const time = `${hours}:${minutes}:${seconds}`;

    document.querySelector("#clock").textContent = time;
    setTimeout(clock, 1000);
}

clock();