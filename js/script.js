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
        console.log(userAnswers)

    })
})