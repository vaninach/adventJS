/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



const n=2;


let arbol="";

for(let j=1;j<=n;j++){
    for(let i=0;i<(2*n-1);i++){
        if(i< ( 2*n-1- (2*j-1) )/2) arbol+="_";
        else if( i< ( 2*n-1-(2*j-1) )/2 +(2*j-1) ) arbol+="*";
        else arbol+="_";
    
    }    
    arbol+="\n";
}

for(let j=0;j<2;j++){
    for(let i=0;i<(2*n-1);i++){
        if(i< ( 2*n-1-1 )/2) arbol+="_";
        else if( i< ( 2*n-1-1 )/2 +1 ) arbol+="#";
        else arbol+="_";
    
    }    
   if(j==0) arbol+="\n";
}

console.log(arbol);
