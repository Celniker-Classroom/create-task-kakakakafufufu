let vote = [0, 0, 0, 0]
let totalVotes = 0
document.getElementById("submit").addEventListener("click", function(){submitVote()})
document.getElementById("clearBtn").addEventListener("click", function(){clear()})
function submitVote(){
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
    updateVote()
}
function updateVote(){
    let popularest = 0
    let unpopularest = 500
    let max = 0
    let min = 0
    totalVotes = 0
    for(let i =0;i < vote.length;i++){
        if(vote[i] > popularest){
            popularest = vote[i]
            max = i + 1
        }
         if(vote[i] < unpopularest){
            unpopularest = vote[i]
            min = i + 1
        }
        }
        for(let i =0;i < vote.length;i++){
            totalVotes += vote[i]
        }
        calculatePercent()
        document.getElementById("totalVotes").textContent = "Total Votes: "+ totalVotes
        document.getElementById("mostVote").textContent = "The most popular thing is: "+ max
        document.getElementById("leastVote").textContent = "The most unpopular thing is: "+ min
}
function calculatePercent(){
    let percentList = [0,0,0,0]
    for(let i=0;i< vote.length; i++){
        percentList[i] = (
            (vote[i]/totalVotes *100).toFixed(2)
        )
    }
    document.getElementById("percent1").textContent = "Option 1: "+percentList[0]+"%"
    document.getElementById("percent2").textContent = "Option 2: "+percentList[1]+"%"
    document.getElementById("percent3").textContent = "Option 3: "+percentList[2]+"%"
    document.getElementById("percent4").textContent = "Option 4: "+percentList[3]+"%"
}
function clear(){
    let checkboxes = [  
    document.getElementById("op1"),
    document.getElementById("op2"),
    document.getElementById("op3"),
    document.getElementById("op4")]
    for(let i =0;i < checkboxes.length;i++){
        checkboxes[i].checked = false
    }
    vote = [0, 0, 0, 0]
    totalVotes = 0
    term = 0
    document.getElementById("percent1").textContent = "Option 1:--"
    document.getElementById("percent2").textContent = "Option 2:--"
    document.getElementById("percent3").textContent = "Option 3:--"
    document.getElementById("percent4").textContent = "Option 4:--"
    document.getElementById("totalVotes").textContent = "Total Votes: "
    document.getElementById("mostVote").textContent = "The most popular thing is: "
    document.getElementById("leastVote").textContent = "The most unpopular thing is: "
}
