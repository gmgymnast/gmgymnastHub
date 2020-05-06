<?php
  date_default_timezone_set('America/Detroit');
  include 'includes/comments.inc.php';
  include 'includes/dbh.inc.php';
?>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="A hub for my business.">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles/style.css">
    <title>gmgymnastHub</title>
    <header>
      <nav class="Navigation">
        <ul class="header">
          <li class="logo">
            <div class="logo">
              <img src="images/Logo2.png" alt="logo">
            </div>
          </li>
          <li class="header"><a class="header" href="index.php">Home</a></li>
          <li class="header"><a class="header" href="#">Portfolio</a></li>
          <li class="header"><a class="header" href="#">About Me</a></li>
          <li class="header"><a class="header" href="#">Contact</a></li>
          <li class="header">
            <div class="LoginFields">
              <?php
                          if (isset($_SESSION['userId'])) {
                              echo '
                                      <li class="header">
                                          <form action="includes/logout.inc.php" method="post">
                                          <button class="header" type="submit" name="logout-submit">Logout</button>
                                          </form>
                                      </li>';
                          } else {
                              echo '
                                      <form action="includes/login.inc.php" method="post">
                                          <div class="TypeFields">
                                              <input type="text" class="Username Email" name="mailuid" placeholder="Username/Email...">
                                              <input type="password" class="Password" name="pwd" placeholder="Password">
                                              <button class="header" type="submit" name="login-submit">Login</button>
                                          </div>
                                      </form>
                                      <li class="header">
                                      <a class="header" href="signup.php">Signup</a>
                                      </li>';
                          }
                          ?>
            </div>
          </li>
        </ul>
      </nav>
      <?php
          if (isset($_GET['error'])) {
              if ($_GET['error'] == "wrongpwd") {
                  header("Location: ../gmgymnastHub/login.php?error=forgotpassword" . $email);
                  exit();
              }
          }
          ?>
    </header>
  </head>
<body>
