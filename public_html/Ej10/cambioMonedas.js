/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function getCoins(change) {
  let coins = [1,2,5,10,20,50];
  
  let resto=change;
  let resultado=[];
  
  for(let i=coins.length-1;i>=0;i--){
    while (resto>=coins[i]){
        resto-=coins[i];
        resultado.push(coins[i]);
    
    }
}
  
  return resultado;
}


function getCoins(change) {
let coins = [1,2,5,10,20,50];
  
  let resto=change;
  let resultado=[0,0,0,0,0,0];
  
  for(let i=coins.length-1;i>=0;i--){
    while (resto>=coins[i]){
        resto-=coins[i];
        resultado[i]+=1;
    
    }
}
  return resultado;
}


console.log("gfs");
console.log(getCoins(51));
