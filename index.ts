function moveTower(n:number, src:number[], dest:number[], tmp:number[]) {
    if(n > 0) {
        moveTower(n-1, src, tmp, dest);
        dest.push(src.pop());
        printState();        
        moveTower(n-1, tmp, dest, src);
    }
}
var iteration: number = 0;
function printState(){
    console.log('a: ' + a);
    console.log('b: ' + b);
    console.log('c: ' + c);
    console.log('----------'+ ++iteration +'------------');
}

var a:number[] = [5,4,3,2,1];
var b:number[] = [];
var c:number[] = [];
printState();
moveTower(5,a,b,c);
