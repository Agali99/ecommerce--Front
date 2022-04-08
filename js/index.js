function go(productId){
    sessionStorage['productId'] = productId;     
    $(location).prop('href', "./product_item.html");
}

// Load data when page loads
$(window).ready(function(){

    var username = sessionStorage['username'];

    url = ipAddress.ip+'/api/user/seller/'+username;

    $.ajax({
        type: 'GET',
        url: url,
        dataType:'json',
        success:function(data, textStatus, request){
        console.log(data['response']['storeId']);
        sessionStorage['storeId'] = data['response']['storeId'];
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
        console.log("Yükləyə bilmədi")
        }
    });

});