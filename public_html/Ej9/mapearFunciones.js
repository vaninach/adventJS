/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 function groupBy(array,fun){
 
 for(let i=0;i<array.length;i++){
 console.log(fun(array[i]));
 
 }
 
 
 }
 
 groupBy([6.1, 4.2, 6.3], Math.floor);
 
 */



//function groupBy(array,fun){
//    
//    for(let i=0;i<array.length;i++){
//        console.log(array[i].fun);
//        
//    }
//    
//    
//}

//function groupBy(collection, it) {
//const result = {};
//	const isFunction = typeof it === 'function';
//	collection.forEach((value) => {
//		const key = isFunction ? it(value) : value[it];
////		result[key]= result[key] ?? [];
//                result[key]= result[key]==null ? [] : result[key];
//		result[key].push(value);
//	});
//
//}

function groupBy(collection, it) {
    
    const result = {};  //iniciar objeto json resultado
    const isFunction = typeof it === 'function';  // ver si es funcion o propiedad
    collection.forEach((value) => {  // apllicar a cada valor
        
        const key = isFunction ? it(value) : value[it];   // aplicar la funcion o propiedad correspondiente
        result[key] = result[key] == null ? [] : result[key];  //si todavia no existe la entrada que necesitamos en resultado creamos una entrada vacia
        //result[key] ??= [];
        result[key].push(value);  // ponemos el valor
    });
    return result;
}

//console.log(groupBy(['one', 'two', 'three'], 'length'));


//array=["one","twerf"];
//
//console.log(array[1]["length"]);
//
//console.log(array[1].length);


const re={};

re["hola"]=2;


console.log(re);
