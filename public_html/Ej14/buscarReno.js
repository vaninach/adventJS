/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function missingReindeer(ids) {
  let total=(ids.length*(ids.length+1))/2;
  
  for(let i of ids) total-=i;
  
 
  
  
  
  return total==0? 0: total;
}

console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]));

