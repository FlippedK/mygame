document.onkeydown = checkButton;

function checkButton(event) {

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;
    
    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;
    
    if (event.keyCode === 38) {
        // key: "ArrowUp" 
        if (map.y < cube.y) {
            if ((cube.y - map.y) < cube.step) {
                cube.y -= cube.y - map.y;
            }

            else {
                cube.y -= cube.step;
            }
        }
    }
    
    if (event.keyCode === 40) {
       // key: "ArrowDown" 
       if (cubeBottom < mapBottom) {
            if((mapBottom - cubeBottom) < cube.step) {
                cube.y += mapBottom - cubeBottom;
            }

            else {
                cube.y += cube.step;
            }
        }   
    }

    if (event.keyCode === 37) {
       // key: "ArrowLeft"
       if (map.x < cube.x) {
            if ((cube.x - map.x ) < cube.step) {
                cube.x -= cube.x - map.x;
            }

            else {
                cube.x -= cube.step;
            }
        }
    }

    if (event.keyCode === 39) {
        // key: "ArrowRight"
        if ((cube.x + cube.width) < mapRight) {
            if((mapRight - cubeRight) < cube.step) {
                cube.x += mapRight - cubeRight;
            }

            else {
                cube.x += cube.step;
            }
        }
    }

    renderCube(cube);
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease' + cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}