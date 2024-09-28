<?php
// Настройки подключения к базе данных
$servername = "localhost";  // Имя сервера базы данных
$username = " lana20fc_ak";         // Имя пользователя базы данных
$password = "123Mysql.*";             // Пароль для подключения к базе данных
$dbname = " lana20fc_ak";       // Имя базы данных

// Подключаемся к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
