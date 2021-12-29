/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function learn(time, courses) {
 
 let max=0;
 let resultado=[];
 
 for(let i=0;i<courses.length-1;i++){
     if(courses[i]>time) continue;
     for(let j=i+1;j<courses.length;j++){
         let trans=courses[i]+courses[j];
         if(trans>time) continue;
         if(trans>max) {
             max=trans;
             resultado=[];
             resultado.push(i);
             resultado.push(j);
         }
         
     }
     
 }
 
 if(resultado.length==0) resultado=null;
 
  return resultado;
}




console.log(learn(5, [5, 5, 5]));