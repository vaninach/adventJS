/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function countDecorations(bigTree) {
 
    let total=bigTree["value"];
    
    let dir=["left","right"];
    
    console.log(bigTree["left"]);
    
    for( let i of dir){
        console.log(bigTree[i])
        if(bigTree[i]!=null){
            
            total+=countDecorations(bigTree[i]);
        }
        
    }
    console.log(total);
  return total;
}



const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
}


const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

countDecorations(bigTree)