//constants
let direction={x:0,y:0};
 let lastPainttime=0;
 let score;
 let inputdir={x:0,y:0};
 let foodlocation={x:5,y:14};
 let snakeArr=[{x:13,y:15}];
 let board=document.getElementById('board');
//   let gameboard=document.getElementsByClassName('boardi');
//game function(game loop )
function main(ctime){
            window.requestAnimationFrame(main);
      if(((ctime-lastPainttime)/1000)<1/2){
        return;
      }
    //  console.log(ctime);
     console.log(lastPainttime);
     lastPainttime=ctime;
    //  gameEngine();
}
// function gameEngine(){
//         //updating the snake and food
//         if(isCollide(snakeArr)){
//              alert("the end");
//             inputdir={x:0,y:0};
//             snakeArr=[{x:13,y:15}];
//             score=0;
//     }
//         function isCollide(sarr){
//              return false;
//          }
         
//       //if you have eaten the food increment the score and regenerate the food
//          if(snakeArr[0].x==foodlocation.x &&snakeArr[0].y==foodlocation.y){
//              snakeArr.unshift({x:snakeArr[0].x+inputdir.x,y:snakeArr[0].y+inputdir.y});
//              let a=2,b=16;
//              foodlocation={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
//          }
//         //moving the snake
        
//                 for(i=snakeArr.length-1;i>=0;i--){
//                 snakeArr[i+1]={...snakeArr[i]};
//                 }
//           snakeArr[0].x += inputdir.x;
//           snakeArr[0].y += inputdir.y;
           
//           //creating a snake
//           board.innerHTML= '';
           
//         snakeArr.forEach((e,index)=>{
//         snakeElement=document.createElement('div'); 
//         snakeElement.style.gridRowStart=e.y;
//         snakeElement.style.gridColumnStart=e.x;
//         if(index==0){
//             snakeElement.setAttribute("class", "head"); 
//         }
//         else{
//         snakeElement.setAttribute("class", "snake");
//         }
//        board.appendChild(snakeElement);
   
//     });
// }

    //   let food=document.createElement('div');
    //   food.setAttribute("class","food");
    //   food.style.gridRowStart=foodlocation.y;
    //   food.style.gridColumnStart=foodlocation.x;
    //   board.appendChild(food);
    // }

//main logic 
 window.requestAnimationFrame(main);
 console.log("framed");
 window.addEventListener('keydown',e=>{
  
    //  inputdir={x:0,y:1};//start the game
     switch(e.key){
     case "ArrowUp":
        console.log("up");
        inputdir.x=0;
        inputdir.y=-1;
        
         break;
    case "ArrowRight":
        console.log("right");
        inputdir.x=1;
        inputdir.y=0;
      
          
       break;
     case "ArrowLeft":
        console.log("left");
        inputdir.x=-1;
        inputdir.y=0;
        
       break;
    case "ArrowDown":
        console.log("down");
        inputdir.x=0;
        inputdir.y=1;
   
         break;
         default:
            break;
    }
});