let cat= document.getElementById('cat');
let dog=  document.getElementById('dog');
let catbtn= document.getElementById('catbtn');
let dogbtn= document.getElementById('dogbtn');

catbtn.addEventListener('click',()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data[0].url);
        cat.innerHTML= `<img src="${data[0].url}" alt="Cat image">`;
    } )
})
dogbtn.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.message);
        dog.innerHTML= `<img src="${data.message}" alt="Cat image">`;
    } )
})

