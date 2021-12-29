

//let cadena=".....,"
//
//
//
//let cadena2=cadena.split("");
//
//var cadena3=cadena2.forEach(convertir(a))
//
//console.log(cadena3);
//
//
//
//function convertir(a){
//    
//    if(a==".") return 3;
//    else if(a==",") return 4;
//    
//    
//}

symbols=".,;!f"
 const items = symbols.split("");
const copyItems = []



// after
items.forEach(function(item){
    if(item==".")  copyItems.push(1);
    else if(item==",") copyItems.push(5);
    else if(item==":") copyItems.push(10);
    else if(item==";") copyItems.push(50);
    else if(item=="!") copyItems.push(100);
    else copyItems.push(NaN);
})

let sum=0;

for(let i=0;i<copyItems.length;i++){
//    console.log(sum);
    if(i==(copyItems.length-1)) sum+=copyItems[i];
    else if(copyItems[i]<copyItems[i+1]) sum-=copyItems[i];
    else sum+=copyItems[i];
   
    
}



//console.log(copyItems);
console.log(sum);