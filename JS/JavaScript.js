function save() {

    let inseredEmail = document.getElementById("email").value;


    localStorage.setItem('email', inseredEmail)
}

function change() {
    
    let inputs = document.querySelectorAll("input[type='email']");

    
    let subscribe = document.querySelector("input[type=submit]");

    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "")
        {
            subscribe.disabled = true;
            return;
        }
    }
    subscribe.disabled = false;
}

function hideForm() {

    let form = document.getElementById("subscribeButton");

    form.style.display = "none";

    let unsubscribeButton = document.getElementById("unsubscribeButton");

    unsubscribeButton.style.display = "";
}



function checkLoggedUser() {

    let inseredEmail = localStorage.getItem('email');

    if (inseredEmail != null )
    {
        hideForm();

    }
    
}


function Unsubscribe() {

    localStorage.clear();

    let button = document.getElementById("subscribeButton");
    button.style.display = "";

    let unsubscribeButton = document.getElementById("unsubscribeButton");
    unsubscribeButton.style.display = "none";

}

//TODO: onclick= "home();"---> Richiamo questa funzione nel bottone "torna alla home", ma crea comunque il popup in news

//function home() {
//    let inseredEmail = localStorage.getItem('email');

//    if (inseredEmail != null) {

//        window.location = "Index.html"

//        alert("Benvenuto")
//    }
 
//}
