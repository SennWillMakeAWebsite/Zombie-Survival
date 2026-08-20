const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#111";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#00bfff";
ctx.beginPath();
ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    40,
    0,
    Math.PI * 2
);
ctx.fill();

ctx.fillStyle = "white";
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText(
    "ZOMBIE SURVIVAL",
    canvas.width / 2,
    canvas.height / 2 + 100
);

console.log("Zombie Survival JS berhasil dijalankan!");
