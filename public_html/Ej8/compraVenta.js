/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const prices = [3, 3, 3, 3, 3] ;


let best=0;

for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        
        if(prices[i]>prices[j]) break;
        
        if(prices[j]-prices[i]>best) best=prices[j]-prices[i];
        
        
    }
    
    
    
}

if(best==0) best=-1;

console.log(best);

