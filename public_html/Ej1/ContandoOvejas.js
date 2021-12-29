/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function contarOvejas(ovejas) {
  
  
  
  
  return ovejas
}



const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]


const ovejas2=ovejas.filter(
        function (a){ return a.name.toUpperCase().includes("A"); }
        );

const ovejas3 =ovejas2.filter(
        function (a){ return a.name.toUpperCase().includes("N"); }
        );

const ovejas4 =ovejas3.filter(
        function (a){ return a.color=="rojo"; }
        );


console.log(ovejas4);

const ovejasN=ovejas.filter(
        function (a){ return (a.name.toUpperCase().includes("A") &&  a.name.toUpperCase().includes("N") && a.color=="rojo") ; }
        
        );



contarOvejas(ovejas);