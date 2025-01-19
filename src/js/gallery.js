import "./init.js";
// Dokümantasyonda belirtilen import
import iziToast from "izitoast";
// Stil importu
import "izitoast/dist/css/iziToast.min.css";

// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

const form = document.querySelector("#search-form");
const loader = document.querySelector("#loader");
const galleryList = document.querySelector(".gallery-list");
const API_KEY = "48271120-e478f6712aa82518e8481b3a8";
const url = 'https://pixabay.com/api/';
let params = {
  key: '48271120-e478f6712aa82518e8481b3a8',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
const fetchPixabay = async (url,params) => {  
  const response = await axios.get(url, {params});
  return response.data;
}

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  loader.classList.add("loader"); 
  params.q = evt.currentTarget.elements.query.value.trim();
  fetchPixabay(url, params)
  .then(data => {
     if (data.hits.length <= 0) {
       throw new Error(
         'Sorry, there are no images matching your search query. Please try again!'
       );
     }
     const galleryMarkup = data.hits
       .map(
         ({
           webformatURL,
           largeImageURL,
           tags,
           likes,
           views,
           comments,
           downloads,
         }) => {
           return `
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${largeImageURL}">
                 <img src="${webformatURL}"  alt="${tags}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${likes}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${views}</p>
                </li>
                <li class="info-item">
                  <h3>Comments</h3>
                  <p>${comments}</p>
               </li>
               <li class="info-item">
                 <h3>Downloads</h3>
                 <p>${downloads}</p>
               </li>
             </ul>
        </li>`;
         }
       )
       .join('');
     galleryList.innerHTML = galleryMarkup;
     loader.classList.remove('loader');

     let simplo = new SimpleLightbox('.gallery-list a', {
       captionsData: 'alt',
       captionDelay: 250,
     });
     simplo.refresh();
   })

   .catch(error => {
     iziToast.error({
       message: `${error}`,
       position: 'topRight',
     });
     galleryList.innerHTML = '';
     loader.classList.remove('loader');
   });
  form.reset();
});
