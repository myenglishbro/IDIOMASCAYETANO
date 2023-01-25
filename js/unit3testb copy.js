// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const activity = document.getElementById("activity");

const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const choiceF = document.getElementById("F");
const choiceG = document.getElementById("G");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        activity : "Choose the correct words to complete the definitions.",
        question : "1.A database is a large amount of information that is......a computer",
        choiceA : "stored on ",
        choiceB : "downloaded from ",
        choiceC : "deleted from  ",
        choiceD : " ---",
        choiceE : "--- ",
        choiceF : " ---",
        choiceG : " ---",
        correct : "A"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "2.If you compile information, you........",
        choiceA : "delete it ",
        choiceB : "gather it together ",
        choiceC : "share it with others",
        choiceD : " ---",
        choiceE : "--- ",
        choiceF : " ---",
        choiceG : " ---",
        correct : "B"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "3.If someone invades your privacy, they become involved in ",
        choiceA : "relationships with friends ",
        choiceB : "areas of your life ",
        choiceC : "going to places ",
        choiceD : " ---",
        choiceE : "--- ",
        choiceF : " ---",
        choiceG : " ---",
        correct : "B"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "4.The phrase, the “information age” refers to the fact that.....now have so much information that can be sent around the world.  ",
        choiceA : "people ",
        choiceB : "computers ",
        choiceC : "books ",
        choiceD : " ---",
        choiceE : " ---",
        choiceF : " ---",
        choiceG : "--- ",
        correct : "B"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "5.A scam is ....way of making money. ",
        choiceA : "a clever  ",
        choiceB : "a fast ",
        choiceC : "an illegal  ",
        choiceD : "--- ",
        choiceE : "--- ",
        choiceF : " ---",
        choiceG : " ---",
        correct : "C"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "6.Someone who monitors you....you and keeps information about you. ",
        choiceA : "works for  ",
        choiceB : "watches ",
        choiceC : "teaches",
        choiceD : "--- ",
        choiceE : " ---",
        choiceF : " ---",
        choiceG : " ---",
        correct : "B"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "7.If an action leaves you open to fraud, it makes it .....that you will be cheated.",
        choiceA : "sure ",
        choiceB : "possible ",
        choiceC : "certain",
        choiceD : " ---",
        choiceE : "--- ",
        choiceF : " ---",
        choiceG : "--- ",
        correct : "B"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "8.People may try to blackmail you if they find information you.....  ",
        choiceA : "have forgotten ",
        choiceB : "don’t want others to know",
        choiceC : "need",
        choiceD : "--- ",
        choiceE : " ---",
        choiceF : "---",
        choiceG : "--- ",
        correct : "B"
    },{
        activity : "Choose the correct words to complete the definitions.",
        question : "9.If someone hacks into a computer system, they get into it  ",
        choiceA : "without permission ",
        choiceB : "in order to repair it  ",
        choiceC : "for fun ",
        choiceD : " ---",
        choiceE : "--- ",
        choiceF : " ---",
        choiceG : " ---",
        correct : "A"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "10.Marie didn’t get her degree and.....working in a café",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "C"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "11.Samantha......a terrible time when someone stole her bank details.",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "A"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "12.I got a letter accusing me of fraud, but luckily the matter was.......quickly. ",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "B"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "13.My children......large bills downloading expensive games.",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "D"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "14.I’m supposed to be going camping, but I’m trying to......it.",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "E"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "15.Campaigners have ...... the government to tighten privacy laws.",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "F"
    },{
        activity : "Complete the sentences with phrasal verbs formed from the verbs in the box.",
        question : "16.Do you know where I can ......a second-hand laptop?",
        choiceA : "went through",
        choiceB : "cleared up",
        choiceC : "ended up ",
        choiceD : "ran up",
        choiceE : "get out of",
        choiceF : "called on ",
        choiceG : "get hold of",
        correct : "G"
    } ,{
        activity : "Choose the correct option to complete the sentences.",
        question : "17.If I can get out / up of attending the meeting, I certainly will.",
        choiceA : "out",
        choiceB : "of",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "A"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "18.I’ve already had to change all my passwords once and I really don’t want to go under / through that again!",
        choiceA : "under",
        choiceB : "through",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "B"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "19.It literally took years to clear up / through the matter after Richard’s identity was stolen.",
        choiceA : "up ",
        choiceB : "through",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "A"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "20.A campaign has been launched calling on / in credit card companies to exercise restraint when giving credit to young people.",
        choiceA : "on",
        choiceB : "in",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "A"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "21.I ended up / out changing my bank account and all my online passwords.",
        choiceA : "up",
        choiceB : "out",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "A"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "22.I really need to get hold of / on some better software to improve the image quality.",
        choiceA : "hold of",
        choiceB : "hold on",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "A"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "23.Typically, criminals then apply for loans in their victim’s name and run through / up huge debts",
        choiceA : "through",
        choiceB : "up",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "B"
    },{
        activity : "Choose the correct option to complete the sentences.",
        question : "24.Inevitably, most students take out / up a loan to pay for college tuition.",
        choiceA : "out",
        choiceB : "up",
        choiceC : "---",
        choiceD : "---",
        choiceE : "---",
        choiceF : "---",
        choiceG : "---",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime =60; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    activity.innerHTML = "<p>"+ q.activity +"</p>";
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
    choiceF.innerHTML = q.choiceF;
    choiceG.innerHTML = q.choiceG;
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
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
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
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "../assets/images/5.png" :
              (scorePerCent >= 60) ? "../assets/images/4.png" :
              (scorePerCent >= 40) ? "../assets/images/3.png" :
              (scorePerCent >= 20) ? "../assets/images/2.png" :
              "../assets/images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















