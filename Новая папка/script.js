let body = document.querySelector(".body");
let btn = document.querySelector(".btn");
let btnStop = document.querySelector('.btn-stop')


btn.addEventListener('click', () => {
    let a = setInterval(() => {
        if (body.style.backgroundColor == "white") {
            body.style.backgroundColor = "red";
        } else if (body.style.backgroundColor == "red"){
            body.style.backgroundColor = "green";
        } else if (body.style.backgroundColor == "green") {
            body.style.backgroundColor = "black"
        } else {
            body.style.backgroundColor = "white"
        }
    }, 400);

    btnStop.addEventListener('click', () => {
        clearInterval(a)
    }) 
});