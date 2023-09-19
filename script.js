//-------------------------------------------------------------onClick Functions------------------------------------------------------//
var navbar = document.getElementById("navbar");

function showmenu() {
    navbar.style.right = "0";
}

function hidemenu() {
    navbar.style.right = "-200px";
}


var orderwindow = document.getElementById("orderwindow");
var cart = document.getElementById("cart");

function closeWindow() {
    orderwindow.style.left = "100%";
    orderwindow.style.top = "100%";
    cart.style.display = "block"
}

function openWindow() {
     if (window.innerWidth < 700){
         
    orderwindow.style.left = "0";
    orderwindow.style.top = "54%";
    cart.style.display = "none"
         
     }else{
        orderwindow.style.left = "54.5%";
        orderwindow.style.top = "35%";
        cart.style.display = "none"
     }
}


function streetView(){
    document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!4v1694679762593!6m8!1m7!1sSERgTPWAFQzyN6NeS4vajA!2m2!1d14.37913141524295!2d120.8542421098389!3f277.33966580533445!4f-8.0679245054678!5f1.4777536384107366";
    document.getElementById("streetView").style.display = "none";
    document.getElementById("mapView").style.display = "block";
}

function mapView(){
    document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4685.100415816681!2d120.8515849751019!3d14.379221686081287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962b0d3b44bb39%3A0xbe09054a69d628c7!2sArvie%20Direct%20Sales!5e1!3m2!1sen!2sph!4v1694678205575!5m2!1sen!2sph";
    document.getElementById("streetView").style.display = "block";
    document.getElementById("mapView").style.display = "none";
}
