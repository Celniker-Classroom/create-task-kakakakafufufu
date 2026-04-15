let vote = [0, 0, 0, 0]
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
    for(let i =0;i < vote.length;i++){
        if(vote[i] > popularest){
             popularest = vote[i]
             term = i
        }
        document.getElementById("totalVotes").textContent = vote[0]+" "+vote[1]+" "+vote[2]+" "+vote[3]
        + "popularest: " +vote[term]+"  total votes:"+popularest
}
}