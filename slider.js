let slides = document.querySelectorAll('.pic');
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove;
}

let step = 0;
let offset = 0;

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('pic');
    img.style.left = offset * 1020 + 'px';
    document.querySelector('#slide').appendChild(img);

    if (step + 1 == slider.length) {
        step = 0;
    } else step++;
    offset = 1;
}

function left() {
    let slides2 = document.querySelectorAll('.pic');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset * 1020 - 1020 + 'px';
        offset2++;

    }
}

draw();