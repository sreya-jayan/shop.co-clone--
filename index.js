const url =("/index.json")
const arrivals = document.querySelector("#arrivals .items")
const button = document.querySelector(".button")


async function arrivalData(){
   try{
    const response = await fetch(url);
     if (!response.ok) {
            throw new Error("Failed to fetch data");
    }
    const data = await response.json()
    return data

   }
    catch (error) {
        console.error(error);
   }
}
async function displayProducts(){
    const payload = await arrivalData();


 let data = payload.map((object) => {
    const{name,image,image2,rating,price,dummyPrice,discount,} = object;

    return`
     
     
          
           
            <div class="item">
                    <img src="${image}" alt="Product Image"/>
                    <h3>${name}</h3>
                    <div class="stars">
                        <img src="${image2}" alt="Rating Stars"/> 
                         <span class="label">${rating}</span>
                       
                    </div>
                    <div class="money">
                         <h4>${price}</h4>
                        ${dummyPrice ? `<span class="label">${dummyPrice}</span>` : ''}
                        ${discount ? `<small>${discount}</small>` : ''}
                    </div>
                    
             </div>
            
   
         `;
      }).join("");
   
 arrivals.innerHTML=data
}
displayProducts()  


 



               







document.addEventListener('DOMContentLoaded', function(){
  let button = document.getElementById("addBtn");
  let arrival = document.querySelector("#arrivals .items");
  let selling = document.querySelector("#selling .items");

  button.addEventListener('click', function(event) {
     event.preventDefault();
     arrival.innerHTML = selling.innerHTML; 
  });
})
  




let menu = document.querySelector('.menu')
let active = document.querySelector('.active')


menu.addEventListener('click', function(){
   active.classList.toggle('is-active')
});  

















const urlCard =("/card.json")
const cardsContainer = document.querySelector('#customers .cards');

async function customersData(){
   try{
      const response = await fetch(urlCard)
      if(!response.ok){
         throw new Error ("Failed to fetch data");
      }
      const data = await response.json()
      return data

   }
   catch(error){
      console.error(error);
   }
}

async function display() {
   const payload = await customersData();
  
   
   const data = payload.map((object) => {
       const { star, name, tick, paragraph } = object;
     

       return `
                <div class="card1">
                    <img src="${star}" alt="star5"/>
                    <div class="name">
                        <h3>${name}</h3>
                        <img src="${tick}" alt="tick"/>
                    </div>
                    <p>${paragraph}</p>
                </div>
               `
   }).join("");
 
  

cardsContainer.innerHTML += data;

let backBtn = document.getElementById('button1');
let nextBtn = document.getElementById('button2');


cardsContainer.addEventListener('wheel',function (event){
   event.preventDefault();
  cardsContainer.scrollLeft += event.deltaY;
  
});


nextBtn.addEventListener('click', function(event) {
  event.preventDefault();
 
  cardsContainer .scrollLeft += 300;
  
});
backBtn.addEventListener('click',function(event) {
   event.preventDefault(); 
  cardsContainer.scrollLeft -= 300;
}); 

    
}

display(); 









const urlAbout =("/about.json")
const selling = document.querySelector("#selling .items");
const buttons  =document.querySelector(".button")

async function sellingData(){
   try{
      const response = await fetch(urlAbout)
      if(!response.ok){
         throw new Error ("Failed to fetch data");
      }
      const data = await response.json()
      return data
      
    
   }
   catch(error){
      console.error(error);
   }
}
async function displayData() {
   const payload = await sellingData();

  const data = payload.map((object) =>{
      const{image, name, image2, rating,price, dummyPrice,discount} = object;

      return`
      <div class="item">
                    <img src="${image}" alt="img7"/>
                    <h3>${name}</h3>
                    <div class="stars">
                        <img src="${image2}" alt="star"/>
                        <span class="label">${rating}</span>
                    </div>
                    <div class="money">
                        <h4>${price}</h4>
                     ${dummyPrice ?  `<span class="label">${dummyPrice}</span>` : ''}
                     ${discount ? `<small>${discount}</small>` : ''}
                    </div>
                </div>
      `
  }).join("")
  selling.innerHTML = data;
}

displayData()



document.addEventListener('DOMContentLoaded', function(){
   let button = document.getElementById('btn');
   let selling =document.querySelector("#selling .items")
   let arrival = document.querySelector("#arrivals .items")

   button.addEventListener('click', function(event){
     event.preventDefault();
     selling.innerHTML = arrival.innerHTML;
   });
});











