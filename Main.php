<style>
    
    body {
    	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    	background-size: 400% 400%;
    	animation: gradient 15s ease infinite;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	align-items: center;
    	color: white;
    }
    
    a {
        text-decoration: none;
        margin: 20px;
        color: white;
    }

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
    
</style>
<body>

<?php

    $name = htmlspecialchars($_POST['fullName']);
        
    echo '<h2> Thank you ' . $name . '! Your information has been sent.</h2>';
        
    $servername = "localhost";
    $username = "jacolaim_guest";
    $password = "GuestPassword";
    $dbname = "jacolaim_contact";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $email = htmlspecialchars($_POST['email']);
    $number = htmlspecialchars($_POST['tel']);
    $comment = htmlspecialchars($_POST['comment']);

    
    $sql = "INSERT INTO information (name, email, number, comment)
    VALUES ('$name', '$email', '$number', '$comment')";
    
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    
    mysqli_close($conn);

    echo "<a href='https://www.jacobtbruce.com'> Go Back </a>";
?>

</body>
