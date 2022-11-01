
const allDivs = document.querySelectorAll(".box");
const startBtn = document.querySelector("#start");
const statusBtn = document.querySelector("#status");
const randomRgbColorBtn = document.querySelector("#randomRgbColor");
var colorsArray = new Array();
var gameController = false;


function resetGame(){
    allDivs.forEach(divItem =>{
        divItem.style.backgroundColor = "steelblue";
        divItem.classList.remove("hiden");
        divItem.style.opacity = "1"

    });
    randomRgbColorBtn.textContent = "...";
    statusBtn.textContent = "";
    gameController = false;
}


function randNum(start,end){
    return Math.round(Math.random() * (end - start) + start);
}

function rgbColors(){
    var r = randNum(0,255);
    var g = randNum(0,255);
    var b = randNum(0,255);
    return `rgb(${r},${g},${b})`;
}



function generateRandomColorsList(colorCount){
    var colorList = [];
    while(colorList < colorCount){
        colorList.push(rgbColors());
    }
    return colorList;
}


startBtn.addEventListener("click",function(){
    resetGame();
    gameController = true;
    colorsArray = generateRandomColorsList(allDivs.length);
    allDivs.forEach(item =>{
        item.style.background = rgbColors();
    });
    for(var i = 0; i<colorsArray.length ; i++){
        allDivs[i].style.background = colorsArray[i];
    }
    randomRgbColorBtn.textContent = colorsArray[randNum(0,colorsArray.length-1)];
})

allDivs.forEach(divItem =>{
    divItem.addEventListener("click",function(){
        if(!this.classList.contains("hiden") && gameController){
        var btnBackColor = this.style.backgroundColor.replaceAll(" ","");
        if(btnBackColor == randomRgbColorBtn.textContent){
            statusBtn.textContent = "success"
            gameController = false;
        }else {
            statusBtn.textContent = "failed";
            this.style.opacity = "0"
            this.classList.add("hiden");

        }
        }
    })
})
