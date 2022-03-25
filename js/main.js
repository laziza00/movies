let moviesList= document.querySelector('#featurelist')
let modalHeart = document.querySelector('#exampleModal')
let seeMoadlBtn = document.querySelectorAll('.feature__item-btn')




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
    <button class="feature__heart-btn" id="heart__btn">
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

let arr =[]
 



// ============= modal  heart+++++===

let heartBtn = document.querySelectorAll('.feature__heart-btn');

heartBtn.forEach(heartBtn => heartBtn.addEventListener('click', (e) =>{
  e.target.style.color= 'red';

}

))
console.log(heartBtn);





// ============= modal see more ===================
let modalbody= document.querySelector('#modalbody')


function openModal(e) {
  for(let i=0; i<=30; i++) {
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

for (let k=0; k<=10; k++) {
  let li = document.createElement('li');
  li.className="video__item";
  li.innerHTML =`

  <img class="video__img" src="${movies[k].youtubePoster}" alt="img">
  <a class="video__link" href="${movies[k].youtubeId}"><i class='bx bx-play-circle'></i></a>
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