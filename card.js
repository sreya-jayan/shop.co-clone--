
const url =("/card.json")
const customers = document.getElementById('customers')
async function customersData(){
   try{
      const response = await fetch(url)
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
   
  
   
  
   
  const cardsContainer = document.querySelector('#customers .cards');
  
      let nextBtn = document.getElementById('button1');
      let backBtn = document.getElementById('button2');
      
     
      
     cardsContainer.addEventListener('wheel',function (event){
         event.preventDefault();
        cardsContainer.scrollLeft += event.deltaY;
         
         
         
      });
      
      
      nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        cardsContainer .scrollLeft += 900;
      });
      backBtn.addEventListener('click',function(event) {
         event.preventDefault(); 
        cardsContainer.scrollLeft -= 900;
      }); 
    
   
    cardsContainer.innerHTML += data;
 
   
}

display(); 





