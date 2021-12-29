/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const cedula    = "(a) (b) (c)";// --- cadena a probar
const regExp    =  /^([\w \u00C0-\u024F\u1E00-\u1EFF]*\([\w \u00C0-\u024F\u1E00-\u1EFF]+\)[\w \u00C0-\u024F\u1E00-\u1EFF]*)+$/; // --- sin comillas
const resultado = regExp.test( cedula );
//--
console.log ( resultado ); //