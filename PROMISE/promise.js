const promise=new Promise((res,rej)=>{
    rej("failure")
})

// promise.then((abc)=>{
//     console.log(abc)
// })

.catch((err)=>{
    console.log(err)
})