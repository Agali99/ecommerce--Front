$(window).ready(function(){

    var role = sessionStorage['role'];
    if(role == 'ROLE_CUSTOMER'){
        document.getElementById("product-add").style.display = "none";
    }
        
    else if(role == 'ROLE_SELLER'){
        document.getElementById("product-add").style.display = "inline";
    }
});