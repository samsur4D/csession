


// set all button in on variable
const allBtn = document.getElementsByClassName('add-btn');

let count = 0 ;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        count = count + 1 ;
        setInnerText('cart-count' , count) ; 





// show to the cart when you selected place and price
const placeName = event.target.parentNode.childNodes[1].innerText ;
const price = event.target.parentNode.childNodes[3].childNodes[1].innerText ;
// selected cart container
const selectedContainer = document.getElementById('selected-place-container');
// show to the li & p version
/*  <li>
        <p>placename</p> <p2>Price</p2>
    </li> */
const li = document.createElement('li');
const p = document.createElement('p');
 p.innerText = placeName ;
const p2 = document.createElement('p');
p2.innerText =price ;
li.appendChild(p);
li.appendChild(p2);
selectedContainer.appendChild(li);

event.target.parentNode.parentNode.style.backgroundColor = "gray";


// decrease budget amount
const budget = document.getElementById('budget').innerText ;
const convertedBudget = parseInt(budget);
// /budget should not be negative or zero then show alert
if(convertedBudget-parseInt(price)<0){
  alert ('Budget Fnished');
  return;
}
document.getElementById("budget").innerText = convertedBudget - parseInt(price);








// ...total cost
// const totalCost = document.getElementById('total-cost').innerText;
// const convertedTotalCost = parseInt(totalCost);
// const sum = convertedTotalCost + parseInt(price) ;
// setInnerText('total-cost' , sum) ;
totalCost('total-cost' , parseInt(price));
// .......................

// Grand Total
// const grandTotal =document.getElementById('grand-total').innerText ;
// const covertedGrandTotalCost = parseInt(grandTotal);
// const grandSum = covertedGrandTotalCost + parseInt(price);
// setInnerText('grand-total' , grandSum) ;
  grandTotalCost(other);
// ..................       
 })}




// commonly uses when  set innertext in any element
function setInnerText(id , value){
document.getElementById(id).innerText = value ;
}



// create a function when total cost used for total cost
function totalCost(id , value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value) ;
    setInnerText('total-cost' , sum) ;
    }
    
    // // create a function when total cost used for total cost
    function grandTotalCost(category){
          const totalCost = document.getElementById('total-cost').innerText ;
          const convertedTotalCost = parseInt(totalCost);
        



        //   selsected bus or train or flight
         if(category==="bus"){
            setInnerText('grand-total' , convertedTotalCost+100);
         }else if(category==="train"){
            setInnerText('grand-total' , convertedTotalCost-200);
         }else if(category==="flight"){
            setInnerText('grand-total' , convertedTotalCost+500)
         }else{
            setInnerText('grand-total' , convertedTotalCost)
         }
         }
          
         
        

