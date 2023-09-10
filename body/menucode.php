<?php 
    if ($_POST) {
        if(isset($_POST["main"])) {
            header("Location: index.php");
            exit();
        }
        else if(isset($_POST["search"])) {
            header("Location: search.php");
            exit();
        }
        else if(isset($_POST["browse"])) {
            header("Location: browse.php");
            exit();
        }
        else if(isset($_POST["aboutus"])) {
            header("Location: aboutus.php");
            exit();
        }
        else if(isset($_POST["help"])) {
            header("Location: help.php");
            exit();
        }
    }
 ?>