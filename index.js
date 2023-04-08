let number = Math.floor(Math.random() * 21);
const guessing = document.body.querySelector('.guessing');
const scoreValue = document.body.querySelector('#scoreValue');
const highScoreValue = document.body.querySelector('#highScoreValue');
const inputBox = document.body.querySelector('#inputBox');
const question_mark = document.body.querySelector('.question_mark');
const checkBtn = document.querySelector('.check_btn');
const againBtn = document.querySelector('#again_btn');
againBtn.style.pointerEvents = "none"
let score = Number(scoreValue.textContent);
let highScoreArray = [];
let highScore;

console.log(number)


function scoreCalculation(){
    score--;
    if(score <= 0) {
        guessing.textContent = "😭 You lost the game";
        scoreValue.textContent = 0;
        score = 0;
        document.body.style.pointerEvents = "none";
        return;
    }
    scoreValue.textContent = score;
}


function gameWon() {
    document.body.style.backgroundColor = "lightgreen"; 
    document.body.style.pointerEvents = "none";
    againBtn.style.cursor = "pointer"
    againBtn.style.pointerEvents = "auto"
    inputBox.style.backgroundColor = 'lightgreen'
    guessing.textContent = "Correct Number!"
    highScoreArray.push(score);
    highScoreValue.textContent = Math.max(...   highScoreArray); 
    question_mark.textContent = inputBox.value;
    highScore = score;
    return;
}


function Low() {
    scoreCalculation();
    score!=0 ? guessing.textContent = '📉 Too Low': null;
}

function High() {
    scoreCalculation();
    score!=0 ? guessing.textContent = '📈 Too High': null;
}

checkBtn.addEventListener('click', ev =>{
    const input = Number(inputBox.value);
    if(input === 0)  {
        guessing.textContent = "❗️ No Number"
        return;
    }
    input === number ? gameWon() : (input < number ? Low() : High()) ;
})

againBtn.addEventListener('click', ev => setNormal())

function setNormal() {
    number = Math.floor(Math.random() * 21)
    console.log(number)
    document.body.style.backgroundColor = "black";
    document.body.style.pointerEvents = "auto";
    inputBox.style.backgroundColor = 'black'
    inputBox.value = ''
    guessing.textContent = "Start guessing ..."
    score = 20;
    highScoreValue.textContent = Math.max(...highScoreArray); 
    scoreValue.textContent = score; 
    question_mark.textContent = '\x3F';
}
 