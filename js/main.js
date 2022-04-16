let avatar = [
    {
        img: "img/avatar1.jpg",
        name: "Tamara Perić",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "img/avatar2.jpg",
        name: "Nikola Radivojević",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "img/avatar3.jpg",
        name: "Marko Perić",
        text: "Neiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

let avatarImage = document.querySelector('.avatar-image');
let avatarName = document.querySelector('.avatar-name');
let avatarText = document.querySelector('.avatar-text');
let counter = document.querySelector('.counter');

// click
let rightArrow = document.getElementById('right');
let leftArrow = document.getElementById('left');

let i = 0;
avatarImage.src = avatar[i].img;
avatarName.textContent = avatar[i].name;
avatarText.textContent = avatar[i].text;
counter.textContent = i + 1;

// Left Arrow Click
rightArrow.addEventListener('click', function(){
    i++;
    if(i > 2){
        i = 0;
    }
    avatarImage.src = avatar[i].img;
    avatarName.textContent = avatar[i].name;
    avatarText.textContent = avatar[i].text;
    counter.textContent = i + 1;
})

// Left Arrow Click
leftArrow.addEventListener('click', function(){
    i--;
    if(i < 0){
        i = 2;
    }
    avatarImage.src = avatar[i].img;
    avatarName.textContent = avatar[i].name;
    avatarText.textContent = avatar[i].text;
    counter.textContent = i + 1;
})