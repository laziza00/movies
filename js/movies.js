// =====================future search==================


let newCategory =[]
let featureNewList = document.querySelector('#featurenewlist')
let formCategory = document.querySelector('#formcategory')
let formSearchForm = document.querySelector('#formsearch')
let searchMovie = document.querySelector('#searchmovie');
let searchStart = document.querySelector('#searchstart');
let searchEnd = document.querySelector('#searchend');




formSearchForm.addEventListener('submit', filterSearch);



function filterSearch (e) {
  e.preventDefault();

  featureNewList.innerHTML =""

    let fSearchInput= searchMovie.value
    let fCategory  =formCategory.value
    let fSearchStart = searchStart.value
    let fSearchEnd = searchEnd.value
 

  for(let i=0; i<movies.length; i++) {

    if(movies[i].categories.includes(fCategory) &&
    movies[i].title.toLowerCase().includes(fSearchInput.toLowerCase()) 
    && fSearchStart <=movies[i].year && fSearchEnd>=movies[i].year) {
      console.log("nimadir");
    
      let li =document.createElement('li');
      li.className ="feature__item"
      li.innerHTML = `
      
    <img class="feature__img"src="${movies[i].youtubePoster}" alt="img">
    <div style="display: flex;">
      <p class="feature__country">USA</p>
      <p class="feature__year feature__country">${movies[i].year}</p>
    </div>

    <h3 class="feature__item-title" id="title">${movies[i].title}</h3>
    <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 0 12px 0;">
      <div style="display: flex; align-items: center;">
        <img class="feature__img-img" src="images/imd-img.png" alt="img">
        <p class="feature__number">86/100</p>
      </div>

      <div style="display: flex; align-items: center;">
      <i class='bx bxs-star'></i>
      <p class="feature__percent">97%</p>
    </div>
    </div>
    <div style="display: flex;">
      <p class="feature__category" id="feature__category">${movies[i].categories},</p>
    </div>
    <button class="feature__item-btn feature__btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal('${movies[i].imdbId}')">See more <i class='bx bxs-chevron-right'></i></button>
    <button class="feature__heart-btn" id="heart__btn" onclick="AddHeartModal('${movies[i].imdbId}')">
    <i class='bx bxs-heart' ></i>
  </button>`
  featureNewList.appendChild(li)
    }
    
      searchMovie.value =""
      formCategory.value ="All"
      searchStart.value=""
      searchEnd.value=""
  }

}



for(let l=0; l<movies.length; l++) {
  let inputArr = movies[l].categories;

  for(let k=0; k<inputArr.length; k++) {
    if(!newCategory.includes(inputArr[k])){
      newCategory.push(inputArr[k])
    }
  }
}
for(let f=0; f<newCategory.length; f++) {
  let newOption = document.createElement('option');
  newOption.innerHTML = newCategory[f];
  
  formCategory.appendChild(newOption)
}










//============= pagination ===========



let allList = document.querySelector('#alllist')
let pagList = document.querySelector('#paglist')
let nextBtnPag = document.querySelector('#nextbtn')
let allPages = 127

function elem(allPages, page) {

  let li ='';

  let beforePages = page-1;
  let afterPages = page +1 
  let liActive;



if(page >1) {
    li+= `
    <li class=" pag__icon  pag__btn" style="border-radius: 50%;" onclick ="elem(allPages, ${page-1})" data-name="prevbtn">
    <i class='bx bx-chevron-left' ></i>
  </li>`
}

for (let pageLength = beforePages; pageLength<=afterPages; pageLength++){

    if(pageLength>allPages) {
      continue;
    }
    if(pageLength==0) {
      pageLength=pageLength+1
    }
    if(page==pageLength) {
      liActive = 'active'
    }else {
      liActive = ''
    }

  li+= `<li class="pag__numb  ${liActive}" onclick ="elem(allPages, ${pageLength})" data-name="two">
  <span> ${pageLength}</span>
 </li>
  `

}

    if(page < allPages) {
      li += `  <li class="pag__icon  pag__btn" onclick ="elem(allPages, ${page+1})"style="border-radius: 50%;" id="nextbtn" data-name="nextbtn">
      <i class='bx bx-chevron-right'></i>
    </li>`
    }
  pagList.innerHTML = li
}
elem(allPages,1)


let pabBtn = document.querySelector('.pag__numb');

pagList.addEventListener('click', (e)=> {

    let a = e.target.textContent;
    paginationFor(a)
})

nextBtnPag.addEventListener('click', (e)=>{
    page = page+1;
    paginationFor(page)   
})

let page =1;

function render(movies) {
    allList.innerHTML ='';

    for(let i=0; i<32; i++) {
        let li=document.createElement('li');
        li.className ="feature__item"
        li.innerHTML = `
        
      <img class="feature__img"src="${movies[i].youtubePoster}" alt="img">
      <div style="display: flex;">
        <p class="feature__country">USA</p>
        <p class="feature__year feature__country">${movies[i].year}</p>
      </div>
  
      <h3 class="feature__item-title" id="title">${movies[i].title}</h3>
      <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 0 12px 0;">
        <div style="display: flex; align-items: center;">
          <img class="feature__img-img" src="images/imd-img.png" alt="img">
          <p class="feature__number">86/100</p>
        </div>
  
        <div style="display: flex; align-items: center;">
        <i class='bx bxs-star'></i>
        <p class="feature__percent">97%</p>
      </div>
      </div>
      <div style="display: flex;">
        <p class="feature__category" id="feature__category">${movies[i].categories},</p>
      </div>
      <button class="feature__item-btn feature__btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal('${movies[i].imdbId}')">See more <i class='bx bxs-chevron-right'></i></button>
      <button class="feature__heart-btn" id="heart__btn" onclick="AddHeartModal('${movies[i].imdbId}')">
      <i class='bx bxs-heart' ></i>
    </button>`
    allList.appendChild(li)
    }
}
render(movies);

function paginationFor(page) {
    console.log(page);

    let pagArr =[]

    for(let i=((page-1)*32); i<=(page*32); i++) {
        pagArr.push(movies[i])
    }
    render(pagArr)
}


// ==============hero search================
 let heroSearchForm = document.querySelector('#heroSearchfrom');
 let heroSearchInput = document.querySelector('#herosearchinput')
 let heroListSearch = document.querySelector('#herolistSearch')

 heroSearchForm.addEventListener('submit', WorkHeroInput)

 
 function WorkHeroInput (e) {
    e.preventDefault();
  
 
     heroListSearch.innerHTML =""
 
     let finputSearch= heroSearchInput.value
  
 
   for(let i=0; i<movies.length; i++) {
 
     if(movies[i].title.toLowerCase().includes(finputSearch.toLowerCase())) {
     
       let li =document.createElement('li');
       li.className ="feature__item"
       li.innerHTML = `
       
     <img class="feature__img"src="${movies[i].youtubePoster}" alt="img">
     <div style="display: flex;">
       <p class="feature__country">USA</p>
       <p class="feature__year feature__country">${movies[i].year}</p>
     </div>
 
     <h3 class="feature__item-title" id="title">${movies[i].title}</h3>
     <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 0 12px 0;">
       <div style="display: flex; align-items: center;">
         <img class="feature__img-img" src="images/imd-img.png" alt="img">
         <p class="feature__number">86/100</p>
       </div>
 
       <div style="display: flex; align-items: center;">
       <i class='bx bxs-star'></i>
       <p class="feature__percent">97%</p>
     </div>
     </div>
     <div style="display: flex;">
       <p class="feature__category" id="feature__category">${movies[i].categories},</p>
     </div>
     <button class="feature__item-btn feature__btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal('${movies[i].imdbId}')">See more <i class='bx bxs-chevron-right'></i></button>
     <button class="feature__heart-btn" id="heart__btn" onclick="AddHeartModal('${movies[i].imdbId}')">
     <i class='bx bxs-heart' ></i>
   </button>`
   heroListSearch.appendChild(li)
     }
      finputSearch.value =""
   }
 
 }
 
 