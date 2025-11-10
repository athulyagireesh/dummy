async function display(){

let res= await fetch('https://dummyjson.com/products')
let data=await res.json();

let str=""

        data.products.forEach(element => {

            str+=` <div class="card">
            <div class="imagediv">
                <img src="${element.images[0]}" alt="no image">
            </div>
            <div class="text">
                <p>${element.title}</p>
            <button class="cat">${element.category}</button>
            <p class="price">${element.price}</p>
            </div>
        </div>`
        })
        document.getElementById("contain").innerHTML=str


document.getElementById("search").addEventListener("keyup",()=>{

    let searched=document.getElementById("search").value;
    console.log(searched)
        res.then((data)=>{
    console.log(data)
       let searchedvalue= data.products.filter(element=>{
            return  element.title.toLowerCase().includes(searched)||element.category.includes(searched)
        })
        let str=""
        searchedvalue.forEach(element => {

            str+=` <div class="card">
            <div class="imagediv">
                <img src="${element.images[0]}" alt="no image">
            </div>
            <div class="text">
                <p>${element.title}</p>
            <button class="cat">${element.category}</button>
            <p class="price">${element.price}</p>
            </div>
        </div>`
        })
        document.getElementById("contain").innerHTML=str
})
})
}
display();
