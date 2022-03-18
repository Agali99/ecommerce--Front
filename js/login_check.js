$(window).ready(function(){
    
    var in_block = document.getElementById("in_block");
    var out_block = document.getElementById("out_block");
    var access_token = sessionStorage['access_token'];

    if(access_token){    
        console.log("Logged in! ",access_token);
        in_block.style.display = "block";
        out_block.style.display = "none";
    }
    else{
        console.log("Logged out! ",access_token);
        out_block.style.display = "block";
        in_block.style.display = "none";
    }

    document.getElementById("header-profile-image").src = "http://34.135.27.122:30006" + "/api/user/get-profile-picture/"+sessionStorage['username'];
});

function signOut(){
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    location.href = "./login.html"
}