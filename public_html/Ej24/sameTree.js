/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function checkIsSameTree(treeA, treeB) {
    
    
//    if(JSON.stringify(treeA)!=JSON.stringify(treeB)){
//        console.log("falso aca");
//        return false;
//    }
    
    
    let total=true;
    
    
    
    let dir=["left","right"];
    
    if(treeA["value"]!=treeB["value"]) total=false;
    
    
    
    for( let i of dir){
      
        if(treeA[i]!=null){
            if(treeB[i]!=null){
                total=checkIsSameTree(treeA[i],treeB[i]);
            }
            else{
            total= false;
        }
        }
        else{
            if(treeB[i]!=null) total= false;
        }
        
    }
    console.log(total);
  return total;
    
    }
    
    
    
    const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}



console.log(checkIsSameTree(tree, tree)); // false);
