/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const letter = 'bici coche balón _playstation bici coche peluche'


const cartaN=letter.split(" ");

 
 const cartaN2=cartaN.filter(function (e){
    return !(e.includes("_") || e.includes(" ") || e=="" ) ;
})

var caja={};

for(var i=0;i<cartaN2.length;i++){
    if(!caja[cartaN2[i]]){
        caja[cartaN2[i]]=1;
    }

    else{
        caja[cartaN2[i]]++;
        
    }
    
}


console.log(caja);