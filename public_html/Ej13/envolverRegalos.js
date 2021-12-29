/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




//let gifts=["📷", "⚽️"];
//
//console.log(gifts[0].length);



function wrapGifts(gifts) {
  
  
  let largo=gifts[0].length;
  
  let asteriscos="";
  
  for(let i=0;i<largo+2;i++){
      asteriscos+="*";
  }
  for(let i=0;i<gifts.length;i++){
      gifts[i]="*"+gifts[i]+"*";
  }
  
  gifts.unshift(asteriscos);
  gifts.push(asteriscos);
  
  return gifts;
}


console.log(wrapGifts(["📷", "⚽️"]));

