// UI CONTROLLER
const uiController = (function () {
  let submittedNum = [];
  let seekenNum = [];
  let score = [];
  let higgestScores = [0];
  let count = [0];
  const selectors = {
    inputGuess: "#inputGuess",
    score: "#score",
    highScore: "#highScore",
    alertMessage: "#alertMessage",
    checkButton: "#checkButton",
    scoreScreen: "#scoreScreen",
    tryAgain:"#tryAgain",
    situation:".situation",
    container: ".container"
  };
  return {
    getSelector: function () {
      return selectors;
    },
    submittedNum: submittedNum,
    seekenNum: seekenNum,
    count,
    higgestScores,
    score
  };
})();

// Animation ui
const animationUi = (function(){

})()




// ACTION CONTROLLER

const actionController = (function () {
  const selector = uiController.getSelector();
  return {
    randomNum: function () {
      let num = Math.floor(Math.random() * (21 - 1) + 1);
      return num;
    },
    storeRandomNum: function (num) {
      uiController.seekenNum.push(num);
    },
    storeGuess: function () {
      let inputValue = document.querySelector(
        selector.inputGuess
      ).value;
      inputValue = parseInt(inputValue);

      if (inputValue !== '') {
        uiController.submittedNum.push(inputValue);
      }
    },
    clearInput: function () {
      document.querySelector(selector.inputGuess).value = "";
    },
    clearStored:function(stored){
      stored.splice(0, stored.length);
    },
    checkGuess: function () {
    const seeken = uiController.seekenNum;
      const guessed = uiController.submittedNum;
      const difference = seeken - guessed;
      return difference;
    },
    countStep: function(){
      let count = uiController.count[0]+1;
      uiController.count[0] = count;
      return count;
    },
    feetback:function(dif,storedNum,countStep){
      let msj = '';
      if(dif == 0){
        msj = "Correct Number !!!"
        document.querySelector(selector.situation).textContent = storedNum;
        const score = this.calculateScore(countStep);
        this.showScore(score);
        const higgestScores = this.storeHiggestScore(score);
        this.showHighScore(higgestScores);
        this.turnOffColor();
      }
      else if(dif>0){
        msj = "Bigger number :("
      }
      else{
        msj = "Smaller number :("
      }
      this.showAlert(msj);
      this.clearStored(storedNum)
      return msj;
    },
    calculateScore: function(count){
      const score = 100 - (count-1)*5;
      return score;
    },
    showScore: function(score){
      document.querySelector(selector.score).textContent = score;
    },
    showAlert: function(msj){
      document.querySelector(selector.alertMessage).textContent = msj;
    },
    storeHiggestScore: function(score){
      let highScore =  uiController.higgestScores[0]
      if(highScore < score){
        uiController.higgestScores[0] = score;
      }
      return uiController.higgestScores[0];
    },
    showHighScore: function(score){
      document.querySelector(selector.highScore).textContent = score;
    },
    startAgain: function(){
      let newRandomNum = this.randomNum();
      uiController.seekenNum[0] = newRandomNum;
      uiController.count[0] = 0;
      document.querySelector(selector.alertMessage).textContent = 'Let\'s start';
      document.querySelector(selector.score).textContent = '100';
      document.querySelector(selector.situation).textContent = '?';
      this.turnOnColor();
    },
    turnOffColor: function(){
      document.querySelector(selector.container).style.backgroundColor ='#56AA3F';
    },
    turnOnColor: function(){
      document.querySelector(selector.container).style.backgroundColor ='#201F20';
    }

  };
})();

// APP CONTROLLER

const App = (function (uiCtrl, actionCtrl) {
  // selector dizi içe aktarıldı
  const selector = uiCtrl.getSelector();
  // Event handling
  const LoadEventListeners = function () {
    document.querySelector(selector.checkButton).addEventListener("click",checkButton);
    document.querySelector(selector.tryAgain).addEventListener('click', function(){
      actionCtrl.startAgain();
    })    
  }

  const checkButton = function(){
    const inputGuess = document.querySelector(selector.inputGuess).value;
    if(inputGuess !== ''){
      actionCtrl.storeGuess(inputGuess);
      const storedNum = uiCtrl.submittedNum;
      actionCtrl.clearInput();
      const difference = actionCtrl.checkGuess();
      const count = actionCtrl.countStep();
      actionCtrl.feetback(difference,storedNum,count);
    }
  }
  return {
    init: function () {
      // App started message
      console.log("App started...");
      // generete a random number
      const seekenNum = actionCtrl.randomNum();
      // store random number
      const storedRandomNum = actionCtrl.storeRandomNum(seekenNum);
      LoadEventListeners();
    },
  };
})(uiController, actionController);

App.init();