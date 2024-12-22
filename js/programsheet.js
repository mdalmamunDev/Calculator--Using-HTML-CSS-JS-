let display = document.getElementById('display');
let displayUp = display.children[0];
let displayDown = display.children[1];

let disString = "";
let buttons = document.querySelectorAll(".button"); // select all buttons

let buttonsArray = Array.from(buttons); //convert array to obj
buttonsArray.forEach(addEvLisnr); // add eventListener on all .button

function addEvLisnr(btn){
  btn.addEventListener("click", calculator);
}

function calculator(e) {
  let currElement = e.currentTarget;
  let currText = currElement.textContent;

  //functionalites
  if(currText == "C") {     //clear screen
    displayUp.innerHTML = "";
    displayDown.innerHTML = "";
    disString = "";
  }else if(currText == "="){  //show result
    //error check
    try{
      eval(disString);
    } catch(err) {
      var errCheck = err;
    }

    if(errCheck) {
      displayDown.innerHTML = "Eror";
    } else {
      result = eval(disString); // eval() calculat string if posible "2+3" = 5
      displayUp.innerHTML = `<h2 class="pt-2"> ${result} </h2>`;
      displayDown.innerHTML = "";
      disString = result;
    }
    
  } else if(currText == "X") {     //back one step
    disString = disString.substring(0, disString.length-1);
    displayUp.innerHTML = disString;
    let result;
    
    if(!disString) {
      disString = "0";
    }
    logicCal(disString, result, displayDown);    
  } else{         //click on numbers
    disString += currElement.textContent;
    displayUp.innerHTML = disString;
    let result;

    logicCal(disString, result, displayDown);
  }
  // console.log(currElement);
}


function logicCal(disString, result, displayDown) {
  try{
    eval(disString);
  } catch(err) {
    var errCheck = err;
  }
  if(!errCheck) {
    result = eval(disString);
    displayDown.innerHTML = result;
  }
}
