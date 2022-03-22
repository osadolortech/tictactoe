let boxes = Array.from(document.querySelectorAll(".singlediv"))
let select_side = document.querySelector(".dropdown")
let player_x = document.querySelector(".payer_mark")
let player_o = document.querySelector(".player_mark2")
let resets = document.querySelector(".reset")




    curret_player = player_x.innerText 
    


    
   

resets.addEventListener('click', () => {
    boxes.forEach(item => item.innerText = "")
})



const winning_conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function checkwin(){
    winning_conditions.forEach(wins=>{
        let check = wins.every(indexOf => boxes[indexOf].innerText.trim()==curret_player)

        if(check){
            alert("player "+ curret_player + " won")
            return true
        }

    })

    return false
}

function checkDraw(){
    for(i in boxes){
        if(boxes[i].innerText === ""){
            return false
        }
    }
    alert("who na don DRAW!!!!!")
    return true
}

boxes.forEach(cell =>{
    cell.addEventListener('click',function(){
        console.log("hello")

        if(cell.innerText.trim() !== ""){
            return 
        }
        

        cell.innerText = curret_player

           


        if(!checkwin()){
           
           checkDraw()
        }

        curret_player = curret_player === player_x.innerText ?  player_o.innerText :  player_x.innerText;

    })
})
