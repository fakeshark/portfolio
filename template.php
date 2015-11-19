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
                            <div id="menu_close_button" class="menu_close_button" onclick="show_menu()"></div>
                            <hr class="menu_hr">
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
                        Current Projects:
                    </section>
                    <section id="left_lower_box">
                        left lower bar
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
