<?php
$to = 'redcoolings@gmail.com';
$subject = 'Відгук з сайту Kalush';

$text = "Ім'я: ".$_POST['name'].". \nПовідомлення: ".$_POST['message']."\nЧас: ".date("d.m.Y - H:i");

$headers = array(
  'From' => 'redcoolings@gmail.com',
  'Reply-To' => 'wesski19@gmail.com', 
  'X-Mailer' => 'PHP/' . phpversion()
);

// Отправляем
mail($to, $subject, $text, $headers);
   ?>