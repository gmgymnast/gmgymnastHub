<?php
    require "header.php";
?>

<?php
    $sql = "SELECT * FROM users WHERE uidUsers=?;";
    echo $sql;
?>
<?php
    require "footer.php";
?>