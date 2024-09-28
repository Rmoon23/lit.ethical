<?php
// Параметры подключения к базе данных
$host = "localhost"; // Обычно "localhost", если сервер базы данных находится на том же сервере
$dbname = " lana20fc_ak"; // Имя базы данных
$username = " lana20fc_ak"; // Имя пользователя базы данных
$password = "1234Mysql.*"; // Пароль пользователя базы данных

// Попытка подключения
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    // Установка режима ошибки PDO на исключение
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Подключение успешно!";
} catch (PDOException $e) {
    echo "Ошибка подключения: " . $e->getMessage();
}
?>
