function add(){

    var firstOptionObject = document.getElementById("Yes");

    var secondOptionObject = document.getElementById("NotNow");

    var thirdOptionObject = document.getElementById("Never");

    if (firstOptionObject.checked==true){
        localStorage.setItem('option',firstOptionObject.value);
        
        document.getElementById("myF").style.display = "block";

    }else if(secondOptionObject.checked==true){
        localStorage.setItem('option',secondOptionObject.value);

        document.getElementById("myS").style.display = "block";
        
    }else {
        localStorage.setItem('option',thirdOptionObject.value);
        
        document.getElementById("myT").style.display = "block";
    }
}
function saveFirstQuestion(){
    var firstQuestionObject = document.getElementById("firstQuestion");
    localStorage.setItem('question',firstQuestionObject.value);
}
function saveSecondQuestion(){
    var secondQuestionObject = document.getElementById("secondQuestion");
    localStorage.setItem('question',secondQuestionObject.value);
}
function saveThirdQuestion(){
    var thirdQuestionObject = document.getElementById("thirdQuestion");
    localStorage.setItem('question',thirdQuestionObject.value);
}

function gotoFisrtPage() {
    window.location.href = "index.html";
}
function gotoThirdPage() {
    window.location.href = "thirdPage.html";
}