const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// ====================
// CANVAS
// ====================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// ====================
// PLAYER
// ====================

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,

    radius: 20,
    speed: 5,

    color: "#00BFFF"
};


// ====================
// ZOMBIE
// ====================

const zombie = {
    x: 100,
    y: 100,

    radius: 25,
    speed: 1.5,

    color: "#4CAF50"
};


// ====================
// KEYBOARD
// ====================

const keys = {};

window.addEventListener("keydown", function (e) {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", function (e) {
    keys[e.key.toLowerCase()] = false;
});


// ====================
// UPDATE PLAYER
// ====================

function updatePlayer() {

    if (keys["w"]) {
        player.y -= player.speed;
    }

    if (keys["s"]) {
        player.y += player.speed;
    }

    if (keys["a"]) {
        player.x -= player.speed;
    }

    if (keys["d"]) {
        player.x += player.speed;
    }


    // Batas layar

    if (player.x < player.radius) {
        player.x = player.radius;
    }

    if (player.x > canvas.width - player.radius) {
        player.x = canvas.width - player.radius;
    }

    if (player.y < player.radius) {
        player.y = player.radius;
    }

    if (player.y > canvas.height - player.radius) {
        player.y = canvas.height - player.radius;
    }
}


// ====================
// UPDATE ZOMBIE
// ====================

function updateZombie() {

    const dx = player.x - zombie.x;
    const dy = player.y - zombie.y;

    const distance = Math.sqrt(
        dx * dx + dy * dy
    );

    if (distance > 1) {

        zombie.x +=
            (dx / distance) *
            zombie.speed;

        zombie.y +=
            (dy / distance) *
            zombie.speed;
    }
}


// ====================
// DRAW CIRCLE
// ====================

function drawCircle(x, y, radius, color) {

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = color;

    ctx.fill();
}


// ====================
// DRAW
// ====================

function draw() {

    // Background

    ctx.fillStyle = "#111";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Player

    drawCircle(
        player.x,
        player.y,
        player.radius,
        player.color
    );


    // Zombie

    drawCircle(
        zombie.x,
        zombie.y,
        zombie.radius,
        zombie.color
    );


    // Text

    ctx.fillStyle = "white";

    ctx.font = "20px Arial";

    ctx.textAlign = "left";

    ctx.fillText(
        "WASD untuk bergerak",
        20,
        30
    );
}


// ====================
// GAME LOOP
// ====================

function gameLoop() {

    updatePlayer();

    updateZombie();

    draw();

    requestAnimationFrame(gameLoop);
}


gameLoop();
