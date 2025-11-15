<?php
// Parameter koneksi database
$servername = "localhost"; // Ganti dengan nama server Anda
$username = "root"; // Ganti dengan nama pengguna database Anda
$password = ""; // Ganti dengan kata sandi database Anda
$dbname = "feedback_db"; // Ganti dengan nama database Anda

// Buat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$name = $_POST['name'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];
$rating = $_POST['rating'];

// Siapkan dan jalankan pernyataan SQL untuk menyimpan data
$stmt = $conn->prepare("INSERT INTO feedback (name, email, pesan, rating) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssi", $name, $email, $pesan, $rating);

if ($stmt->execute()) {
    echo "Rekor baru berhasil dibuat";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>