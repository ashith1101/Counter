let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment(){ 
    count=count+1  
    countEl.innerText=count
}

function decrement(){ 
    if(count>0){
        count=count-1  
        countEl.innerText=count
    }
    else{
        alert("Counter can't decremented further!!!")
    }
}

function save(){
    let saveMessage=" "+count+" -"
    saveEl.innerText+=saveMessage
    console.log("Conter is at "+count)
    alert("Conter is at "+count)

    count=0
    countEl.innerText=count
}

