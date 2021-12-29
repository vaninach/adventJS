/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function countPackages(carriers, carrierID) {
   let regalos = 0;
    let listaBuscar = [carrierID];
    let borrar = [];
    
    
    while (listaBuscar.length != 0) {
        for (let i in carriers) {
            if (carriers[i][0] == listaBuscar[0]) {
                borrar = carriers[i];
            }
        } 
        if(borrar[1]!==undefined)  regalos += borrar[1];
        
        if(borrar[2]!==undefined){
        for (let j of borrar[2])
            listaBuscar.push(j);
    }
       
        listaBuscar.shift();

    }
   
    return regalos;
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]






const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
]

console.log(countPackages(carriers2, 'dapelu'));


