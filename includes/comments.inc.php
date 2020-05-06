<?php

function setComments() {

  require 'dbh.inc.php';
  
  if (isset($_GET['login'])) {
    if ($_GET['login'] == "success") {
      if(isset($_POST['General-Discussion-Post-Submit'])) {
        $uid = $_POST['uid'];
        $date = $_POST['date'];
        $title = $_POST['General-Discussion-Post-Title'];
        $message = $_POST['General-Discussion-Post-Message'];

        if($title == null || $message == null) {
          echo "Empty Fields";
        } else {
        $sql = "INSERT INTO generaldiscussioncontents (uid, date, title, message) 
        VALUES ('$uid', '$date', '$title', '$message')";

        $result = $conn->query($sql);
        }
      }
    }
  }
}

function getComments($conn) {
  $sql = "SELECT * FROM generaldiscussioncontents";
  $result = $conn->query($sql);
  $i = 0;
  while($row = $result->fetch_assoc()) {
    echo "<div class='title-box'>";
      echo 
      "<form method='POST' action='editComment.php'>
        <input type='hidden' name='idPosts' value='".$row['idPosts']."'>
        <input type='hidden' name='uid' value='".$row['uid']."'>
        <input type='hidden' name='date' value='".$row['date']."'>
        <input type='hidden' name='title' value='".$row['title']."'>
        <input type='hidden' name='message' value='".$row['message']."'>
        <button class='editButton'>Edit</button>
      </form>";
      echo $row['title']."<br>";
      echo "By: ".$row['uid']." ";
      echo " ".$row['date']."<br>";
    echo "</div>";

    echo "<div class='message-box'>";
      echo "<div class='message'>".nl2br($row['message'])."</div>";
      echo "<textarea class='index General-Discussion-Post-Comment' name='General-Discussion-Post-Comment' id='$i' onClick='showButtons(this.id)' placeholder='Add a public comment...'></textarea>";
      echo "<div class'button'>";
        echo "<button class='index Create-Comment-Button' id='$i' type='submit' name='create-comment'>COMMENT</button>";
        echo "<button class='index Create-Comment-Cancel' id='$i' id='clear' name='create-comment-cancel' onClick='hidebuttons(this.id)'>CANCEL</button>";
      echo "</div>";
    echo "</div>";
     echo "<p class='commment-bottom-padding'></p>";
     $i += 1;
  }
}
  