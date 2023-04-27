var myIndex = 0;
// heaven();

function heaven() {
  var i;
  var x = document.getElementsByClassName("images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}   
  console.log("hello")
  console.log("style", x[0].style); 
  x[myIndex-1].style.display = "block" ;  
  setTimeout(heaven, 2000); 
}
let page = window.location.href;
let pg= page.split("?id=")[1];
console.log(pg);
let img=document.getElementsByClassName("image")[0];
let para= document.getElementsByClassName("para")[0];
let foods=document.getElementsByClassName("menu")[0];
let drinks=document.getElementsByClassName("Drinks")[0];

restaurants.map((item)=>{
  if(item.id==pg){
    // item.gallery?.map((galItem)=>{
      // create images to append on the images section
      let im= document.createElement("img");
      im.setAttribute("class","images");
      im.setAttribute("src",item.image);
      im.setAttribute("alt","image of the gallery");
      console.log("data images");
      img.appendChild(im);

      // create elements for para section
      let p=`<h4> ${item.name}  </h4>
      <p> Tel:${item.tel} <br></p>
      <p>  <br>
         ${item.descr}
         <br> 
        </p>`
        para.innerHTML=p;
        let food="";
        let drink ="";

        //elements to replace the food section
        item.menu.food.map((foodItem)=>{
          console.log("food")
           food+= `${foodItem.item}:                      ${foodItem.price} <br>`
        });
        item.menu.drinks.map((drinkItem)=>{
            drink += `${drinkItem.item}:                    ${drinkItem.price} <br>`
        })
        console.log("foods",food)
        foods.innerHTML=food;
        drinks.innerHTML=drink;

    // })
  }
})
// img.innerHTML=images;

