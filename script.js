window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#velkommen").classList.remove("move");
    document.querySelector("#velkommen").removeEventListener("animationend", sidenVises);
}

function imageAppear() {
    console.log("imageAppear");

    document.querySelector("#velkommen").classList.add("move");
    document.querySelector("#velkommen").addEventListener("animationend", imageAppear1);
}

function imageAppear1() {
    console.log("imageAppear1");

    document.querySelector("#velkommen").classList.remove("move");
    document.querySelector("#velkommen").removeEventListener("animationend", sidenVises);
}
