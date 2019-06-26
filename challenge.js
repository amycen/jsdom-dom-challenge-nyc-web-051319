const counter = document.querySelector('#counter');
let seconds = 0;
let likes = {};
let pauseGame = false; 
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const resume = document.querySelector('#resume')
const likesList = document.querySelector('.likes')
const commentSubmit = document.querySelector('#submit')
const commentList = document.querySelector('#list')
const inputBox = document.querySelector('#input')

minus.addEventListener('click', function(){secondTimer(-1);});
plus.addEventListener('click', function(){secondTimer(1);});
heart.addEventListener('click', function(){likeANumber(seconds)});
pause.addEventListener('click', function(){
    pauseGame = true;
    pause.style = "display:none"
    resume.style = ""
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    commentSubmit.disabled = true;
})
resume.addEventListener('click', function(){
    pauseGame = false;
    resume.style = "display:none"
    pause.style = ""
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    commentSubmit.disabled = false;
})
commentSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    commentList.innerHTML += `<p>${inputBox.value}</p>`
    inputBox.value = '';
})

function likeANumber(number) {
    likes[number] = (likes[number] || 0) + 1;
    if (likes[number] == 1){
        const li = document.createElement('li')
        li.id = number
        li.innerText = `Number ${number} liked ${likes[number]} times.`
        likesList.appendChild(li)
    }
    else {
        const foundLi = document.getElementById(number)
        foundLi.innerText = `Number ${number} liked ${likes[number]} times.` 
    }
}

function secondTimer(step) {
    if (!pauseGame){
    seconds += step;
    counter.innerText = seconds;
    }
}

setInterval(function(){secondTimer(1)}, 1000);



