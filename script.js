//used ai to help debug the code
let vote = [0, 0, 0, 0]
let totalVotes = 0
let max = 0
let options = ["Cat","Dog","Snake","Hamster"]
let popularest = 0
let time = 1
document.getElementById("show").style.display = "none"
document.getElementById("display").style.display = "none"

let ask = prompt("What type of things do you want to investigate:")
document.getElementById("remind").textContent = "Choose all the "+ask+" you like:"
let term = 0
for(let i =0;i < options.length;i++){
    term = prompt("Pls input "+options.length+" options you want to investigate")
    term = term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
    options[i] = term
}
updatePage()

document.getElementById("setBtn").addEventListener("click", function(){
    resultStorage()
    ask = prompt("What type of things do you want to investigate:")
    document.getElementById("remind").textContent = "Choose all the "+ask+" you like:"
    term = 0
    for(let i =0;i < options.length;i++){
        term = prompt("Pls input "+options.length+" options you want to investigate")
        term = term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
        options[i] = term
    }
    updatePage()
})

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

        }
    })

document.getElementById("clearBtn").addEventListener("click", function(){
    resultStorage()
    let checkboxes = [  
    document.getElementById("op1"),
    document.getElementById("op2"),
    document.getElementById("op3"),
    document.getElementById("op4")]
    for(let i = 0;i < checkboxes.length;i++){
        checkboxes[i].checked = false                  
    }
    updatePage()
        document.getElementById("totalVotes").textContent = "Total Votes: "
        document.getElementById("mostVote").textContent = "The most popular thing is: "
})

function findMax(voteList){
    popularest = 0
    let max = 0
    for(let i =0;i < voteList.length;i++){
        if(voteList[i] > popularest){
            popularest = voteList[i]
            max = i + 1
        }
    }
    return max;
}

function updatePage(){
    vote = [0, 0, 0, 0]
    totalVotes = 0
    max = 0
    for(let i=0;i < options.length; i++){
        document.getElementById("input"+(i+1)).textContent = options[i]
        document.getElementById("percent"+(i+1)).textContent = options[i]+": --"
    }
}

function resultStorage(){
    if(totalVotes != 0){
    let list = document.getElementById("record")
    let li = document.createElement("li")
    document.getElementById("display").style.display = "block"
    document.getElementById("show").style.display = "block"
    li.textContent = time+" round: "+options[max-1]+"   "+popularest+" votes"
    list.appendChild(li)
    time++
    }
}