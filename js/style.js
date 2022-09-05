const imageGrid = document.querySelector(".image-grid");
const links = imageGrid.querySelectorAll("a");
const imgs = imageGrid.querySelectorAll("img");
const lightboxModal = document.getElementById("lightbox-modal");
const bsModal = new bootstrap.Modal(lightboxModal);
const modalBody = document.querySelector(".modal-body .container-fluid");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const currentImg = link.querySelector("img");
    const lightboxCarousel = document.getElementById("lightboxCarousel");
    if (lightboxCarousel) {
      const parentCol = link.parentElement.parentElement;
      const index = [...parentCol.parentElement.children].indexOf(parentCol);
      const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
      bsCarousel.to(index);
    } else {
      createCarousel(currentImg);
    }
    bsModal.show();
  });
}

function createCarousel(img) {
  const markup = `
    <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
      <div class="carousel-inner">
        ${createSlides(img)}
      </div> 
      <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;

  modalBody.innerHTML = markup;
}

function createSlides(img) {
  let markup = "";
  const currentImgSrc = img.getAttribute("src");

  for (const img of imgs) {
    const imgSrc = img.getAttribute("src");
    const imgAlt = img.getAttribute("alt");
    const imgCaption = img.getAttribute("data-caption");

    markup += `
    <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
      <img src=${imgSrc} alt=${imgAlt}>
      ${imgCaption ? createCaption(imgCaption) : ""}
    </div>
    `;
  }

  return markup;
}

function createCaption(caption) {
  return `<div class="carousel-caption">
     <p class="m-0">${caption}</p>
    </div>`;
}
const articles = [];
const avatar = document.getElementById('img');
const authorContainer = document.getElementById('author');
const jobContainer = document.getElementById('job');
const infoContainer = document.getElementById('info');

function setArticle({ imgSrc, author, job, info }) {
  avatar.src = imgSrc
  avatar.title = author.toUpperCase()
  authorContainer.textContent = author
  jobContainer.textContent = job
  infoContainer.textContent = info
}

function Article(imgSrc, author, job, info) {
  this.imgSrc = imgSrc;
  this.author = author;
  this.job = job;
  this.info = info;
}

articles.push(new Article(
  '../img/Satyanarayan_sen_.jpg',
  'Satyanarayan Sen',
  'Food Vloger',
  'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
));

articles.push(new Article(
  '../img/k. krishna.jpg',
  'Krishna Das Adhikary',
  'Food Lover',
  'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
));

articles.push(new Article(
  '../img/chinamy.jpg',
  'Chinmay Mukhi',
  'Biriyani Lover',
  'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
));

articles.push(new Article(
  '../img/guddu.jpg',
  'Prasanjit Behera',
  'Food bloger',
  'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
));

let curArticle = 0;

const [leftArrow, rightArrow] = document.getElementsByClassName('arrow-btn');

const showCurArticle = () => setArticle(articles[curArticle])

leftArrow.addEventListener('click', () => {
  const prevArticle = curArticle - 1;
  curArticle  = prevArticle >= 0 ? prevArticle : articles.length - 1;
  showCurArticle()
})

rightArrow.addEventListener('click', () => {
  const nextArticle = curArticle + 1;
  curArticle  = nextArticle < articles.length ? nextArticle : 0;
  showCurArticle()
})

document.getElementsByClassName('surprise-btn')[0]
  .addEventListener('click', () => {
    let newArticle = getRandomInt(articles.length, curArticle)
    curArticle =  newArticle
    showCurArticle()
  })

function getRandomInt(max, notEqual) {
  let random =  Math.floor(Math.random() * max)
  return random !== notEqual ? random : getRandomInt(max, notEqual)
}

window.addEventListener('load', () => showCurArticle())



