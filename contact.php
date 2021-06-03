<?php 
    if($_POST) {
        $name = "";
        $visitor_email = "";
        $message = "";w
        $email_body = "<div>";
        
        if(isset($_POST['fname']) && isset($_POST['lname'])) {
            $name = filter_var($_POST['fname'], FILTER_SANITIZE_STRING) + " " + filter_var($_POST['lname'], FILTER_SANITIZE_STRING);
            $email_body .= "<div>
                            <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                            </div>";
        }
    
        if(isset($_POST['e'])) {
            $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['e']);
            $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
            $email_body .= "<div>
                            <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                            </div>";
        }
        
        if(isset($_POST['message'])) {
            $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
            $email_body .= "<div>
                            <label><b>Message:</b></label>&nbsp;<span>".$concerned_department."</span>
                            </div>";
        }
        
        $email_body .= "</div>";
    
        $headers  = "From: raymond.welgosh@gmail.com";
        
        if(mail("raymond.welgosh@gmail.com", $email_title, $email_body, $headers)) {
            echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
        } else {
            echo '<p>We are sorry but the email did not go through.</p>';
        }
        
    } else {
        echo '<p>Something went wrong</p>';
    }
?>