//-----------------------------------------------------------order form classes---------------------------------------------------------------//
pd = " "
setInterval(function () {
    
    var package = document.getElementById("package").value;
    var qty = document.getElementById("qty").value;
        
    if (package == 1){ 
        totalPrice = tp+shippFee;
        pd = "Regular (1pc)";
        document.getElementById("pPrice").innerHTML = "₱150";
        document.getElementById("qtyDisplay").innerHTML = qty;
        document.getElementById("shippFee").innerHTML = "₱"+shippFee;
        document.getElementById("totalPrice").innerHTML = "₱"+totalPrice;
        document.getElementById("descript").innerHTML = "Get the Regular SRP of this product, you will also handle the shipping fee according to the adress that you will give";
        document.getElementById("pn").innerHTML = "Regular (1pc)";
        document.getElementById("pn2").innerHTML = "Regular (1pc)";
        document.getElementById('picBox').src = 'Images/oil-big.png';
    }
    
    
    if (package == 2){
        pd = "4 Pieces Free Shipping Nationwide";
        document.getElementById("pPrice").innerHTML = "₱600";
        document.getElementById("qtyDisplay").innerHTML = qty;
        document.getElementById("shippFee").innerHTML = "Free Shipping!";
        document.getElementById("totalPrice").innerHTML = "₱"+tp;
        document.getElementById("descript").innerHTML = "Get the SRP of 4pcs of the product with Each Package and enjoy the FREE SHIPPING PROMO";
        document.getElementById("pn").innerHTML = "Free Shipping (4pc)";
        document.getElementById("pn2").innerHTML = "Free Shipping (4pc)";
        document.getElementById('picBox').src = 'Images/oil-fr.png';
    }
    
    if (package == 3){
        pd = "Reseller Business Package + Free Membership Fee";
        document.getElementById("pPrice").innerHTML = "₱2000";
        document.getElementById("qtyDisplay").innerHTML = qty;
        document.getElementById("shippFee").innerHTML = "Free Shipping!";
        document.getElementById("totalPrice").innerHTML = "₱"+tp;
        document.getElementById("descript").innerHTML = "One of the TOP SELLING PACKAGES! This package allows you to buy the product for only ₱90! and you can sell this with the SRP of ₱150! with the total Return Of Investment of ₱3,000! + FREE SHIPPING FEE";
        document.getElementById("pn").innerHTML = "Reseller Package (Member)";
        document.getElementById("pn2").innerHTML = "Reseller Package (Member)";
        document.getElementById('picBox').src = 'Images/oil-rsllr.png';
    }
    
    if (package == 4){
        pd = "City Stockist Ultimate Business Package";
        document.getElementById("pPrice").innerHTML = "₱70000";
        document.getElementById("qtyDisplay").innerHTML = qty;
        document.getElementById("shippFee").innerHTML = "Free Shipping!";
        document.getElementById("totalPrice").innerHTML = "₱"+tp;
        document.getElementById("descript").innerHTML = "The Ultimate Business Package! Have a chance to be the Stockist of your Very Own City! Buy 850 bottles for only ₱70,000 and get a total Return Of Investment of ₱127,500! + FREE SHIPPING FEE";
        document.getElementById("qty").min = "1";
        document.getElementById('picBox').src = 'Images/oil-stockist.png';
        document.getElementById("pn").innerHTML = "City Stockist";
        document.getElementById("pn2").innerHTML = "City Stockist";
    }
    
    
}, 10)
    
    //-------------------------------------------------------------receipt------------------------------------------------------//
setInterval(function () {
    var islands = document.getElementById('island').value;
    
    if (islands == 1){
        island = "Luzon";
        shippFee = 50;
    }
    
    if (islands == 2){
        island = "Vizayas";
        shippFee = 100;
    }
    
    if (islands == 3){
        island = "Mindanao";
        shippFee = 150;
    }
},10)


function receiptNoDisplay() {
    document.getElementById('receiptDisplay').style.display = "none";
}



function receiptDisplay() {
    
    document.getElementById('receiptDisplay').style.display = "block";
    
    const name = document.getElementById('name').value;
    const contactNo = document.getElementById('contactNo').value;
    const cty = document.getElementById('cty').value;
    const mncplty = document.getElementById('mncplty').value;
    const brgy = document.getElementById('brgy').value;
    const street = document.getElementById('street').value;
    const ps = document.getElementById('extra').value;
    var pkgg = document.getElementById("package").value;
    var qty = document.getElementById("qty").value;
    
    
    document.getElementById('orderMail').value = "\n"+"Name:"+" "+name+"\n"+"Contact No:"+" "+contactNo+"\n"+"Adress:"+" "+street+","+" "+brgy+","+" "+mncplty+","+" "+cty+","+" "+island+"."+"\n"+"Order Package:"+" "+pd+"\n"+"Quantity:"+" "+qty+"\n"+"Ps:"+ps;

    document.documentElement.scrollTop = 0;
}