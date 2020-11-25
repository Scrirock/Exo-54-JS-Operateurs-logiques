let x = 1;
let y = 4;
let z = -1;

let result1 = document.getElementById("result1").innerText = x<2 ? "x est plus petit que 2" : "x n'est pas plus petit que 2"
let result2 = document.getElementById("result2").innerText = y>3 ? "y est plus grand que 3" : "y n'est pas plus grand que 3"
let result3 = document.getElementById("result3").innerText = z<=0 ? "z est inferieure ou égal a 0" : "z n'est pas inferieur ou égal a 0"
let result4 = document.getElementById("result4").innerText = x<2 && y>3 && z<=0 ? "x est plus petit que 2 ET y est plus grand que trois ET z est inferieur ou égal a 0" : "c fo"
let result5 = document.getElementById("result5").innerText = (x<2 && y>3) || z===-1 ? "x est plus petit que 2 ET y est plus grand que 3 OU ALORS z est strictement égale a 1" : "c fo"