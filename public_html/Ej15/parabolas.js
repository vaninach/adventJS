/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function checkSledJump(heights) {
  
  let orientacion="s";
  
  for(let i=1;i<heights.length;i++){
      if(heights[i]==heights[i-1]) return false;
      
      if(orientacion=="s" && heights[i]<heights[i-1]) orientacion="b";
      if(orientacion=="b" && heights[i]>heights[i-1]) return false;
      
      
  }
  
  
  return orientacion=="b"?true:false;
}


console.log(checkSledJump([2, 4, 4, 6, 2]));






