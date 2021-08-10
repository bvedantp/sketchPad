const container= document.getElementsByClassName("container")[0]; //without 0 it is type error as it returns
//nodelist and is not a DOM element and doesn't have appendChild as attribute
for(let i=0; i<16; i++){
    let div= document.createElement("div");
    div.setAttribute('class','cell');
    div.setAttribute('id',`trail${[i]}`);
    div.textContent="⠀";
    container.appendChild(div);     
}
/*
let div= document.getElementsByClassName("cell");
let divs= Array.from(div)   ;
//divs.forEach(div => {
    window.addEventListener('mouseover', () => {
        div.classList.add("trail");
    })
//});    
    */


window.addEventListener('mouseover', (e) => {
    document.getElementById(e.target.id).classList.toggle('trail'); //extracted ID of e.target
})