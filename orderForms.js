//-------------------------------------------------------------order forms------------------------------------------------------//

var dc = 0
var tp = 0
setInterval(function () {
    
    var package = document.getElementById("package").value;
    var qty = document.getElementById("qty").value;
    if (package == 1){ 
        dc = 200*qty;
        tp = 150*qty;
        document.getElementById("discount").innerHTML = "₱"+dc;
        document.getElementById("price").innerHTML = "₱"+tp;
        document.getElementById("qty").min = "1";
        if (qty > 3){
            document.getElementById("package").value = "2";
            document.getElementById("qty").value = "1";
            };
    }
    
    
    if (package == 2){
        dc = 680*qty;
        tp = 600*qty;
        document.getElementById("discount").innerHTML = "₱"+dc;
        document.getElementById("price").innerHTML = "₱"+tp;
        document.getElementById("qty").min = "1";
        if (qty > 3){
            document.getElementById("package").value = "3";
            document.getElementById("qty").value = "1";
            };
    }
    
    if (package == 3){
        dc = 3000*qty;
        tp = 2000*qty;
        document.getElementById("discount").innerHTML = "₱"+dc;
        document.getElementById("price").innerHTML = "₱"+tp;
        document.getElementById("qty").min = "1";
        if (qty > 20){
            document.getElementById("package").value = "4";
            document.getElementById("qty").value = "1";
            };
    }
    
    if (package == 4){
        dc = 127000*qty;
        tp = 70000*qty;
        document.getElementById("qty").max = "50";
        document.getElementById("discount").innerHTML = "₱"+dc;
        document.getElementById("price").innerHTML = "₱"+tp;
        document.getElementById("qty").min = "1";
    }
    
    
}, 10)
