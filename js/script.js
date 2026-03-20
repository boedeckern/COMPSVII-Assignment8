console.log("script.js connected!");
let userAnswers={}

let buttons1 = document.querySelectorAll("#question-1 button")
buttons1.forEach(function(button){
    button.addEventListener("click",function(){
        buttons1.forEach(function(btn){
            btn.classList.remove("selected")
        })
        button.classList.add("selected")

        let buttonID=button.dataset.buttonid
        let answer=button.dataset.answer
        userAnswers[buttonID]=answer
        console.log(userAnswers)

    })
})

let buttons2 = document.querySelectorAll("#question-2 button")
buttons2.forEach(function(button){
    button.addEventListener("click",function(){
        buttons2.forEach(function(btn){
            btn.classList.remove("selected")
        })
        button.classList.add("selected")

        let buttonID=button.dataset.buttonid
        let answer=button.dataset.answer
        userAnswers[buttonID]=answer
        console.log(userAnswers)

    })
})

let buttons3 = document.querySelectorAll("#question-3 button")
buttons3.forEach(function(button){
    button.addEventListener("click",function(){
        buttons3.forEach(function(btn){
            btn.classList.remove("selected")
        })
        button.classList.add("selected")

        let buttonID=button.dataset.buttonid
        let answer=button.dataset.answer
        userAnswers[buttonID]=answer
    })
})

function displayResult(){
    let result=0
    let message=""
    for(i=0;i<=Object.keys(userAnswers).length;i++){
        if(userAnswers[i]==="A"){
            result+=0
        }
        else if(userAnswers[i]==="B"){
            result+=1
        }
        else if(userAnswers[i]==="C"){
            result+=2
        }
        else if(userAnswers[i]==="D"){
            result+=3
        }
    }
    if(result<5){
        message="You are Red!"
    }
    else if(result>5){
        message="You are Green!"
    }
    else{
        message="You are neither Red nor Green!"
    }
    let output=document.getElementById("result-container")
    output.textContent=message
    output.style.display='block'
}

let resultButton=document.getElementById("show-result")
resultButton.addEventListener("click",function(){
    displayResult()
})
