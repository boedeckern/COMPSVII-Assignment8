console.log("script.js connected!");

let buttons = document.querySelectorAll("#question-1 button")
let userAnswers={}
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        buttons.forEach(function(btn){
            btn.classList.remove("selected")
        })
        button.classList.add("selected")

        let buttonID=button.dataset.buttonid
        let answer=button.dataset.answer
        userAnswers[buttonID]=answer
        console.log(userAnswers)

    })
})