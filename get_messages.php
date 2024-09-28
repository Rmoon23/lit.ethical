<?php
// Подключение к базе данных
$servername = "localhost";
$username = " lana20fc_ak";
$password = "1234Mysql.*";
$dbname = " lana20fc_ak";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-запрос для получения данных
$sql = "SELECT name, message FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

$messages = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
}

// Возвращаем данные в формате JSON
header('Content-Type: application/json');
echo json_encode($messages);

$conn->close();
?>
