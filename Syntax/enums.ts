// default start from 0, can explicitly set it to any number and value next to it will have value one greater than it
enum num1{
    val0,
    val1, 
    val2,
    val3, 
}

let val0: num1 = num1.val0
console.log(val0);



enum signs{
    up = "Up",
    down = "Down",
    left = "Left",
    right = "Right"
}

let dir: signs = signs.left;
console.log(dir);