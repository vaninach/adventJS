/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



const array=[2,2,3,4,5,6,7,8,];
const suma=100;

let descarte=[];

let resultado=null;

for(let i=0; i<array.length;i++){
    if(descarte.includes(array[i])) continue;
    
  
    
    for(let j=i+1;j<array.length;j++){
        if(array[i]+array[j]==suma){
            resultado=[array[i],array[j]];
            break;
        }
        
        
    }
    
    if(resultado==null) descarte.push(array[i]);
    else break;
    
}

console.log(resultado);

