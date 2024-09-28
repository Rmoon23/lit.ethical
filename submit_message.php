<?php
require 'config.php';  // Подключаем файл конфигурации
require 'data.php';    // Подключаем файл для работы с данными

// Здесь ваш код для обработки отправки сообщения

// Подключение к базе данных
$servername = "localhost";
$username = " lana20fc_ak"; // Ваше имя пользователя MySQL
$password = "1234Mysql.*"; // Ваш пароль MySQL
$dbname = " lana20fc_ak"; // Ваше имя базы данных

// Подключаемся к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получаем данные из формы
$name = $_POST['name'];
$message = $_POST['message'];

// SQL-запрос для вставки данных в таблицу
$sql = "INSERT INTO messages (name, message) VALUES ('$name', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Закрываем соединение
$conn->close();
?>
