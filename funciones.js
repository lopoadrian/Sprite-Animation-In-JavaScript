const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;// Para determinar la medidas del canvas. hay que cambiar el default de CANVAS_Width
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); // Es como una etiquieta de img.
playerImage.src = './Assets/shadow_dog.png';
const spriteWidth = 575; // divide el tamaño de la imagen por la cantidad de columnas. 6876px Width / 12 columnas
const spriteHeight = 523; // Se divide el alto de la imagen por la cantidad de filas
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrame = 5;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Limpia el canvas en las coordenadas pasadas.
    // ctx.fillRect(100, 50, 100, 100); // Sirve para dibujar rectangulos. Se pasan coordenadas
    // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Dibuja una imagen con los parametros x , y ,w ,h
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); drawImage de 9 parametros. La S significa Source y la D destination. Con la S determinamos el area a cortar y la d determinamos el lugar a cortar.
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);

    if (gameFrame % staggerFrame == 0){
        if (frameX < 6 ) frameX++;
        else frameX = 0;
    }
    
    gameFrame++;


}

animate();
