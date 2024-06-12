function a(){
    var element = document.getElementById("pa2");
    element.classList.toggle("p2");
}
function soo() {
    var property = document.getElementById("cars").value;
    var city = document.getElementById("poka").value;
    var town = document.getElementById("supra").value;
    if (property == "Plot" && city == "karachi" && town == "shf") {
        window.location.href = "https://www.olx.com.pk/karachi_g4060695/land-plots_c40/q-shah-faisal";
    }
    else{
        alert("No Result Found");
    }
}
function foo() {
    var property = document.getElementById("cars2").value;
    var city = document.getElementById("poka2").value;
    var town = document.getElementById("nav-item4").value;
    if (property == "plot" && city == "karachi") {
        window.location.href = "index2.html";
    }
    else{
        alert("No Result Found");
    }
}


