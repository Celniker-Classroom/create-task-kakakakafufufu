let vote = [0, 0, 0, 0]
let totalVotes = 0
document.getElementById("submit").addEventListener("click", function(){submitVote()})
    
function submitVote(){
let checkboxes = [
document.getElementById("op1"),
document.getElementById("op2"),
document.getElementById("op3"),
document.getElementById("op4")
]
for(let i =0;i < checkboxes.length;i++){
    if(checkboxes[i].checked){
       vote[i]++ 
    }
}
    updateVote()
}
function updateVote(){
    let popularest = 0
    let term = 0
    totalVotes = 0
    for(let i =0;i < vote.length;i++){
        if(vote[i] > popularest){
            popularest = vote[i]
            term = i + 1
        }
        
        for(let i =0;i < vote.length;i++){
            totalVotes += vote[i]
        }
        calculatePercent()
        document.getElementById("totalVotes").textContent = vote[0]+" "+vote[1]+" "+vote[2]+" "+vote[3]
        + "popularest: " +popularest+"  total votes:"+ totalVotes
        document.getElementById("mostVote").textContent = "The most popular thing is: "+term
}
}
function calculatePercent(){
    let percentList = document.getElementById("result")
    let percentResult = document.createElement("li")
    let calculateList = []
    for(let i=0;i< vote.length; i++){
        calculateList.push(
            (vote[i]/totalVotes *100).toFixed(2)
        )
    }
    for(let i=0;i< calculateList.length; i++){
    percentResult.textContent = calculateList[i]+"%"
    percentList.appendChild(percentResult)
    }
}