color = "orange";
width_of_line = 1;
var mouseEvent = "empty";
var last_postion_of_x , last_postion_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

console.log("Last Postion Of x And y Coordinates =");
console.log("x =" + last_postion_of_x + "y = " + last_postion_of_y);
ctx.moveTo(last_postion_of_x, last_postion_of_y);

console.log("Current Postion Of x And y Coordinates = ");
console.log("x =" + current_postion_of_mouse_x + "y = " + current_postion_of_mouse_y);
ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
ctx.stroke(); 
    }
    last_postion_of_x = current_postion_of_mouse_x;
    last_postion_of_y = current_postion_of_mouse_y;
}