//used ai to help debug the code
let vote = [0, 0, 0, 0]
let totalVotes = 0
let max = 0
let options = ["Cat","Dog","Snake","Hamster"]

let ask = prompt("What type of things do you want to investigate:")
document.getElementById("remind").textContent = "Choose all the "+ask+" you like:"


    let term = 0
    for(let i =0;i < options.length;i++){
        term = prompt("Pls input "+options.length+" options you want to investigate")
        term = term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
        options[i] = term
    }
    document.getElementById("op2").textContent = options[1]
    for(let i =0;i < option.length;i++){
        document.getElementById('op'+(i+1)).textContent = options[i]
    }

document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("remind").textContent = "Choose all the "+ask+" you like:"
    //used to help me figure out the checked option
    let checkboxes = [
    document.getElementById("op1"),
    document.getElementById("op2"),
    document.getElementById("op3"),
    document.getElementById("op4")
    ]
    for(let i = 0;i < checkboxes.length;i++){
        if(checkboxes[i].checked){
        vote[i]++ 
        }
    }

    totalVotes = 0
    for(let i =0;i < vote.length;i++){
            totalVotes += vote[i]
        }

    max = findMax(vote)

    if (totalVotes != 0){
        let percentList = [0,0,0,0]
        for(let i=0;i < vote.length; i++){
        percentList[i] = (
        (vote[i]/totalVotes *100).toFixed(2)
        )
    }
    for(let i=0;i < percentList.length; i++){
    document.getElementById('percent'+(i+1)).textContent = options[i] +": "+vote[i]+" votes"+" / "+percentList[i]+"%"
    }
        document.getElementById("totalVotes").textContent = "Total Votes: "+ totalVotes
        document.getElementById("mostVote").textContent = "The most popular thing is: "+ options[max-1]
        document.getElementById("msg").textContent = "The most popular thing is: "+ options[max-1]

        }
    })

document.getElementById("clearBtn").addEventListener("click", function(){
    let checkboxes = [  
    document.getElementById("op1"),
    document.getElementById("op2"),
    document.getElementById("op3"),
    document.getElementById("op4")]
    for(let i = 0;i < checkboxes.length;i++){
        checkboxes[i].checked = false
    }
    vote = [0, 0, 0, 0]
    totalVotes = 0
    max = 0
    document.getElementById("percent1").textContent = "Cat: --"
        document.getElementById("percent2").textContent = "Dog: --"
        document.getElementById("percent3").textContent = "Snake: --"
        document.getElementById("percent4").textContent = "Hamster: --"
        document.getElementById("totalVotes").textContent = "Total Votes: "
        document.getElementById("mostVote").textContent = "The most popular thing is: "
})

function findMax(voteList){
    let popularest = 0
    let max = 0
    for(let i =0;i < voteList.length;i++){
        if(voteList[i] > popularest){
            popularest = voteList[i]
            max = i + 1
        }
    }
    return max;
}