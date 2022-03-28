let moviesList= document.querySelector('#featurelist')
let modalHeart = document.querySelector('#exampleModal')
let seeMoadlBtn = document.querySelectorAll('.feature__item-btn')


// ==================feature list write===============

for (let i=0; i<=10; i++) {
    let li = document.createElement('li');
    li.className="feature__item";
    li.innerHTML =`

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
  </button>
    
  `
    moviesList.appendChild(li)
}







// ================== slider list ===============

let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right')
let itemCard = document.querySelectorAll('#featurelist li')

let idx =0;

function featureSlider() {
    if(idx > itemCard.length-4){
        idx = 0;
    }
    else if(idx < 0){
        idx = itemCard-4
    }
    moviesList.style.transform =`translateX(${-idx*320}px)`
}

rightBtn.addEventListener('click', ()=> {
    idx++;
    resetInter();
    featureSlider();
})
leftBtn.addEventListener('click', ()=> {
    idx--;
    resetInter();
    featureSlider();
})

let interval = setInterval(run, 3000);

function run() {
    idx++;
    featureSlider();
}
function resetInter() {
    clearInterval(interval);
    interval = setInterval(run, 3000)
}

//=========== hero slider==============
 
let herobtn1 = document.querySelector('#herobtn1')
let herobtn2 = document.querySelector('#herobtn2')
let herobtn3 = document.querySelector('#herobtn3')
let herobtn4 = document.querySelector('#herobtn4')
let herobtn5 = document.querySelector('#herobtn5')

let moviesGrandfather = document.querySelectorAll('#moviesGrandfather li')
let moviesParent = document.querySelector('#moviesGrandfather')

let herodx =0;

function heroSlider() {
    if(herodx > moviesGrandfather.length-1){
        herodx = 0;
    }
    else if(herodx < 0){
        herodx = moviesGrandfather-1
    }
    moviesParent.style.transform =`translateY(${-herodx*600}px)`
}

herobtn1.addEventListener('click', ()=> {
    herodx++;
    heroInter();
    heroSlider();
})
herobtn2.addEventListener('click', ()=> {
    herodx++;
    heroInter();
    heroSlider();
})
herobtn3.addEventListener('click', ()=>{
  herodx++;
  heroInter();
  heroSlider();
})

herobtn4.addEventListener('click', ()=>{
  herodx++;
  heroInter();
  heroSlider();
})
herobtn5.addEventListener('click', ()=>{
  herodx++;
  heroInter();
  heroSlider();
})

let herointerval = setInterval(heroRun, 3000);

function heroRun() {
    herodx++;
    heroSlider();
}
function heroInter() {
    clearInterval(herointerval);
    herointerval = setInterval(heroRun, 3000)
}


// ============= modal heart offcanvas +++++===

let ofcanvasModal = document.querySelector('#ofcanvasmodal')
let heartBtn = document.querySelectorAll('.feature__heart-btn');
let offcanvas__list = document.querySelector('#offcanvas__list')



heartBtn.forEach(heartBtn => heartBtn.addEventListener('click', (e) =>{
  e.target.style.color= 'red';
}
))



let heartArr=[]



function AddHeartModal (e) {

  for(let i=0; i<=10; i++) {
      if(movies[i].imdbId==e) {
        let b = movies[i];    
        heartArr.push(b)

      }
    }
    offcanvas__list.innerHTML =''

    heartArr.forEach(item => {

    let offcanvasItem = document.createElement('li');
    offcanvasItem.className = 'offcanvas__item';

    offcanvasItem.innerHTML = `
              <li class="offcanvas__item">
              <img class="offcanvas__img" src="${item.youtubePoster}" alt="img">
          
              <div style="display:flex;">
              <h3 class="offcanvas__title">"${item.title}"</h3>
              <button class="offcanvas__btn" onclick="removeItemModal('${item.imdbId}')">
              <i class='bx bx-trash'></i></button></div>
        
              </li>
            `
            offcanvas__list.appendChild(offcanvasItem)
          })
}

function removeItemModal (e) {

  let removeArr=[];

  if (confirm("Are you sure you want to delete it? "))
  {
    offcanvas__list.innerHTML ="";
    heartArr.forEach((el)=>{
          if(movies[i].imdbId!==e) {
            offcanvas__list.remove(el)
          }
      })

  }
  heartArr = removeArr;
}











// ============= modal see more ===================
let modalbody= document.querySelector('#modalbody')


function openModal(e) {
  for(let i=0; i<=10; i++) {
    if(movies[i].imdbId==e) {
      let a = movies[i];
      
    modalbody.innerHTML = `

    <div class="more" style="display: flex;">
    <img class="more__img" src="${a.youtubePoster}" style ="margin: 0 40px 0;" alt="img">
    <div>
      <h2 class="more__title">
        ${a.title}
      </h2>
      <p class="more__desc">${a.summary}
      </p>
      <div style="display: flex; justify-content: space-between;align-items: center;">
        <div style="display: flex; margin: 0; align-items: center;">
          <p class="feature__country"  style=" margin: 0; ">USA</p>
          <p class="feature__year feature__country" style=" margin: 0; ">${a.year}</p>
        </div>
        <div style="display: flex; align-items: center;">
          <i class='bx bxs-star'></i>
        <p class="feature__percent">97%</p>
      </div>
      <div style="display: flex;">
        <p class="feature__category" id="feature__category" style=" margin: 0; ">${a.categories} </p>
      </div></div>

    </div>
  </div>`
  }
}
}











// ============= video section ===================

let videoList = document.querySelector('#videolist')

for (let k=12; k<=22; k++) {
  let li = document.createElement('li');
  li.className="video__item";
  li.innerHTML =`

  <img class="video__img" src="${movies[k].youtubePoster}" alt="img">
  <a class="video__link" href="https://www.youtube.com/${movies[k].youtubeId}"><i class='bx bx-play-circle'></i></a>
  <h3 class="video__title feature__item-title">${movies[k].title}</h3>
  
`
  videoList.appendChild(li)
}


let videoListSlide = document.querySelectorAll('#videolist li')
let videoLeft = document.querySelector('#videoleft')
let videoRight = document.querySelector('#videoright')


let sdx =0;

function videoListSlider() {
    if(sdx > videoListSlide.length-3){
        sdx = 0;
    }
    else if(sdx < 0){
        sdx = videoListSlide-3
    }
    videoList.style.transform =`translateX(${-sdx*400}px)`
}

videoRight.addEventListener('click', ()=> {
    sdx++;
    videoInter();
    videoListSlider();
})
videoLeft.addEventListener('click', ()=> {
    sdx--;
    videoInter();
    videoListSlider();
})

let videoInterval = setInterval(videoRun, 3000);

function videoRun() {
    sdx++;
    videoListSlider();
}
function videoInter() {
    clearInterval(videoInterval);
    videoInterval = setInterval(videoRun, 3000)
}








//============= pagination ===========



  // newMovies= movies.filter((item, index) =>{
  //   if(index>=32 && index<64){
  //     return index
  //   }
  // })
  // allList.innerHTML =''
// for(let i=0; i<newMovies.length; i++) {
//   let li =document.createElement('li');
//   li.className= "feature__item";
//   li.style.margin ="0 20px 20px"
//   li.innerHTML =
//   `
//         <img class="feature__img"src="${movies[i].youtubePoster}" alt="img">
//         <div style="display: flex;">
//           <p class="feature__country">USA</p>
//           <p class="feature__year feature__country">${movies[i].year}</p>
//         </div>

//         <h3 class="feature__item-title" id="title">${movies[i].title}</h3>
//         <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 0 12px 0;">
//           <div style="display: flex; align-items: center;">
//             <img class="feature__img-img" src="images/imd-img.png" alt="img">
//             <p class="feature__number">86/100</p>
//           </div>

//           <div style="display: flex; align-items: center;">
//           <i class='bx bxs-star'></i>
//           <p class="feature__percent">97%</p>
//         </div>
//         </div>
//         <div style="display: flex;">
//           <p class="feature__category" id="feature__category">${movies[i].categories},</p>
//         </div>
//         <button class="feature__item-btn feature__btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal('${movies[i].imdbId}')">See more <i class='bx bxs-chevron-right'></i></button>
//         <button class="feature__heart-btn" id="heart__btn" onclick="AddHeartModal('${movies[i].imdbId}')">
//         <i class='bx bxs-heart' ></i>
//       </button>
//     `
//     allList.appendChild(li)
//     console.log(li);
// }




const list__items = [

  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
  "item 13",
  "item 14",
  "item 15",
  "item 16",
  "item 17",
  "item 18",
  "item 19",
  "item 20",
  "item 21",
  "item 22",
];


const list_element = document.querySelector('#alllist')
const pagination_element= document.querySelector('#paglist')


let current_page =1;
let rows =5;

function displayList (items, wrapper, rows_per_page, page){
  wrapper.innerHTML ="";
  page--;

  let start =rows_per_page *page;
  let end = start +rows_per_page
  let paginatedItems = items.slice(start, end)

  
  for(let i=0; i<paginatedItems.length; i++){
    let item = paginatedItems[i];
    let item_element = document.createElement('li');
    item_element.classList.add('item');
    item_element.innerText = item;

    wrapper.appendChild(item_element)
  }

}


function setupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML ="";


  let page_count = Math.ceil(items.length/rows_per_page)

  for(let i=1; i<page_count+1; i++) {
    let btn = paginationButton(i, items)
    wrapper.appendChild(btn)

  }
}

function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;


  if(current_page ==page) button.classList.add('active');
    button.addEventListener('click', function(){
      current_page=page;
      displayList(items, list_element, rows, current_page);

      let current_btn =document.querySelector('.pag__list button.active');
      current_btn.classList.remove('active')
    
      button.classList.add('active')
    })
    return button
}



displayList(list__items, list_element,rows, current_page )
setupPagination(list__items, pagination_element, rows)













// let allPages = 15

// function elem(allPages, page) {

//   let li ='';

//   let beforePages = page-1;
//   let afterPages = page +1 
//   let liActive;



// if(page >1) {
//     li+= `
//     <li class=" pag__icon  pag__btn" style="border-radius: 50%;" onclick ="elem(allPages, ${page-1})" data-name="prevbtn">
//     <i class='bx bx-chevron-left' ></i>
//   </li>`
// }

// for (let pageLength = beforePages; pageLength<=afterPages; pageLength++){

//     if(pageLength>allPages) {
//       continue;
//     }
//     if(pageLength==0) {
//       pageLength=pageLength+1
//     }
//     if(page==pageLength) {
//       liActive = 'active'
//     }else {
//       liActive = ''
//     }

//   li+= `<li class="pag__numb  ${liActive}" onclick ="elem(allPages, ${pageLength})" data-name="two">
//   <span> ${pageLength}</span>
//  </li>
//   `

// }

//     if(page < allPages) {
//       li += `  <li class="pag__icon  pag__btn" onclick ="elem(allPages, ${page+1})"style="border-radius: 50%;" id="nextbtn" data-name="nextbtn">
//       <i class='bx bx-chevron-right'></i>
//     </li>`
//     }
//   pagList.innerHTML = li
// }
// elem(allPages,2)



// newMovies =[]
// nextBtn =document.querySelector('#nextbtn');

// nextBtn.addEventListener('click', () => {
//   WorkNextBtn();
// })


// function WorkNextBtn () {
  
//   newMovies= movies.filter((item, index) =>{
//     if(index>=32 && index<64){
//       return index
//     }
//   })
//   allList.innerHTML =''
// for(let i=0; i<newMovies.length; i++) {
//   let li =document.createElement('li');
//   li.className= "feature__item";
//   li.style.margin ="0 20px 20px"
//   li.innerHTML =
//   `
//         <img class="feature__img"src="${movies[i].youtubePoster}" alt="img">
//         <div style="display: flex;">
//           <p class="feature__country">USA</p>
//           <p class="feature__year feature__country">${movies[i].year}</p>
//         </div>

//         <h3 class="feature__item-title" id="title">${movies[i].title}</h3>
//         <div style="display: flex; justify-content: space-between; align-items: center; margin: 0 0 12px 0;">
//           <div style="display: flex; align-items: center;">
//             <img class="feature__img-img" src="images/imd-img.png" alt="img">
//             <p class="feature__number">86/100</p>
//           </div>

//           <div style="display: flex; align-items: center;">
//           <i class='bx bxs-star'></i>
//           <p class="feature__percent">97%</p>
//         </div>
//         </div>
//         <div style="display: flex;">
//           <p class="feature__category" id="feature__category">${movies[i].categories},</p>
//         </div>
//         <button class="feature__item-btn feature__btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal('${movies[i].imdbId}')">See more <i class='bx bxs-chevron-right'></i></button>
//         <button class="feature__heart-btn" id="heart__btn" onclick="AddHeartModal('${movies[i].imdbId}')">
//         <i class='bx bxs-heart' ></i>
//       </button>
//     `
//     allList.appendChild(li)
//     console.log(li);
// }

// }









// =====================input search==================

let inputSearch = document.querySelector('#inputsearch')

inputSearch.addEventListener('keyup', filterItems);

function filterItems(e){

  let text = e.target.value.toLowerCase();

  let items =moviesList.getElementsByTagName('li');

  if(text!='') {

    for (let i=0; i<Array.from(items); i++){

        let itemName = items[i].firstElementChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) !=-1) {
          items[i].style.color= 'yellow'
        }else {
          items[i].style.display= 'none'
        }
    }
  }
}

