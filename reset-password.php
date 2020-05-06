<?php
    require "header.php";
?>

    <main class="reset-password">
        <div class="reset-password">
            <section class="reset-password">
               <h1 class="reset-password">Reset Your Password</h1>
               <p class="reset-password">An email will be sent to you with instructions on how to reset your password</p> 
                <form class="reset-password" action="includes/reset-request.inc.php" method="post">
                    <input class="reset-password Email" type="text" name="email" placeholder="Enter Your Email Address">
                    <button class="reset-password" type="submit" name="reset-request-submit">Receive New Password By Email</button>
                </form>
                <?php
                    if (isset($_GET['reset'])) {
                        if ($_GET['reset'] == "success") {
                                echo '  
                                        <p class="check-email", class="reset-password">Check Your Email!</p>
                                    ';
                        }
                    }
                ?>
            </section>
        </div>
    </main>

<?php
    require "footer.php";
?>