var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



// file upload system



document.querySelector("html").classList.add('js');

var fileInput = document.querySelector(".input-file"),
    button = document.querySelector(".input-file-trigger"),
    the_return = document.querySelector(".file-return");

button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
    }
});
button.addEventListener("click", function (event) {
    fileInput.focus();
    return false;
});
fileInput.addEventListener("change", function (event) {
    the_return.innerHTML = this.value;
});

//hide show div based on radio checked
function ShowHideDomainlist() {
    var chkYes = document.getElementById("existDomain");
    var chkNo = document.getElementById("notExistDomain");
    var noDomian = document.getElementById("noDomain");
    var domainlist = document.getElementById("domain-list");
    var addDomain = document.getElementById("add-newdomain");
    var domainHint = document.getElementById("no-domain-hint");
    domainlist.style.display = chkYes.checked ? "block" : "none";
    addDomain.style.display = chkNo.checked ? "block" : "none";
    domainHint.style.display = noDomian.checked ? "block" : "none";
}





// =============modal scrpit start============================
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
    el.addEventListener("click", function () {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}

for (const el of closeEls) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

//=====================update modal code===============
var modalBtns = document.querySelectorAll('.open-modal');
modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");
        modal.getElementById(modal).style.display = "block";
    };
});

// =============modal scrpit end============================

//=================password section==========================

//SHOW PASSWORD
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function showPasswordUser() {
    var x = document.getElementById("user_password");
    if (x.type === "user_password") {
        x.type = "text";
    } else {
        x.type = "user_password";
    }
}


//generate password
function getPassword() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx0123456789!@#$%^&*()?/;:~_+><{}[]";
    var passwordLength = 16;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}

//copy password
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

//strong pass section======================
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span class="dashed-active"></span> <span class="dashed-active"></span> <span class="dashed-active"> </span> <span class="dashed-active"></span> <span class="dashed-active"></span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span class="dashed-active"></span> <span class="dashed-active"></span> <span class="dashed-active"> </span> <span class="dashed"></span> <span class="dashed"></span>';
    } else {
        strength.innerHTML = '<span class="dashed-active"> </span> <span class="dashed"></span> <span class="dashed"></span> <span class="dashed"></span> <span class="dashed"></span>';
    }
}

// function check() {
//     if (document.getElementById('password').value ==
//         document.getElementById('confirm_password').value) {
//         document.getElementById('password_error').style.color = 'green';
//         document.getElementById('password_error').innerHTML = 'Password Matched';
//     } else {
//         document.getElementById('password_error').style.color = 'red';
//         document.getElementById('password_error').innerHTML = 'Password Not matching';
//     }
// }

//=================================form validation=====================================
// function phoneNumberValidation(phoneNumber) {
//     var phoneno = /^\d{10}$/;
//     if (phoneNumber.match(phoneno)) {
//         return true;
//     }
//     else {
//         var div = document.getElementById('phone_error');
//         div.innerHTML = "* Enter valid 10 digit number like this 9876543210.";
//         return false;
//     }
// }

function validatetion() {
    var valid = true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;


    if (name == '' || name == null) {
        valid = false;
        var div = document.getElementById('name_error');
        div.innerHTML = "* Please enter name.";
    }
    else {
        document.getElementById('name_error').innerHTML = '';
    }


    if (email == '' || email == null) {
        valid = false;
        var div = document.getElementById('email_error');
        div.innerHTML = "* Please enter email.";
    }
    else {
        document.getElementById('email_error').innerHTML = '';
    }

    if (password == '' || password == null) {
        valid = false;
        var div = document.getElementById('password_error');
        div.innerHTML = "* Please enter password.";
    }
    else {
        document.getElementById('password_error').innerHTML = '';
    }

    if (confirm_password == '' || confirm_password == null) {
        valid = false;
        var div = document.getElementById('confirm_password_error');
        div.innerHTML = "* Retype your password here.";
    }
    else {
        document.getElementById('confirm_password_error').innerHTML = '';
    }


    if (password != '' && confirm_password != '') {
        if (password != confirm_password) {
            valid = false;
            var div = document.getElementById('confirm_password_error');
            div.innerHTML = "* Password do not match. Please check it.";
        }

        if (password == confirm_password) {
            document.getElementById('confirm_password_error').innerHTML = '';
        }
    }

    if (valid == false) {
        return false;
    }
    else {
        alert("You form is ready to submit.");
        return true;
    }
}

function user_validatetion() {
    var valid = true;
    var email = document.getElementById('user_email').value;
    var password = document.getElementById('user_password').value;


    if (email == '' || email == null) {
        valid = false;
        var div = document.getElementById('email_error');
        div.innerHTML = "* Please enter email.";
    }
    else {
        document.getElementById('email_error').innerHTML = '';
    }

    if (password == '' || password == null) {
        valid = false;
        var div = document.getElementById('password_error');
        div.innerHTML = "* Please enter password.";
    }
    else {
        document.getElementById('password_error').innerHTML = '';
    }

    if (valid == false) {
        return false;
    }
    else {
        alert("You form is ready to submit.");
        return true;
    }
}