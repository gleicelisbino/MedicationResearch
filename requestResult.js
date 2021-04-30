
function remove(){
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("message");
    window.localStorage.removeItem("selectionBox");
    window.localStorage.removeItem("option");
    window.localStorage.removeItem("question");
}

function gotoFisrtPage() {
    remove();
    window.location.href = "index.html?";
    }

