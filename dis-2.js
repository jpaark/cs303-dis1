let boolVar = false;

function boo() {
    if (boolVar === false) {
        document.getElementById("scaryImg").style.display = "block";
        document.getElementById("cuteImg").style.display = "none";
        boolVar = true;
    }

    else {
        document.getElementById("scaryImg").style.display = "none";
        document.getElementById("cuteImg").style.display = "block";
        boolVar = false;
    }
}
