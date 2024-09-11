const input = document.querySelector('.search-box');
const searchbtn = document.querySelector('.searchbtn');


const fetchrecipes=async(kanchan)=>{
const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${kanchan}`);
const response= await data.json();
console.log(response);


}

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchinput = input.value.trim();
  fetchrecipes(searchinput);
  console.log("button clicked...");
});

// const searchbtn = document.querySelector(".search-btn");
// const mealist = document.getElementById("meal");
// const input = document.querySelector(".search-input");
// const mealdetailscontent = document.querySelector("meal-details-content");
// const recipeclosebtn = document.getElementById("recipe-close-btn");

// const fetchrecipe = async (query) => {
//   const data = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//   );
//   const response = await data.json();
//   console.log(response);
// };

// searchbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const searchinput = input.value.trim();
//   fetchrecipe(searchinput);
//   console.log("button clicked...");
// });
