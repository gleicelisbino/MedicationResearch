function add() {
    var usernameObject = document.getElementById("username");

    var messageObject = document.getElementById("message");
   
    localStorage.setItem('username',usernameObject.value);   
   
    localStorage.setItem('message',messageObject.value);  
}

function gotoSecondPage(){
    
    window.location.href = "secondPage.html";
}


    