function add(){

    var firstSelectionBoxObject = document.getElementById("firstSelectionBox");

    var secondSelectionBoxObject = document.getElementById("secondSelectionBox");

    var thirdSelectionBoxObject = document.getElementById("thirdSelectionBox");
 

    if (firstSelectionBoxObject.selected==true){
        localStorage.setItem('selectionBox',firstSelectionBoxObject.value);

    }else if(secondSelectionBoxObject.selected==true){
        localStorage.setItem('selectionBox',secondSelectionBoxObject.value); 
        
    }else {
        localStorage.setItem('selectionBox',thirdSelectionBoxObject.value); 
    }
}


function gotoSecondPage(){
    
    window.location.href = "secondPage.html";
}

function gotoResultPage() {
    window.location.href = "resultPage.html";
}

