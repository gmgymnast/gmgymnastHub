<?php
    require "header.php";
?>

    <main class="create-new-password">
        <div class="create-new-password">
            <section class="create-new-password">
               
                <?php
                    $selector = $_GET["selector"];
                    $validator = $_GET["validator"];

                    if (empty($selector) || empty($validator)) {
                        echo "Could not validate your request!";
                    }
                    else {
                        if (ctype_xdigit($selector) !== false && ctype_xdigit($validator) !== false) {
                            ?>
                            
                            <ul class="create-new-password">
                                <li class="create-new-password">
                                    <p class="create-new-password">Create A New Password</p>
                                </li>   
                                <li class="create-new-password">  
                               <form class="create-new-password" action="includes/reset-password.inc.php" method="post">
                                    <input class="create-new-password" type="hidden" name="selector" value="<?php echo $selector ?>">
                                    <input class="create-new-password" type="hidden" name="validator" value="<?php echo $selector ?>">
                                    <input class="create-new-password Password" type="password" name="pwd" placeholder="Enter A New Password...">
                                    <input class="create-new-password Password" type="password" name="pwd-repeat" placeholder="Repeat New Password...">
                                </li>  
                                <li class="create-new-password">
                                    <button class="create-new-password" type="submit" name="reset-password-submit">Reset Password</button>
                                </form>
                                </li>
                            </ul>
                            <?php
                        }
                    }
                ?>

            </section>
        </div>
    </main>

<?php
    require "footer.php";
?>