<?php
require "header.php";
?>

<main class="login">
  <div class="login">
    <section class="login">
      <h1 class="login">Login</h1>
      <?php
      if (isset($_GET['error'])) {
        if ($_GET['error'] == "emptyfields") {
          echo '  
                  <ul class="login">
                    <li class="login top"><h4 class="login">Fill in all Fields</h4></li>
                  </ul>
                ';
        } else if ($_GET['error'] == "sqlerror") {
          echo '  
                  <ul class="login">
                    <li class="login top"><h4 class="login">SQL Error: Please Try Again</h4></li>
                  </ul>
                ';
        }  else if ($_GET['error'] == "forgotpassword") {
          echo '  
                  <ul class="login">
                    <li class="login top"><h4 class="login">Wrong Password</h4></li>
                  </ul>
                ';
        } else if ($_GET['error'] == "nouser") {
          echo '  
                  <ul class="login">
                    <li class="login top"><h4 class="login">Wrong Username</h4></li>
                  </ul>
                ';
        } 
      }
      ?>

      <form action="includes/login.inc.php" method="post">
        <ul class="login loginform">
          <li class="login"><input class="login Username" type="text" name="mailuid" placeholder="Username"></li>
          <li class="login"><input class="login Password" type="password" name="pwd" placeholder="Password"></li>
          <li class="login" class=bottom><button class="login" type="submit" name="login-submit">Login</button></li>
          <?php
                    if (isset($_GET['error'])) {
                        if ($_GET['error'] == "forgotpassword") {
                            echo '  
                                    <li class="login" class="bottom"><a class="login" href="reset-password.php">Forgot Your Password?</a></li>
                                 ';
                        } 
                    }
                    if (isset($_GET['newpwd'])) {
                        if ($_GET['newpwd'] == "passwordupdated") {
                            echo '  
                                            <p class="login">Your Password Has Been Reset!</p>
                                 ';
                        }
                    }
                    ?>
        </ul>
      </form>
    </section>
  </div>
</main>

<?php
require "footer.php";
?>