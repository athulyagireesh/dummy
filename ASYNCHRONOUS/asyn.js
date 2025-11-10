setTimeout(()=>
{
    console.log("hloo athulya")
},10000)

let a=10;
let abc=setInterval(() => {
    console.log(a)
    a++;
},10000);

setTimeout(()=>{
    clearInterval(abc);
    console.log("timeout")
},20000)

console.log("aftertimeout")




