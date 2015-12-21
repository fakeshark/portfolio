var menu_visibile = false;
var mouseout_delay = setTimeout(menu_fadeout, 3000);
var menu_button = document.getElementById('menu');
var menu = document.getElementById('menu_show');
var user_id = document.getElementById('user_id');
var menu_close = document.getElementById('menu_close');
var slider = document.getElementById('slider_box');
var password = document.getElementById('password');
var login_button = document.getElementById('login_button');
var info_close = document.getElementById('info_close');
var info_text = document.getElementById('info_text');
var slider0 = document.getElementById('slider0');
var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');
var slider_info_delay;
var contact_state = "closed";
var social_state = "closed";
var about_state = "closed";
var fade_out_delay;
var shade = "closed";
var auto_slide, move_direction;
var info_handle = document.getElementById('handle');

document.getElementById("contact_button").addEventListener('click', contact_expand, false);
document.getElementById("social_button").addEventListener('click', social_expand, false);
document.getElementById("about_button").addEventListener('click', about_expand, false);

window.onload = start_auto_slider, slider_image_update(3);

user_id.addEventListener('keydown', function (e) {
    if (13 === e.keyCode) {
        login_process();
    }
});
password.addEventListener('keydown', function (e) {
    if (13 === e.keyCode) {
        check_login("fail");
    }
});

slider.addEventListener('mouseover', pause_auto_slider, false);
slider.addEventListener('mouseout', start_auto_slider, false);
slider.addEventListener('mouseover', slider_info_mouseover, false);
slider.addEventListener('mouseout', slider_info_mouseout, false);
slider0.addEventListener('click', function () {slider_image_update(0);}, false);
slider1.addEventListener('click', function () {slider_image_update(1);}, false);
slider2.addEventListener('click', function () {slider_image_update(2);}, false);
slider3.addEventListener('click', function () {slider_image_update(3);}, false);
info_close.addEventListener('click', slider_info_collapse, false);
info_handle.addEventListener('click', slider_info, false);
login_button.addEventListener('click', login_process, false);
menu_button.addEventListener('click', getClickPosition, false);
menu_button.addEventListener('click', show_menu, false);
menu_close.addEventListener('click', function () {
    menu_visibile = false;
    show_menu();
}, false);

//show info about the current slider image
function slider_info() {
    if (shade === "closed") {
        slider_info_expand();
    } else {
        slider_info_collapse();
    }
}

function slider_info_expand() {
    shade = "open";
    document.getElementById("slider_info").style["minHeight"] = "110px";
    document.getElementById("slider_info").style["transition"] = "min-height .2s";
    setTimeout(function () {
        document.getElementById("slider_info").style["minWidth"] = "250px";
        document.getElementById("slider_info").style["letterSpacing"] = "4px";
        document.getElementById("slider_info").style["transition"] = "min-width .15s, letter-spacing .2s";
        document.getElementById("slider_info").style["fontStyle"] = "italic";
        document.getElementById("slider_info").style["color"] = "rgba(130, 215, 250, 1)";
        info_text.style["visibility"] = "visible";
        setTimeout(function () {document.getElementById('info_close').style["visibility"] = "visible";},210);
        }, 200);
}

function contact_expand () {
    if (contact_state === "closed") {
        document.getElementById("contact_button").className = 'side_bar_button_minus';
        document.getElementById("social_button").className = 'side_bar_button_plus';
        document.getElementById("about_button").className = 'side_bar_button_plus';
        contact_form_expand();
        social_form_contract();
        about_form_contract();
    } else {
        document.getElementById("contact_button").className = 'side_bar_button_plus';
        contact_form_contract();
    }
}

function social_expand () {
    if (social_state === "closed") {
        document.getElementById("contact_button").className = 'side_bar_button_plus';
        document.getElementById("social_button").className = 'side_bar_button_minus';
        document.getElementById("about_button").className = 'side_bar_button_plus';
        contact_form_contract();
        social_form_expand();
        about_form_contract();
    } else {
        document.getElementById("social_button").className = 'side_bar_button_plus';
        social_form_contract();
    }
}

function about_expand () {
    if (about_state === "closed") {
        document.getElementById("contact_button").className = 'side_bar_button_plus';
        document.getElementById("social_button").className = 'side_bar_button_plus';
        document.getElementById("about_button").className = 'side_bar_button_minus';
        contact_form_contract();
        social_form_contract();
        about_form_expand();
    } else {
        document.getElementById("about_button").className = 'side_bar_button_plus';
        about_form_contract();
    }
}

function contact_form_expand () {
    document.getElementById("contact_form").style["visibility"] = "visible";
    document.getElementById("contact_form").style["width"] = "270px";
    document.getElementById("contact_form").style["boxShadow"] = "0px 0px 15px rgba(245,140,35,.2), inset 3px 5px 15px rgba(45,20,0,.0)";
    document.getElementById("contact_form").style["border-bottom"] = "2px solid rgba(253,128,36,1)";
    document.getElementById("contact_form").style["transition"] = "width .5s, border-bottom .5s, box-shadow .75s";
    setTimeout(function () {
    document.getElementById("contact_form").style["height"] = "200px";
    document.getElementById("contact_form").style["borderRadius"] = "6px";
    document.getElementById("contact_form").style["backgroundColor"] = "rgba(45,30,10,.6)";
    document.getElementById("contact_form").style["border"] = "2px solid rgba(157,67,5,1)";
    document.getElementById("contact_form").style["borderBottom"] = "2px solid rgba(253,128,36,1)";
    document.getElementById("contact_form").style["borderTop"] = "2px solid rgba(111,47,2,1)";
    document.getElementById("contact_form").style["boxShadow"] = "0px 0px 40px rgba(245,140,35,.9), inset 1px 5px 35px rgba(45,20,0,.9)";
    document.getElementById("contact_form").style["transition"] = "height .5s, border .25s, border-top .25s, border-bottom .4s, border-radius .25s";
    },550);
    contact_state = "opened";
}

function populate_social_media_buttons(state) {
    timeAmt = 250;
    if (state === "visible") {
    setTimeout(function () { document.getElementById("github").style["visibility"] = state; },(timeAmt += 100));
    setTimeout(function () { document.getElementById("twitter").style["visibility"] = state; },(timeAmt += 100));
    setTimeout(function () { document.getElementById("linkedin").style["visibility"] = state; },(timeAmt += 100));
    setTimeout(function () { document.getElementById("vimeo").style["visibility"] = state; },(timeAmt += 100));
    setTimeout(function () { document.getElementById("facebook").style["visibility"] = state; },(timeAmt += 100));
    setTimeout(function () { document.getElementById("dribble").style["visibility"] = state; },(timeAmt += 100));
    setTimeout(function () { document.getElementById("filler1").style["visibility"] = state; },(timeAmt += 100)); 
    setTimeout(function () { document.getElementById("filler2").style["visibility"] = state; },(timeAmt += 100));
    } else {
    setTimeout(function () { document.getElementById("github").style["visibility"] = state; },(timeAmt -= 50));
    setTimeout(function () { document.getElementById("twitter").style["visibility"] = state; },(timeAmt -= 50));
    setTimeout(function () { document.getElementById("linkedin").style["visibility"] = state; },(timeAmt -= 50));
    setTimeout(function () { document.getElementById("vimeo").style["visibility"] = state; },(timeAmt -= 50));
    setTimeout(function () { document.getElementById("facebook").style["visibility"] = state; },(timeAmt -= 50));
    setTimeout(function () { document.getElementById("dribble").style["visibility"] = state; },(timeAmt -= 50));    
    setTimeout(function () { document.getElementById("filler1").style["visibility"] = state; },(timeAmt -= 50));
    setTimeout(function () { document.getElementById("filler2").style["visibility"] = state; },(timeAmt -= 50));
    }

}

function contact_form_contract () {
    document.getElementById("contact_form").style["width"] = "1px";
    document.getElementById("contact_form").style["height"] = "1px";
    document.getElementById("contact_form").style["transition"] = "height .5s, width .5s";
    setTimeout(function () {
    document.getElementById("contact_form").style["border"] = "2px solid rgba(253,128,36,0)";
    document.getElementById("contact_form").style["backgroundColor"] = "rgba(45,30,10,.0)";
    document.getElementById("contact_form").style["boxShadow"] = "0px 0px 40px rgba(245,140,35,.0), inset 1px 5px 35px rgba(45,20,0,.0)";
    document.getElementById("contact_form").style["visibility"] = "hidden";
    },500);
    contact_state = "closed";
}

function social_form_expand () {
    document.getElementById("social_form").style["visibility"] = "visible";
    document.getElementById("social_form").style["width"] = "260px";
    document.getElementById("social_form").style["boxShadow"] = "0px 0px 15px rgba(245,140,35,.2), inset 3px 5px 15px rgba(45,20,0,.0)";
    document.getElementById("social_form").style["border-bottom"] = "2px solid rgba(253,128,36,1)";
    document.getElementById("social_form").style["padding"] = "5px";
    document.getElementById("social_form").style["transition"] = "width .5s, border-bottom .5s, box-shadow .75s";
    setTimeout(function () {
    document.getElementById("social_form").style["height"] = "130px";
    document.getElementById("social_form").style["borderRadius"] = "6px";
    document.getElementById("social_form").style["backgroundColor"] = "rgba(45,30,10,.6)";
    document.getElementById("social_form").style["border"] = "2px solid rgba(157,67,5,1)";
    document.getElementById("social_form").style["borderBottom"] = "2px solid rgba(253,128,36,1)";
    document.getElementById("social_form").style["borderTop"] = "2px solid rgba(111,47,2,1)";
    document.getElementById("social_form").style["boxShadow"] = "0px 0px 40px rgba(245,140,35,.9), inset 1px 5px 35px rgba(45,20,0,.9)";
    document.getElementById("social_form").style["transition"] = "height .5s, border .25s, border-top .25s, border-bottom .4s, border-radius .25s";
    },550);
    setTimeout(function () { populate_social_media_buttons("visible"); },475);
    social_state = "opened";
}

function social_form_contract () {
    populate_social_media_buttons("hidden");
    setTimeout(function () {
    document.getElementById("social_form").style["width"] = "1px";
    document.getElementById("social_form").style["height"] = "1px";
    document.getElementById("social_form").style["padding"] = "0px";
    document.getElementById("social_form").style["transition"] = "height .5s, width .5s";
    },300);
    setTimeout(function () {
    document.getElementById("social_form").style["border"] = "2px solid rgba(253,128,36,0)";
    document.getElementById("social_form").style["backgroundColor"] = "rgba(45,30,10,.0)";
    document.getElementById("social_form").style["boxShadow"] = "0px 0px 40px rgba(245,140,35,.0), inset 1px 5px 35px rgba(45,20,0,.0)";
    document.getElementById("social_form").style["visibility"] = "hidden";
    },900);
    social_state = "closed";
}

function about_form_expand () {
    document.getElementById("about_form").style["visibility"] = "visible";
    document.getElementById("about_form").style["width"] = "270px";
    document.getElementById("about_form").style["boxShadow"] = "0px 0px 15px rgba(245,140,35,.2), inset 3px 5px 15px rgba(45,20,0,.0)";
    document.getElementById("about_form").style["border-bottom"] = "2px solid rgba(253,128,36,1)";
    document.getElementById("about_form").style["transition"] = "width .5s, border-bottom .5s, box-shadow .75s";
    setTimeout(function () {
    document.getElementById("about_form").style["height"] = "200px";
    document.getElementById("about_form").style["borderRadius"] = "6px";
    document.getElementById("about_form").style["backgroundColor"] = "rgba(45,30,10,.6)";
    document.getElementById("about_form").style["border"] = "2px solid rgba(157,67,5,1)";
    document.getElementById("about_form").style["borderBottom"] = "2px solid rgba(253,128,36,1)";
    document.getElementById("about_form").style["borderTop"] = "2px solid rgba(111,47,2,1)";
    document.getElementById("about_form").style["boxShadow"] = "0px 0px 40px rgba(245,140,35,.9), inset 1px 5px 35px rgba(45,20,0,.9)";
    document.getElementById("about_form").style["transition"] = "height .5s, border .25s, border-top .25s, border-bottom .4s, border-radius .25s";
    },550);
    about_state = "opened";
}

function about_form_contract () {
    document.getElementById("about_form").style["width"] = "1px";
    document.getElementById("about_form").style["height"] = "1px";
    document.getElementById("about_form").style["transition"] = "height .5s, width .5s";
    setTimeout(function () {
    document.getElementById("about_form").style["border"] = "2px solid rgba(253,128,36,0)";
    document.getElementById("about_form").style["backgroundColor"] = "rgba(45,30,10,.0)";
    document.getElementById("about_form").style["boxShadow"] = "0px 0px 40px rgba(245,140,35,.0), inset 1px 5px 35px rgba(45,20,0,.0)";
    document.getElementById("about_form").style["visibility"] = "hidden";
    },500);  
    about_state = "closed";
}

function slider_info_mouseover() {
    clearTimeout(slider_info_delay);
}

function slider_info_mouseout() {
    slider_info_delay = setTimeout(slider_info_collapse, 2500);
}

function slider_info_collapse() {
    shade = "closed";
    document.getElementById("slider_info").style["minHeight"] = "35px";
    document.getElementById("slider_info").style["minWidth"] = "150px";
    document.getElementById("slider_info").style["letterSpacing"] = "2px";
    document.getElementById("slider_info").style["fontStyle"] = "normal";
    document.getElementById("slider_info").style["transition"] = "min-height .2s, min-width .15s, letter-spacing .1s, font-style .1s";
    document.getElementById("slider_info").style["color"] = "rgba(95, 180, 226, 1)";
    info_text.style["visibility"] = "hidden";
    document.getElementById('info_close').style["visibility"] = "hidden";
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
        check_login("success"); // ajax function will replace this to return dynamic login results
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
    setTimeout(login_greeting, 1000);
}

function login_greeting () {
        user_id.style["visibility"] = "hidden";
        user_id.style["display"] = "none";
        
        password.style["visibility"] = "hidden";
        password.style["display"] = "none";
        
        document.getElementById("login_container").style["width"] = "32px";
        document.getElementById("login_container").style["opacity"] = "0";
        document.getElementById("login_container").style["transition"] = "width .5s, opacity 75s";
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
        setTimeout(login_success, 600);
        
    } else {
        document.getElementById("login_button").style["backgroundPositionY"] = "-40px";
        document.getElementById("login_button").style["transition"] = "background-position-y .75s";
        setTimeout(login_fail, 600);
    }
}
var img_info_arr = [
    "Image 1 shows some stuff... Blah, blah, blah, blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Image 2 shows some stuff... Blah, blah, blah, blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Image 3 shows some stuff... Blah, blah, blah, blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Image 4 shows some stuff... Blah, blah, blah, blah."];

var img_arr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
var current_image = 0;
function start_auto_slider() {
    autoslide = setInterval(image_auto_slider, 3500);
}

function pause_auto_slider() {
    window.clearInterval(autoslide);
    autoslide = null;
}

function image_auto_slider() {
// auto advance image slider forwards (right to left)
//image_slider_click("next");
// auto advance image slider backwards (left to right)
    image_slider_click("prev");
}

function image_slider_click(button) {
    if ((current_image === (img_arr.length - 1)) && (button === "next")) {
        slider_image_update(0);
    } else if ((current_image === 0) && (button === "prev")) {
        slider_image_update(img_arr.length - 1);
    } else if (button === "next") {
        slider_image_update((current_image + 1));
    } else if (button === "prev") {
        slider_image_update((current_image - 1));
    } else {
        slider_image_update(button);
    }
}

function update_info_text(info) {
    info_text.style['color'] = "rgba(105, 190, 236, 0)";
    info_text.style['textShadow'] = "1px 1px 0px rgba(50,50,50,0)";
    setTimeout(function(){
        info_text.innerHTML = img_info_arr[info];
        info_text.style['color'] = "rgba(105, 190, 236, .9)";
        info_text.style['textShadow'] = "1px 1px 0px rgba(50,50,50,0.6)";
        info_text.style['transition'] = "color .75s, text-shadow .75s";}, 500);
}

function slider_image_update(curr_img) {
    /* todo list: make non- active button resets into for loop with a get elements by class array catch */
    current_image = curr_img;
    sliderbutton = "slider" + curr_img;
    document.getElementById("slider_box").style["transition"] = "background-position-x .75s";
    document.getElementById("slider_box").style["backgroundImage"] = "url(images/image" + current_image + ".jpg)";
    update_info_text(current_image);
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

