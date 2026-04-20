//used ai to help debug the code
let vote = [0, 0, 0, 0]
let totalVotes = 0
let max = 0
document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("remind").textContent = "Choose all the pets you like:"
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

    let popularest = 0
    totalVotes = 0
    max = 0
    for(let i =0;i < vote.length;i++){
        if(vote[i] > popularest){
            popularest = vote[i]
            max = i + 1
        }
        for(let i =0;i < vote.length;i++){
            totalVotes += vote[i]
        }
    }
        showResult(vote,totalVotes)
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
    showResult(vote,totalVotes)
})

function showResult(List,sum){
    let options = ["cat","dog","snake","hamster"]
    if (sum != 0){
        let percentList = [0,0,0,0]
        for(let i=0;i < List.length; i++){
        percentList[i] = (
        (List[i]/sum *100).toFixed(2)
        )
    }
    for(let i=0;i < percentList.length; i++){
    document.getElementById('percent'+(i+1)).textContent = options[i] +": "+List[i]+" votes"+" / "+percentList[i]+"%"
    }
        document.getElementById("totalVotes").textContent = "Total Votes: "+ sum
        document.getElementById("mostVote").textContent = "The most popular thing is: "+ options[max-1]
        }else{
        document.getElementById("percent1").textContent = "Cat: --"
        document.getElementById("percent2").textContent = "Dog: --"
        document.getElementById("percent3").textContent = "Snake: --"
        document.getElementById("percent4").textContent = "Hamster: --"
        document.getElementById("totalVotes").textContent = "Total Votes: "
        document.getElementById("mostVote").textContent = "The most popular thing is: "
        }
}

