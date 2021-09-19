//dom elements
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const sep = document.getElementById('sep');
let rotation = 0;
const mool2 = document.getElementById('moola2');
const sub = document.getElementById('moolaForm');

function hideShow(event){
    action(mool2);
}
//function
function flip(event){
    console.log('masuk');
    if (event.target.id == 'leftBtn'){
        console.log('MASUK');
        rotation = rotation-15;
    }
    else{
        console.log('MASUK2');
        rotation = rotation+15;
    }

    const moola = document.getElementById('moola');
    moola.style.transform = 'rotate('+rotation+'deg)';
}

function action(e){
    if(e.style.visibility === 'hidden'){
        e.style.visibility = 'visible';

    }else{
        e.style.visibility = 'hidden';
    }
}

function letsSub(event){
    event.preventDefault();
    const task = sub.greet.value;
    //get image
    let img = document.createElement('img');
    img.className='moola3'
    img.src='./assets/output.png'

    //create li and put img+writing
    let li = document.createElement('li');
    li.append(img);
    li.append(task);

    //display to dom
    document.querySelector('.tasks').append(li);

    //delete input
    document.getElementById('hapus').value='';
}

//event handles
sep.onmouseenter = hideShow;
sep.onmouseleave = hideShow;
leftBtn.onclick = flip;
rightBtn.onclick = flip;
sub.onsubmit = letsSub;
