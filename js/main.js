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




// ================== feature slider list ===============

let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right')
let itemCard = document.querySelectorAll('#featurelist li')

let idx =0;
let result;
let itemLength= itemCard.length

function featureSlider() {
    if(idx > itemCard.length-4){
        idx = 0;
    }
    else if(idx < 0) {
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

  for(let i=0; i<=200; i++) {
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
              <img class="offcanvas__img" src="${item.youtubePoster}" alt="img">
          
              <div style="display:flex;">
              <h3 class="offcanvas__title">"${item.title}"</h3>
              <button class="offcanvas__btn" onclick="removeItemModal('${item.imdbId}')">
              <i class='bx bx-trash'></i></button></div>
            `
            offcanvas__list.appendChild(offcanvasItem)
          })
}



// ===================remove item offcanvas=============

// console.log(offcanvas__list);
// function removeItemModal (e) {

//   let removeArr=[];

//     // offcanvas__list.innerHTML ="";
//     heartArr.forEach((el,i)=>{
//       console.log(i);
//           if(el.imdbId == e) {
//             heartArr[e].remove
//             // heartArr.remove(el)

//           }
//       })

//   // heartArr = removeArr;
//   AddHeartModal()
// }




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








