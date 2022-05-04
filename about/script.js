// JavaScript source code
function newStyle() {
    let newColor = '';
    let newFont = '';
    let x = Math.floor(Math.random() * 7);
    switch (x) {
        case 0:
            newColor = 'black';
            newFont = 'Times New Roman';
            break;
        case 1:
            newColor = 'black';
            newFont = 'Florence, cursive';
            break;
        case 2:
            newColor = 'black';
            newFont = 'Verdana';
            break;
        case 3:
            newColor = 'black';
            newFont = 'Courier New';
            break
        case 4:
            newColor = 'black';
            newFont = 'Georgia';
            break;
        case 5:
            newColor = 'black';
            newFont = 'Palatino';
            break;
        case 6:
            newColor = 'black';
            newFont = 'Impact';
            break;
    }

    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont;
}


let left_ball = document.getElementById('float-left-circle');

function left_up() {
    left_ball.style.bottom = '75%';
}

function left_down() {
    left_ball.style.bottom = '20%';
}

document.addEventListener('keydown', left_up);
document.addEventListener('keyup', left_down);


let right_ball = document.getElementById('float-right-circle');

function right_up() {
    right_ball.style.bottom = '75%';
}

function right_down() {
    right_ball.style.bottom = '20%';
}

document.addEventListener('keydown', right_down);
document.addEventListener('keyup', right_up);