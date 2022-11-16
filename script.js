const styleTag = document.head.appendChild(document.createElement('style'));
const randNum = (min, max) => Math.floor(Math.random() * (max-min+1)+min);

// Rolling Dice On Click
const dice = document.getElementById("dice");
dice.addEventListener("click", function(){
    styleTag.innerHTML = `.text{transform: rotateY(-${randNum(-360,360)}deg) rotateX(${randNum(-360,360)}deg);}`;
})