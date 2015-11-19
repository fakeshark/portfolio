var menu_visibile = false;
var mouseout_delay = setTimeout(menu_fadeout, 3000);
var menu_button = document.getElementById('menu_button_box');
var menu = document.getElementById('menu_show');
var menubg = document.getElementById('menubg');
var user_id = document.getElementById('user_id');
var password = document.getElementById('password');
var fade_out_delay;

menu_button.addEventListener('click', getClickPosition, false);
menu_button.addEventListener('click', show_menu, false);

// start timer to trigger menu fade-out upon mouseout
function start_fade_out() {
    fade_out_delay = setTimeout(menu_fadeout, 1000);
}

// resets|cancels menu fade-out upon mouseover
function reset_fade_out() {
    clearTimeout(fade_out_delay);
}

// fades pop-up menu out
function menu_fadeout() {
    menu.style["opacity"] = 0;
    menu.style["transition"] = "opacity .5s";
    menu_visibile = true;
    setTimeout(show_menu, 525);
}

// gets mouse coordinates to postion menu relative (+ offset) to where users click on button
function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    x_left = e.clientX - parentPosition.x;
    y_top = e.clientY - parentPosition.y;
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return {x: xPosition, y: yPosition};
}

// display menu or hide menu if it's already displayed
function show_menu() {

    menubg = document.getElementById('menubg');

    if (menu_visibile === true) {
        menu.style["visibility"] = "hidden";
        menu_visibile = false;
    } else {
        x_left = (x_left - 5) + "px";
        y_top = (y_top + 25) + "px";

        menu.style["top"] = y_top;
        menu.style["left"] = x_left;
        menu.style["visibility"] = "visible";
        menu.style["transition"] = "opacity .5s";
        menu.style["opacity"] = "1";
        menu_visibile = true;
    }
}

var usersName = document.getElementById("user_id");
var user;

function login_process() {
    var user_id_textbox_display = window.getComputedStyle(user_id, null).getPropertyValue('display');
    if (user_id_textbox_display !== "none") {
        login_step_one();
    } else {
        check_login("fail");  // ajax function will replace this to return dynamic login results
    }
}

function login_step_one() {
    // do nothing if text input is empty
    if (usersName.value.length !== 0) {
        // store username in 'user' so that future string manipulation
        // doen't affect what the user actually entered
        user = usersName.value;  
        login_step_two();
    }
}

function login_step_two() {
    // starts to fade out the characters in the text box while at
    // the same time deleting the username characters one by one
    // from right to left

    user_id.style["color"] = "rgba(250, 250, 250, 0)";
    user_id.style["textShadow"] = "1px 1px 1px rgba(0, 0, 0,.0)";
    user_id.style["transition"] = "color .75s, text-shadow 1s";

    if (user_id.value.length !== 0) {
        setTimeout(delete_last_character, 30);
    } else {
        user_id.style["visibility"] = "hidden";
        user_id.style["display"] = "none";
        document.getElementById("password").style["visibility"] = "visible";
        document.getElementById("password").style["display"] = "initial";
        var num = Math.floor((Math.random() * 4) + 1);
        var greeting;

        // randomize the greeting message
        if (num === 1) {
            greeting = "Hello, ";
        } else if (num === 2) {
            greeting = "Hi there, ";
        } else if (num === 3) {
            greeting = "Welcome, ";
        } else {
            greeting = "Hi, ";
        }

        // temporarily display greeting inside the placeholder
        document.getElementById("password").placeholder = greeting + user + " ☻";
        setTimeout(password_message, 1250);
    }
}

function delete_last_character() {
    user_id.value = user_id.value.substring(0, user_id.value.length - 1);
    login_step_two();
}

function password_message() {
    document.getElementById("password").placeholder = " Please enter your password";
    document.getElementById("password").focus();
}

function login_success() {
    document.getElementById("login_button").style["backgroundImage"] = "url(svg/login_success.svg)";
    document.getElementById("login_button").style["borderColor"] = "rgb(32, 82, 32)";
    document.getElementById("login_button").style["borderTopColor"] = "rgb(48, 214, 83)";
    document.getElementById("login_button").style["borderBottomColor"] = "rgb(2, 66, 18)";
    document.getElementById("login_button").style["backgroundColor"] = "rgb(51, 120, 51)";
    document.getElementById("login_button").style["backgroundPositionY"] = "-3px";
    document.getElementById("login_button").style["transition"] = "background-position-y 1s, background-color 1s, border-color 1s, border-top-color 1s, border-bottom-color 1s";
}

function login_fail() {
    document.getElementById("login_button").style["backgroundImage"] = "url(svg/login_fail.svg)";
    document.getElementById("login_button").style["borderColor"] = "rgb(196, 12, 12)";
    document.getElementById("login_button").style["borderTopColor"] = "rgb(249, 147, 147)";
    document.getElementById("login_button").style["borderBottomColor"] = "rgb(132, 7, 7)";
    document.getElementById("login_button").style["backgroundColor"] = "rgb(252, 39, 39)";
    document.getElementById("login_button").style["backgroundPositionY"] = "-1px";
    document.getElementById("login_button").style["transition"] = "background-position-y 1s, background-color 1s, border-color 1s, border-top-color 1s, border-bottom-color 1s";
}

function check_login(results) {
    if (results === "success") {
        document.getElementById("login_button").style["backgroundPositionY"] = "40px";
        document.getElementById("login_button").style["transition"] = "background-position-y .75s";
        setTimeout(login_success, 1000);
    } else {
        document.getElementById("login_button").style["backgroundPositionY"] = "-40px";
        document.getElementById("login_button").style["transition"] = "background-position-y .75s";
        setTimeout(login_fail, 600);
    }
}

