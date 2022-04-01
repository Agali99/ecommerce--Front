function go(productId){
    sessionStorage['productId'] = productId;     
    $(location).prop('href', "./product_item.html");
}