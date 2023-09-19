

var done = 0;
var ad = 0;
var count = 7;





setInterval (function(){
    if (done == 0){
    document.getElementById("kapenatoAds").style.display = "block";
    console.log(ad++);
    if (ad => 1){
    const myInterval = setInterval(myTimer, 1000);
    function myTimer(){
    console.log(count--);
    document.getElementById("count").innerHTML = count;
        if (count <= 0){
            clearInterval(myInterval);
        }
    }
    
}
    }
},30000)


setInterval (function(){
    if (count == 0){
        document.getElementById("count").style.display = "none"
        document.getElementById("closeAd").style.display = "block"
    }
},10)
    



function closeAd(){
    document.getElementById("kapenatoAds").style.display = "none";
    console.log(done++);
}