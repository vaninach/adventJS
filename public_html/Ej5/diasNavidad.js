/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function daysToXmas(date) {
  const fehca=new Date('Dec 25, 2021');

  var dif=fehca.getTime()-date.getTime();
   
  return Math.ceil(dif/1000/60/60/24);
}



console.log(daysToXmas(new Date('Dec 25,2021')));

