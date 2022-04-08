function register(){
    clearBox("message")
    var url = ipAddress.ip+'/api/user/register/seller';

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var storeName = document.getElementById("storename").value;
    var storeUrl = document.getElementById("storeurl").value;
    var storeLogo = null;
    var postalCode = document.getElementById("postalcode").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var balance = 0;
    var profilePictureUrl = null;

    console.log("Clicked!!!")

    if(firstName.length == "") {
      document.getElementById("message").innerHTML = "Ad  xanası boş qala bilməz"
      return 0;
    }
    else if(lastName.length == "") {
      document.getElementById("message").innerHTML = "Soyad  xanası boş qala bilməz"
      return 0;
    }
    else if(username.length == "") {
      document.getElementById("message").innerHTML = "İstifadəçi adı  xanası boş qala bilməz"
      return 0;
    }
    else if(email.length == "") {
      document.getElementById("message").innerHTML = "E-poçt xanası boş qala bilməz"
      return 0;
    }
    else if(password.length == "") {
      document.getElementById("message").innerHTML = "Parol xanası boş qala bilməz"
      return 0;
    }
    else if(confirmPassword.length == "") {
      document.getElementById("message").innerHTML = "Parolu təsdiqlə xanası boş qala bilməz"
      return 0;
    }
    else if( password != confirmPassword){
      document.getElementById("message").innerHTML = "Parollar eyni olmalıdır"
      return 0;
    }
    else if(phoneNumber.length == "") {
      document.getElementById("message").innerHTML = "Nömrə xanası boş qala bilməz"
      return 0;
    }
    else if(postalCode.length == "") {
      document.getElementById("message").innerHTML = "Poçt nömrəsi xanası boş qala bilməz"
      return 0;
    }
    else if(address.length == "") {
      document.getElementById("message").innerHTML = "Ünvan xanası boş qala bilməz"
      return 0;
    }
    else if(country.length == "") {
      document.getElementById("message").innerHTML = "Ölkə xanası boş qala bilməz"
      return 0;
    }
    else if(city.length == "") {
      document.getElementById("message").innerHTML = "Şəhər xanası boş qala bilməz"
      return 0;
    }

    $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify({
        'firstName':firstName,
        'lastName':lastName,
        'username':username,
        'email':email,
        'password':password,
        'phoneNumber':phoneNumber,
        'storeName':storeName,
        'storeUrl':storeUrl,
        'postalCode':postalCode,
        'address':address,
        'country':country,
        'city':city,
        'balance':0,
        'profilePictureUrl':profilePictureUrl,
        'storeLogoUrl':storeLogo,
      }),
      contentType : 'application/json; charset=utf-8',
      dataType:'json',
      success:function(data){
        $(location).prop('href', "./register_success.html")
      },
      error: function (XMLHttpRequest, textStatus, errorThrown){
        $('#message').append('Istifadəçi adı və ya parol yanlışdır')
        console.log("Error")
      }
    });
  }

  function clearBox(elementID)
  {
      document.getElementById(elementID).innerHTML = "";
  }