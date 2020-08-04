// Your code goes here
// 1
let links = document.querySelector('.nav')

links.addEventListener('mouseover', event => {
    event.target.style.color = 'orange'

    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);





// 2
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(1, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.logo-heading');
el.addEventListener('wheel', zoom);





// 3
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });


  


// 4
  let noContext = document.querySelector('img');

  noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
  });





// 5 
let scrolling = document.querySelector('body')

window.addEventListener('scroll', event => {
    scrolling.style.backgroundColor = 'purple'

    setTimeout(function () {
        scrolling.style.backgroundColor = 'white';
    }, 5000);
}, false);




// 6
let parags = document.querySelectorAll('.content-section p')
let para1 = parags[0]
let para2 = parags[1]

para1.addEventListener('dblclick', event => {
    para1.style.backgroundColor = 'teal'

    setTimeout(function () {
        para1.style.backgroundColor = 'white';
    }, 5000);
}, false);


para2.addEventListener('dblclick', event => {
    para2.style.color = 'gold'

    setTimeout(function () {
        para2.style.color = 'black';
    }, 5000);
}, false);



// 7
const subHeads = document.querySelectorAll('h2')

let subHead1 = subHeads[0]
let subHead2 = subHeads[1]
let subHead3 = subHeads[2]
let subHead4 = subHeads[3]


document.addEventListener('keydown', keyPressed)
function keyPressed(event){
    subHead1.style.color = 'aqua'
    subHead2.style.color = 'pink'
    subHead3.style.color = 'gold'
    subHead4.style.color = 'orange'

}


// 8
const destHeads = document.querySelectorAll('.destination')

let destHead1 = destHeads[0]
let desthead2 = destHeads[1]
let destHead3 = destHeads[2]

document.addEventListener('mouseenter', event => {
    destHead1.style.border = '5px dotted orange';
    desthead2.style.border = '5px dotted teal'
    destHead3.style.border = '5px dotted pink'
})

    
// 9
document.addEventListener('mouseleave', event => {
    destHead1.style.border = 'none';
    desthead2.style.border = 'none'
    destHead3.style.border = 'none'
})


// 10
