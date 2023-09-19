//-------------------------------------------------------------slideShow------------------------------------------------------//

var imgID = 1;
function prevSlide() {
console.log(imgID--);
}

function nextSlide() {
console.log(imgID++);
}

setInterval(function(){
   console.log(imgID++);   
}, 8000)


setInterval(function(){
    if (imgID == 1) {
        document.getElementById('activeImg').src = 'Images/testi-1.png'
    }

    if (imgID == 2) {
        document.getElementById('activeImg').src = 'Images/testi-2.png'
    }

    if (imgID == 3) {
        document.getElementById('activeImg').src = 'Images/testi-3.png'
    }

    if (imgID == 4) {
        document.getElementById('activeImg').src = 'Images/testi-4.png'
    }
    
    if (imgID > 4) {
        imgID = 1
    }

    if (imgID <= 0) {
        imgID = 4
    }
}, 10)