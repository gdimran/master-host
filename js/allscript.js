'use strict';

$(document).ready(function () { $('#sidebarCollapse').on('click', function () { $('#sidebar').toggleClass('active'); }); });


// Tabs navigation


const tabs = document.querySelector(".tab-wrapper");
const tabButton = document.querySelectorAll(".tab-nav-item");
const contents = document.querySelectorAll(".tab-content");

if (tabs) {
    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active-tab");
            });
            e.target.classList.add("active-tab");

            contents.forEach(content => {
                content.classList.remove("active-content");
            });
            const element = document.getElementById(id);
            element.classList.add("active-content");
        }
    }
}





//form script
const customSelectEl = document.querySelectorAll(".custom-select");
if (customSelectEl) {
    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
}





// =============modal scrpit start============================
const modals = document.querySelectorAll(".modal");

if (modals) {
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
}

// =============modal scrpit end============================

// file upload system

var upload = document.querySelector(".input-file");

if (upload) {
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
}


//=================password section==========================

//SHOW PASSWORD
//var pass = document.getElementById("password");

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

    var modatooltip = document.getElementById("modal-Tooltip");
    modatooltip.innerHTML = password;

}
getPassword();
//copy password
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;

    var modatooltip = document.getElementById("copy-info");
    modatooltip.innerHTML = "Copied: " + copyText.value;

}
copyPassword();

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";

    var modatooltip = document.getElementById("modal-Tooltip");
    modatooltip.innerHTML = "Copy to clipboard";
}
outFunc();
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

passwordChanged();




//=====================================notifications==========================
var deletefnc = document.getElementById("delete");
if (deletefnc) {
    function warning() {
        const deleteBtn = document.getElementById("delete");
        const notification = document.getElementById("notification-warning");
        const closeBtn = document.getElementById("close");

        deleteBtn.addEventListener("click", () => {
            notification.classList.add("notification-show");
        });

        closeBtn.addEventListener("click", () => {
            notification.classList.remove("notification-show");
        });
    }

    warning();
}

var successFnc = document.getElementById("success");

if (successFnc) {
    function success() {
        const successBtn = document.getElementById("success");
        const notification = document.getElementById("notification-success");
        const closeBtn = document.getElementById("close-s");

        successBtn.addEventListener("click", () => {
            notification.classList.add("notification-show");
        });

        closeBtn.addEventListener("click", () => {
            notification.classList.remove("notification-show");
        });
    }

    success();
}

var infoFnc = document.getElementById("info");
if (infoFnc) {
    function information() {
        const infoBtn = document.getElementById("info");
        const notification = document.getElementById("notification-info");
        const closeBtn = document.getElementById("close-i");

        infoBtn.addEventListener("click", () => {
            notification.classList.add("notification-show");
        });

        closeBtn.addEventListener("click", () => {
            notification.classList.remove("notification-show");
        });
    }

    information();
}



//=================form validation=============================
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


//forgotpass validation
function forgotPass_validatetion() {
    var valid = true;
    var email = document.getElementById('user_email').value;
    if (email == '' || email == null) {
        valid = false;
        var div = document.getElementById('email_error');
        div.innerHTML = "* Please enter email.";
    }
    else {
        document.getElementById('email_error').innerHTML = '';
    }

    if (valid == false) {
        return false;
    }
    else {

        alert("You form is ready to submit.");
        return true;
    }
}



// =============================counter el js------------------
//not solved yet


var i = 0;
function buttonClickins() {
    i++;
    document.getElementById('inc').value = i;
}
// buttonClickins();
function buttonClickdes() {
    i--;
    document.getElementById('inc').value = i;
}
//buttonClickdes();





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

