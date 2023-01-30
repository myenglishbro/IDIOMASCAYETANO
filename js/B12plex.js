// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const samples = document.getElementById("samples");
const label=document.getElementById("label")
const title=document.getElementById("title")
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");


const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        title:"QUESTIONS AND PROMPTS",
        question : "How many people are there in your family?",
        samples:"There are four people in my family: My parents, mybrother, and I.",
        label:"SAMPLE EXPECTED RESPONSES FROM STUDENTS",
        imgSrc : "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png",
        choiceA : "Appropriate Answer",
        choiceB : "Inapropriate Answer",
        correct : "A"
    },
    {
        title:"QUESTIONS AND PROMPTS",
        question : "Do you have any friends?-Tell me about them",
        samples:"I have one brother.",
        label:"SAMPLE EXPECTED RESPONSES FROM STUDENTS",
        imgSrc : "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png",
        choiceA : "Appropriate Answer",
        choiceB : "Inapropriate Answer",
        correct : "A"
    },
    {
        title:"QUESTIONS AND PROMPTS",
        question : "How old is your friend?",
        samples:"My friend is 11 years old.",
        label:"SAMPLE EXPECTED RESPONSES FROM STUDENTS",
        imgSrc : "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png",
        choiceA : "Appropriate Answer",
        choiceB : "Inapropriate Answer",
        correct : "A"
    }
    ,
    {
        title:"QUESTIONS AND PROMPTS",
        question : "What’s your friend doing right now?*",
        samples:"My friend is working right now.",
        label:"SAMPLE EXPECTED RESPONSES FROM STUDENTS",
        imgSrc : "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png",
        choiceA : "Appropriate Answer",
        choiceB : "Inapropriate Answer",
        correct : "A"
    }



];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 60; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    title.innerHTML="<p>"+ q.title +"</p>";
    question.innerHTML = "<p>"+ q.question +"</p>";

    label.innerHTML="<p>"+ q.label +"</p>";
    samples.innerHTML = "<p>"+ q.samples +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
  
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        Swal.fire({
            icon:'success',
            text: 'Correct',
           
          })
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        Swal.fire({
            icon:'error',
            title: 'Incorrect',
  
          })
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    let scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "../assets/img/NEXT.png" :
              (scorePerCent >= 60) ? "../assets/img/NEXT.png" :
              (scorePerCent >= 40) ? "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png" :
              (scorePerCent >= 20) ? "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png" :
              "../assets/img/BANNERS_PROGRAMA_ADULTOS_BASIC_1.png";
     scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p> Porcentaje del Estudiante :"+ scorePerCent +"%</p>";
    
    // Agrega el enlace "a" dentro de la condicional
if (scorePerCent >= 60) {
    let imprimir = document.createElement("a");
    imprimir.classList.add('print');
    imprimir.innerText = 'Go to Basic 2';
    imprimir.setAttribute("href", "https://www.youtube.com/watch?v=2C17yLNe-wo");
    scoreDiv.append(imprimir);
}
else{
    let imprimir = document.createElement("a");
    imprimir.classList.add('print');
    imprimir.innerText = 'Back to Menu';
    imprimir.setAttribute("href", "../pages/B1plex.html");
    scoreDiv.append(imprimir);
}

    

    

   
}



















