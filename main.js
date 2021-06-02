var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
block_img_width = 30;
block_img_height = 30;
var player_object = "";
var img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        img_object = Img;
        img_object.scaleToWidth(block_img_width);
        img_object.scaleToHeight(block_img_height);
        img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(img_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("pressed shift key and p");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("pressed shift key and m");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keyPressed == '37') {
        left();
        console.log("pressed left key");
    }

    if (keyPressed == '38') {
        up();
        console.log("pressed up key");
    }

    if (keyPressed == '39') {
        right();
        console.log("pressed right key");
    }

    if (keyPressed == '40') {
        down();
        console.log("pressed down key");
    }

    if (keyPressed == '87') {
        new_img("wall.jpg");
        console.log("pressed w");
    }

    if (keyPressed == '71') {
        new_img("ground.png");
        console.log("pressed g");
    }

    if (keyPressed == '76') {
        new_img("light_green.png");
        console.log("pressed l");
    }

    if (keyPressed == '84') {
        new_img("trunk.jpg");
        console.log("pressed t");
    }

    if (keyPressed == '82') {
        new_img("roof.jpg");
        console.log("pressed r");
    }

    if (keyPressed == '89') {
        new_img("yellow_wall.png");
        console.log("pressed y");
    }

    if (keyPressed == '68') {
        new_img("dark_green.png");
        console.log("pressed d");
    }

    if (keyPressed == '85') {
        new_img("unique.png");
        console.log("pressed u");
    }

    if (keyPressed == '67') {
        new_img("cloud.jpg");
        console.log("pressed c");
    }
}

function up() {
    if (player_y > 0) {
        player_y = player_y - block_img_height;
        console.log("when up key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <550) {
        player_y = player_y + block_img_height;
        console.log("when down key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_img_width;
        console.log("when left key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x < 850) {
        player_x = player_x + block_img_width;
        console.log("when right key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}