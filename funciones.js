const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;// Para determinar la medidas del canvas. hay que cambiar el default de CANVAS_Width
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); // Es como una etiquieta de img.
playerImage.src = 'shadow_dog';

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Limpia el canvas en las coordenadas pasadas.
    ctx.fillRect(50, 50, 100, 100); // Sirve para dibujar rectangulos. Se pasan coordenadas
    requestAnimationFrame(animate);
}

animate();
