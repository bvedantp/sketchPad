let currentSize= 16;
let defaultColor= 'rgb(128, 0, 0)';

const picker= document.getElementById("picker");
const normalBtn= document.getElementById("normalBtn");
const rainbow= document.getElementById("rainbow");
const clearBtn= document.getElementById("clearBtn");
const erase= document.getElementById("erase");
const sizeValue= document.getElementById("sizeValue");
const range= document.getElementById("range");
const grid= document.getElementById("grid");

range.onmousemove = (e) => {
    updateSizeText(e.target.value);
}
range.onchange = (e) => {
    changeGridSize(e.target.value);
}

clearBtn.addEventListener('click', clear); //don't use clear() bcoz then u r calling the function, not binding it

erase.onclick = eraser;

picker.onchange = (e) => currentColor(e.target.value);

normalBtn.onclick = colorMode;

rainbow.onclick = rainbowMode;

function rainbowMode() {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor= `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    })
}

function colorMode() {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor= `${defaultColor}`;
    })
}

function currentColor(value) {
    defaultColor = value;
}

function eraser() {
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor= "white";
    })
}

function changeGridSize(value) {
    deleteGrid();
    createGrid(value);

}

function createGrid(value) {
    grid.style.cssText= `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr);`;
    for(let i=0; i< value*value; i++) {
        let div= document.createElement("div");
        grid.appendChild(div);
        div.addEventListener('mouseover', (e) => {   //inside for loop bcoz we hv to add this event to every div
            e.target.style.cssText= 'background-color: black'; 
        })
    }

}

function deleteGrid() {
    grid.innerHTML=""; //genius!
}

function updateSizeText(value) {
    sizeValue.innerText= `${value} x ${value}`;
}

function clear() {
    deleteGrid();
    let value= sizeValue.innerText;
    grid.style.cssText= `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr);`;
    for(let i=0; i< value*value; i++) {
        let div= document.createElement("div");
        grid.appendChild(div);
        div.style.cssText= 'background-color: white';
    }
}


window.onload = () => {
    createGrid(currentSize);
    
}