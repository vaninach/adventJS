/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fixFiles(files) {
 
  let lista=[]
  let contador=1;
  
  for(let i=0;i<files.length;i++){
      if(lista.includes(files[i])) continue;
      else lista.push(files[i]);
      
      contador=1;
      for(let j=i+1;j<files.length;j++){
          if(lista.includes(files[j])){
              files[j]+="("+contador+")";
              contador++;
          }
          
      }
      
      
  }
 
  return files;
}





const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files));