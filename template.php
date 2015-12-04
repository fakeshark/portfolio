<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <title>Brian-MacDonald.com | Template Page</title>
    </head>
    <body>
        <div id="wrapper">
            <header>
                <div class="head_container" >
                    <div class="head_flex_menu" id="menu_button"><div id="menu_button_box"></div>
                        <div id="menu_show" onmouseover="reset_fade_out()" onmouseout="start_fade_out()">
                            <div id="menu_header">
                                <hr class="menu_hr">
                                <div id="menu_close_button" class="menu_close_button" onclick="show_menu()"></div>
                            </div>
                            <div id="search_flex">
                                <div id="search_box" class="search_box_container" ><input type="text" id="search" placeholder="Search...">
                                    <input type="button" id="search_button" class="search_button" onclick="search()" value="⃝" ></div>
                            </div>
                        </div>
                    </div>
                    <div class="head_flex_logo" id="logo"></div >
                    <div class="head_flex_spacer" > </div>
                    <div class="head_flex_spacer" > </div>
                    <div class="head_login" id="visitor_login" >
                        <div id="login_container" class="login_container" >
                            <input type="text" id="user_id" placeholder="Please enter your username"><input type="password" id="password" placeholder="password">
                            <input type="button" id="login_button" class="login_button" onclick="login_process()" value="⃝" >
                        </div>
                    </div>
                </div>
            </header>
            <div id="all_content">
                <section id="left_side_bar">
                    <section id="slider_box">
                        <div id="slide_spacer" class="flex4"> </div>
                        <div id="slider_info" class="slider_text centered flex1">Current Projects:</div>
                        <div id="slide_spacer" class="flex8"> </div>
                        <div id="prev_next_buttons">
                            <div id="next" class="flex1" onclick="image_slider_click('next')"></div>
                            <div id="slider_buttons" class="button_text flex3">
                                <div class="slide_spacer"></div>
                                <div id="slider3" class="slidebutton">⃝</div>
                                <div id="slider2" class="slidebutton">⃝</div>
                                <div id="slider1" class="slidebutton">⃝</div>
                                <div id="slider0" class="slidebutton">⃝</div>
                                <div class="slide_spacer"></div>
                            </div>
                            <div id="prev" class="flex1" onclick="image_slider_click('prev')"></div>
                        </div>
                    </section>
                    <section id="left_lower_box">
                        <div id="contact_message_container" >
                            Send me a message!
                        </div>
                        <div id="social_media_container" >
                            <div id="facebook" class="social_media_buttons">Fb</div>
                            <div id="twitter" class="social_media_buttons">Tw</div>
                            <div id="googleplus" class="social_media_buttons">G+</div>
                            <div id="instagram" class="social_media_buttons">Ig</div>
                        </div>
                    </section>
                </section> 
                <section id="right_content_box">
                    <div id="blog">
                        <div id="greeting"></div><br />
                        Blog Goes HERE!!!<br />
                        <hr />
                    </div>                    
                </section>
            </div>
            <footer>
                footer
            </footer>
        </div>
        <script type="text/javascript" src="scripts/functionality.js"></script>
    </body>
</html>
