import { getData } from "./data.js";

console.log(getData());
const data = getData();
// const signIn = document.querySelector('.sign-in');
// const filterByIngr = document.querySelector('.nav-ing-filter');

const filtered = (clickedCat) => {
  const arr = getData();
  const filteredCategory = [];
  for (let el of arr) {
    let categoryOfMeals = el.strCategory.toLowerCase();
    if (categoryOfMeals.includes (clickedCat.toLowerCase())) {
      filteredCategory.push(el);
      // console.log(filteredCategory)
    }
  }
  return filteredCategory;
};

//Show on Window function;
const container = document.querySelector(".container");

function showOnWindow(array) {
  for (let el of array) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const name = document.createElement("h3");
    name.innerHTML = el.strName;
    img.src = el.strImg;
    div.appendChild(img);
    div.appendChild(name);
    container.appendChild(div);
  }
}

//showing filtered meals
// const filterByCtgr = document.querySelector('.category-filter');
const buttonCat = document.getElementsByClassName('.category')

function showFiltered(event) {
  if (event.target) {
    const fArray = filtered(buttonCat);
    if (fArray.length > 0) {
      console.log(fArray);
      showOnWindow(fArray);
    } else {
      msg.innerHTML = "No matching";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 400);
    }
  } 
    showOnWindow(data);
  }

// filterByCtgr.addEventListener('click', clickedCat);

//filter by checkbox/ingredient
function filter(event) {
  const item = event.target;
  console.log(item);
  let catData = [];
  for (let i = 0; i < data.length; i++) {
    let category = data[i].strCategory.toString();
    if (catData === category) {
      console.log(data[i].strCategory);
      catData.push(data[i])
    }
  }
  filterByCat()
}

function categoryArr() {
  const strCat = [];
    for (let i = 0; i < data.length; i++) {
      const catData = data[i].strCategory;
      if (!categoryArr.includes(strCat) && catData === category) {
        strCat.push(data[i].strCategory);
      }
    }
  }
  for (let i = 0; i < strCat.length; i++) {
    const listOfCategory = document.createElement("div");
    listOfCategory.innerHTML = `
        <input type="checkbox" id="${strCat[i]}" >
        <label for="${strCat[i]}" id="${strCat[i]}">${strCat[i]}</label><br>
            `;
    filterByCtgr.appendChild(listOfCategory);
  }

  categoryArr();