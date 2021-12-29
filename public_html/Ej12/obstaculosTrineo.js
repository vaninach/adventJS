/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getMinJump(obstacles) {
    let traj = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."];

    obstacles.forEach((value) => {
        traj[value] = "X";
    });


    for (let i = 1; i < traj.length; i++) {
        let j = i;
        let exito=true;
        while (j<traj.length) {
            if(traj[j]=="X"){
                exito=false;
                break;
            }
            
            j+=i;
            
        }
        
        if(exito==true) return i;

    }

    
}




console.log(getMinJump([2, 4, 6, 8, 10]));