function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = '<div class="success">Input correct</div>';
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = '<div class="error">Enter 2-15 characters</div>';
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^[0-9]{7,15}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = '<div class="success">Input correct</div>';
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = '<div class="error">Input is incorrect</div>';
        return false;
    }
}

function outputData() {
    var first = document.getElementById("first").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    if (first != "" && phone != "" && date != "" && time != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "<p style='font-family: 'Hind Vadodara'; position: absolute; margin-top:20px> Hello, "+ first +" !</p>";
        document.getElementById("summary").innerHTML += "<p style='font-family: 'Hind Vadodara'>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p style='font-family: 'Hind Vadodara'>Phone number: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Date and Time: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "<p style='font-family: 'Hind Vadodara'; style='font-weight: bold'>We are glad that You contacted us!</p>";
    }
    else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "<p style='position: absolute; margin-top:20px';'font-family: 'Hind Vadodara'>Please, fill in all the fields...</p>";
    }
}



function checkEmail() {
    var email = document.getElementById("email").value;
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(email)) { // if testing of first is true
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = '<div class="success_email">Input correct</div>';
        return true;

    }
    else {// if it's not
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = '<div class="error_email">Please, write Your email correctly</div>';
        return false;
    }
}

function outputEmail() {
    var email = document.getElementById("email").value;
    if (email != "") {
        alert ("You subscribe to our news!");
        return true;
    }
    else {
        alert ("Please, fill the field correctly");
    }
}