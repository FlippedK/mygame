document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    id: "main"
}

function checkButton(e) {
    
   let k = e ||  window.event;

   console.log(k)

   if (k.keyCode === 38) {
     // key: "ArrowUp" 
    cube.y -= 50;
    render(cube.id, cube.x, cube.y);
    console.log("ArrowUp");
    }

   else if (k.keyCode === 40) {
       // key: "ArrowDown" 
       cube.y += 50;
       render(cube.id, cube.x, cube.y);
       console.log("ArrowDown");
    }

   else if (k.keyCode === 37) {
       // key: "ArrowLeft"
       cube.x -= 50;
       render(cube.id, cube.x, cube.y);
       console.log("ArrowLeft");
    }

   else if (k.keyCode === 39) {
        // key: "ArrowRight"
        cube.x += 50;
        render(cube.id, cube.x, cube.y);
        console.log("ArrowRight");
    }
}

function render(id, x, y) {
    document.getElementById("main").style.top = y + 'px';
    document.getElementById("main").style.left = x + 'px';
}

render(cube.id, cube.x, cube.y);