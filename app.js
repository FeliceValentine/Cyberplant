let bar = document.querySelector(".barBckr");
let plant = document.querySelector(".plant");
let deadPlant = document.querySelector(".deadPlant");
let sun = document.querySelector(".sun");
let water = document.querySelector(".water");
let fert = document.querySelector(".fert");
let header = document.querySelector(".header");
let header1  = document.querySelector(".header1");
let strtB = document.querySelector(".startAg");
let points = 50;
let amount = 10;



console.log("I am amount " + amount)

function pointsAdd() {
    if(points <=0) {
        bar.style.width = "0%";
        gameOver()

    }
    else if (points == 10 ){
        bar.style.width = "10%";
    }
    else if (points == 20){
        bar.style.width = "20%";
    }
    else if (points == 30){
        bar.style.width = "30%";
    }
    else if (points == 40){
        bar.style.width = "40%";
    }
    else if (points == 50){
        bar.style.width = "50%";
    }
    else if (points == 60){
        bar.style.width = "60%";
    }
    else if (points == 70){
        bar.style.width = "70%";
    }
    else if (points == 80){
        bar.style.width = "80%";
    }
    else if (points == 90){
        bar.style.width = "90%";
    }
    else if (points == 100){
        bar.style.width = "100%"
    }
     else if (points > 100){
        bar.style.width = "100%"
        bar.style.background = "#d4a373";
        gameOver()
    }

 }



let mytime;

function score() {
    points = points - amount ;
    console.log( "I am points" +points);
    pointsAdd()
    }

function timing() {
 mytime = setInterval(score,800);
}

timing()


    water.addEventListener("click", (evt) => {
        points = points + 20;
        console.log(points);
        pointsAdd()
  
        
        
     
    })
    sun.addEventListener("click", (evt) => {
        points = points + 10;
        console.log(points);
        pointsAdd()
      
       
        
    })
    fert.addEventListener("click", (evt) => {
        points = points + 30;
        console.log(points);
        pointsAdd()
        
    })


    strtB.addEventListener("click", (evt) => {
        location.reload(); 
        
    })

function gameOver() {

        deadPlant.style.display = "block";
        plant.style.display = "none";
        header.innerText = "You killed your plant !";
        header1.innerText  = "Get a pet rock "
        strtB.style.display = "block";
        clearInterval(mytime);
    }
