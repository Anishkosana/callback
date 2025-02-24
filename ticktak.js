let boxes=document.querySelectorAll(".box");
let turn0=true;
let winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
        box.innerHTML='O';
        turn0=false;
    }
    else{

        box.innerHTML='X';
        turn0=true;
    }
    box.Disabled=true;
   });
   checkwinner();
});
const checkwinner=()=>{
    for(let pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2]);
    }
}
