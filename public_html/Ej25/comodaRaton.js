/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function canMouseEat(direction, game) {
   
    let alto=game.length;
    let largo=game.length;
    let posicion_raton=[];
    
    for(let i of game){
        if(i.indexOf("m")!=-1){
            posicion_raton.push(game.indexOf(i));
            posicion_raton.push(i.indexOf("m"));
            break;
        }
        
    }
    
    switch (direction){
        case "up":
            if(posicion_raton[0]==0) {
                console.log("se choca con las paredes!");
                return false;
            }
            if(game[posicion_raton[0]-1][posicion_raton[1]]=="*") return true;
            break;
        case "down":
            if(posicion_raton[0]==(game.length-1)) {
                console.log("se choca con las paredes!");
                return false;
            }
            if(game[posicion_raton[0]+1][posicion_raton[1]]=="*") return true;
            break;
        case "right":
            if(posicion_raton[1]==(game[0].length-1)) {
                console.log("se choca con las paredes!");
                return false;
            }
            if(game[posicion_raton[0]][posicion_raton[1]+1]=="*") return true;
            break;
        case "left":
            if(posicion_raton[1]==0) {
                console.log("se choca con las paredes!");
                return false;
            }
            if(game[posicion_raton[0]][posicion_raton[1]-1]=="*") return true;
            break;
        default :
            console.log("no entendi la consigna!");
    }
    
 return false
}




const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
];





console.log(canMouseEat('right',    room2));   // false