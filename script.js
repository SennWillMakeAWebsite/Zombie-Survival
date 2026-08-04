const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

// Background hitam
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Lingkaran merah
ctx.beginPath();
ctx.arc(400, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
