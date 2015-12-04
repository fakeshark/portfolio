var menu_visibile = false;
var mouseout_delay = setTimeout(menu_fadeout, 3000);
var menu_button = document.getElementById('menu');
var menu = document.getElementById('menu_show');
var user_id = document.getElementById('user_id');
var menu_close = document.getElementById('menu_close');
var slider = document.getElementById('slider_box');
var password = document.getElementById('password');
var login_button = document.getElementById('login_button');
var fade_out_delay;
var shade = "closed";
var auto_slide, move_direction;
var info_box = document.getElementById('slider_info');
var info_handle = document.getElementById('handle');

window.onload = start_auto_slider;
slider.addEventListener('mouseover', pause_auto_slider, false);
slider.addEventListener('mouseout', start_auto_slider, false);
info_handle.addEventListener('click', info_slider_show, false);
login_button.addEventListener('click', login_process, false);
menu_button.addEventListener('click', getClickPosition, false);
menu_button.addEventListener('click', show_menu, false);
menu_close.addEventListener('click', function () {
    menu_visibile = false;
    show_menu();
}, false);
//show info about the current slider image
function info_slider_show() {
    if (shade === "closed") {
        document.getElementById("slider_info").style["minHeight"] = "110px";
        document.getElementById("slider_info").style["transition"] = "min-height .2s";
        setTimeout(function () {
            document.getElementById("slider_info").style["minWidth"] = "200px";
            document.getElementById("slider_info").style["letterSpacing"] = "4px";
            document.getElementById("slider_info").style["transition"] = "min-width .15s, letter-spacing .2s";
        }, 200);
        shade = "open";
    } else {
        document.getElementById("slider_info").style["minHeight"] = "35px";
        document.getElementById("slider_info").style["minWidth"] = "150px";
        document.getElementById("slider_info").style["letterSpacing"] = "2px";
        document.getElementById("slider_info").style["transition"] = "min-height .2s, min-width .15s, letter-spacing .1s";
        shade = "closed";
    }
}

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

    if (menu_visibile === true) {
        menu.style["visibility"] = "hidden";
        menu_visibile = false;
    } else {
        x_left = (x_left + 30) + "px";
        y_top = (y_top + 60) + "px";
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
        check_login("fail"); // ajax function will replace this to return dynamic login results
    }
}

function login_step_one() {
// do nothing if text input is empty
    if (usersName.value.length !== 0) {
// store username in 'user' so that future string manipulation
// dosen't affect what the original user input
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
            greeting = "Greetings, ";
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

var img_arr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
var current_image = 0;
function start_auto_slider() {
    autoslide = setInterval(image_auto_slider, 4000);
}

function pause_auto_slider() {
    window.clearInterval(autoslide);
    autoslide = null;
}

function image_auto_slider() {
// auto advance image slider forwards
//image_slider_click("next");
// auto advance image slider backwards
    image_slider_click("prev");
}

function image_slider_click(button) {
    if ((current_image === (img_arr.length - 1)) && (button === "next")) {
        move_direction = "5px";
        slider_image_update(0);
    } else if ((current_image === 0) && (button === "prev")) {
        move_direction = "-5px";
        slider_image_update(img_arr.length - 1);
    } else if (button === "next") {
        move_direction = "5px";
        slider_image_update((current_image + 1));
    } else if (button === "prev") {
        move_direction = "-5px";
        slider_image_update((current_image - 1));
    } else {
        move_direction = "0px";
        slider_image_update(button);
    }
}

function slider_image_update(curr_img) {
    /* todo list: make non- active button resets into for loop with a get elements by class array catch */
    current_image = curr_img;
    sliderbutton = "slider" + curr_img;
    document.getElementById("slider_box").style["backgroundPositionX"] = move_direction;
    document.getElementById("slider_box").style["transition"] = "background-position-x .75s";
    document.getElementById("slider_box").style["backgroundImage"] = "url(images/image" + current_image + ".jpg)";
    document.getElementById("slider0").style["color"] = "rgba(250, 250, 250, 0.8)";
    document.getElementById("slider1").style["color"] = "rgba(250, 250, 250, 0.8)";
    document.getElementById("slider2").style["color"] = "rgba(250, 250, 250, 0.8)";
    document.getElementById("slider3").style["color"] = "rgba(250, 250, 250, 0.8)";
    document.getElementById("slider0").style["textShadow"] = "0px 1px 0px rgba(0, 0, 0, 1)";
    document.getElementById("slider1").style["textShadow"] = "0px 1px 0px rgba(0, 0, 0, 1)";
    document.getElementById("slider2").style["textShadow"] = "0px 1px 0px rgba(0, 0, 0, 1)";
    document.getElementById("slider3").style["textShadow"] = "0px 1px 0px rgba(0, 0, 0, 1)";
    document.getElementById("slider0").style["fontSize"] = "30px";
    document.getElementById("slider1").style["fontSize"] = "30px";
    document.getElementById("slider2").style["fontSize"] = "30px";
    document.getElementById("slider3").style["fontSize"] = "30px";
    document.getElementById("slider0").style["verticalAlign"] = "baseline";
    document.getElementById("slider1").style["verticalAlign"] = "baseline";
    document.getElementById("slider2").style["verticalAlign"] = "baseline";
    document.getElementById("slider3").style["verticalAlign"] = "baseline";
    document.getElementById("slider0").innerHTML = "○";
    document.getElementById("slider1").innerHTML = "○";
    document.getElementById("slider2").innerHTML = "○";
    document.getElementById("slider3").innerHTML = "○";
    document.getElementById(sliderbutton).innerHTML = "•";
    document.getElementById(sliderbutton).style["color"] = "rgba(255,255,255,1)";
    document.getElementById(sliderbutton).style["textShadow"] = "0px 4px 4px rgba(0, 0, 0, .7)";
    document.getElementById(sliderbutton).style["fontWeight"] = "900";
    document.getElementById(sliderbutton).style["verticalAlign"] = "super";
    document.getElementById(sliderbutton).style["transition"] = "color .5s, font-weight .25s";
    document.getElementById("slider_box").style["transition"] = "background-image .75s, background-position-x .75s";
    document.getElementById(sliderbutton).style["transition"] = "font-weight .25s, background-position-x .25s, text-shadow .25s";
}

