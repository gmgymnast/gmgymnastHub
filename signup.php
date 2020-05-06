<?php
    require "header.php";
?>

    <main class="signup">
        <div class="signup">
            <section class="signup">
               <h1 class="signup">Signup</h1>
               <?php
                if (isset($_GET['error'])) {
                    if ($_GET['error'] == "emptyfields") {
                            echo '  
                                    <p class="signuperror">Fill in all fields!</p>
                                 ';
                    }
                    else if($_GET['error'] == "invalidmailuid") {
                            echo '  
                                    <p class="signuperror">Invalid Username And Email!</p>
                                 ';
                    }
                    else if($_GET['error'] == "invalidmail") {
                            echo '  
                                    <p class="signuperror">Invalid Email!</p>
                                 ';
                    }
                    else if($_GET['error'] == "invaliduid") {
                            echo '  
                                    <p class="signuperror">Invalid Username!</p>
                                 ';
                    }
                    else if($_GET['error'] == "passwordcheck") {
                            echo '  
                                    <p class="signuperror">Passwords Dont Match!</p>
                                 ';
                    }
                    else if($_GET['error'] == "sqlerror") {
                            echo '  
                                    <p class="signuperror">Username Is Already Taken!</p>
                                 ';
                    }
                }
               ?>
                <form action="includes/signup.inc.php" method="post">
                   <ul class="signup" class="signupform">
                       <li class="signup"><input class="signup Username" type="text" name="uid" placeholder="Username"></li>
                       <li class="signup"><input class="signup Email" type="text" name="mail" placeholder="Email"></li>
                       <li class="signup"><input class="signup Password" type="password" name="pwd" placeholder="Password"></li>
                       <li class="signup"><input class="signup Password" type="password" name="pwd-repeat" placeholder="Repeat Password"></li>
                       <li class="signup"><button class="signup" type="submit" name="signup-submit">Signup</button></li>
                   </ul>
                </form>
            </section>
        </div>
    </main>

<?php
    require "footer.php";
?>