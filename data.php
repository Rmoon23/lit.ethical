<?php
// data.php
include 'config.php'; // Подключение к базе данных

// Пример запроса к базе данных
$stmt = $conn->prepare("SELECT * FROM users");
$stmt->execute();

// Получаем результат в формате JSON
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Возвращаем данные в виде JSON
echo json_encode($result);
?>
