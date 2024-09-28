<?php
// Подключение к базе данных через config.php
require 'config.php';

// Проверка, если данные были отправлены через метод POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из формы
    $name = $conn->real_escape_string($_POST['name']);
    $message = $conn->real_escape_string($_POST['message']);

    // SQL-запрос для вставки данных в таблицу messages
    $sql = "INSERT INTO messages (name, message) VALUES ('$name', '$message')";

    // Выполнение запроса и проверка на успешное выполнение
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Message saved successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error: ' . $conn->error]);
    }

    // Закрываем соединение
    $conn->close();
    exit();
}

// Получение сообщений из базы данных для отображения
$sql = "SELECT name, message, created_at FROM messages ORDER BY created_at DESC";
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

// Закрываем соединение
$conn->close();
?>
