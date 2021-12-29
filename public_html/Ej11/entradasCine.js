/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function shouldBuyFidelity(times) {
  
  let result=0;
  
  for(let i=1;i<times;i++){
      result+=0.75**i;
  }
  
  result*=12;
  result+=250;
  
  
  
  
  return result>(12*times)? false : true;
}



console.log(shouldBuyFidelity(100));




