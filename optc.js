
x=document.getElementById("raids");
x.style.display = "none";

x=document.getElementById("coliseums");
x.style.display = "none";

function toggleRaids() {
    var x = document.getElementById("raids");
    if (x.style.display === "none") {
        x.style.display = "inline";
        x.style.backgroundColor = "#ffdb4d";
    } else {
        x.style.display = "none";
    }
} 

function toggleColiseums() {
    var x = document.getElementById("coliseums");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.backgroundColor = "transparent";
    } else {
        x.style.display = "none";
    }
} 