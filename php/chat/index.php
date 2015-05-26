<?php
	/*  This is a sample chat system based on an article at:
	http://code.tutsplus.com/tutorials/how-to-create-a-simple-web-based-chat-application--net-5931#disqus_thread
 	 */
session_start();

if(isset($_GET['logout'])) {	
	
	//Simple exit message
	$fp = fopen("log.html", 'a');
	fwrite($fp, "<div class='msgln'><i>User ". $_SESSION['name'] ." has left the chat session.</i><br></div>");
	fclose($fp);
	
	session_destroy();
	header("Location: index.php"); //Redirect the user
}

function loginForm() {
	echo'
	<div id="loginform">
	<form action="index.php" method="post">
		<p>Please enter your name to continue:</p>
		<label for="name">Name:</label>
		<input type="text" name="name" id="name" />
		<input type="submit" name="enter" id="enter" value="Enter" />
	</form>
	</div>
	';
}

if(isset($_POST['enter'])){
	if($_POST['name'] != ""){
		$_SESSION['name'] = stripslashes(htmlspecialchars($_POST['name']));
	}
	else{
		echo '<span class="error">Please type in a name</span>';
	}
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
	<title>Chat - Customer Module</title>
	<link type="text/css" rel="stylesheet" href="jquery/jquery-ui.css">
	<link type="text/css" rel="stylesheet" href="jquery/jquery-ui.theme.css">
	<link type="text/css" rel="stylesheet" href="style.css" />
	</head>

<?php
if(!isset($_SESSION['name'])){
	loginForm();
}
else{
?>
<body>
	<div id="wrapper">
		<div id="menu">
			<p class="welcome">Welcome, <b><?php echo $_SESSION['name']; ?></b></p>
			<p class="logout"><a id="exit" href="#">Exit Chat</a></p>
			<div style="clear:both"></div>
		</div>	
		<div id="chatbox">
		<?php
		if(file_exists("log.html") && filesize("log.html") > 0){
			$handle = fopen("log.html", "r");
			$contents = fread($handle, filesize("log.html"));
			fclose($handle);
			
			echo $contents;
		}
		?>
		</div>
		
		<form name="message" action="">
			<input name="usermsg" type="text" id="usermsg" size="63" />
			<input name="submitmsg" type="submit"  id="submitmsg" value="Send" />
		</form>
		</div>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
	<script type="text/javascript" src="jquery/jquery-ui.js"></script>
	<script type="text/javascript" src="js/javscript.js"></script>

	<?php
	}
	?>
	</body>
</html>