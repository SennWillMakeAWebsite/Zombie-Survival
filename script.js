document.body.innerHTML = "<h1 style='color:white'>TES BERHASIL</h1>";    if (keys["d"]) player.x += player.speed;

    // Batas layar
    player.x = Math.max(player.radius, Math.min(canvas.width - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(canvas.height - player.radius, player.y));
}

// Draw
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#2b2b2b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Player
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();

    // Teks
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Zombie Survival", 20, 35);
}

// Game Loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();
}

// Game Loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();}

// Draw
function draw() {
    ctx.clearRect(0, 0, canvas.width,
    canvas.height);

        ctx.beginPath();
        ctx.arc(player .x, player .y, 
            player .radius, 0, Math.PI * 2);
            ctx.fillStyle = player.color;
            ctx.fill();
}

// Loop game
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
