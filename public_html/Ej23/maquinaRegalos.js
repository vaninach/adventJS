/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function canReconfigure(from, to) {
    if(from.length!=to.length) return false;
    
    from=from.split("");
    to=to.split("");
    
    let claves={};
    
    for(let i in to){
        if(i==0){
            claves[from[i]]=to[i];
            claves[to[i]]=from[i];
            continue;
        }
        if(Object.keys(claves).includes(to[i])){
            if(claves[to[i]]!=from[i]) return false;
        }
        else if(Object.keys(claves).includes(from[i])){
            return false;
        }
        else{
             claves[from[i]]=to[i];
            claves[to[i]]=from[i];
        }
        
    }
    
 
  return true
}



const from = 'MMM'
const to   = 'MID'
console.log(canReconfigure(from, to));