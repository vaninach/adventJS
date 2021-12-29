/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function canCarry(capacity, trip) {
    
    let regalos=[];
    let busca=[];
    let deja=[];
    let cantidad=0;
    
    for( let i of trip){
        regalos.push(i[0]);
        busca.push(i[1]);
        deja.push(i[2])
    }
    console.log(capacity)
    console.log(trip)
   
    for( let i in busca){
        if(i==0){
            cantidad+=regalos[i];
            if(cantidad>capacity){
              console.log(false)
              return false;
            }
            continue;
        }
        
        for(let j=i;j<deja.length;j++ ){
            if(busca[i]>=deja[j-1]){
                cantidad-=regalos[j];
            }
            else{
                cantidad+=regalos[i];
                if(cantidad>capacity){
                    console.log(false)
                    return false;
                }
                continue;
            }
        }
        
    }
    
  console.log(true)
  return true
}



console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]]));