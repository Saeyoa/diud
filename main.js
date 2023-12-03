var last_position_of_x, last_position_of_y;
 canvas = document.getElementById('myCanvas'); ctx = canvas.getContext("2d"); color = "black"; width_of_line = 1;
canvas.addEvent

Listener("mousedown",my_mousedown);

  function my_mousedown(e)
  {
    color = document.getElementById("color").value;
    width_of_line = documentElementById("width_of_line").value;
    mouseEvent="mouseDown";
  }

  canvas.addEventListenter("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseleave);
function my_mouseup(e)
{
    mouseEvent= "mouseUP";
}

canvas.EventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
   
    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        console.log("Last position of x and y coorinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y );
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coorinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y );
        ctx.moveTo(current_position_of_mouse_x, current_position_of_mouse_y);      
        ctx.stroke();
    }
    last_position_of_x = currect_position_of_mouse_x;
    last_position_of_y = currect_position_of_mouse_y;
}