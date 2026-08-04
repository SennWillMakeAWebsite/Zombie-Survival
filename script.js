const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 5,
    color: "#00BFFF"
};

// Keyboard
const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Update
function update() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;
}

// Draw
function draw() {
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
