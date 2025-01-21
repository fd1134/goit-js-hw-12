import './js/init';
// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

// Kullanılacak kısmın import edilmesi
import SimpleLightbox from 'simplelightbox';
// Ek stillerin eklenmesi
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
 let simplo = new SimpleLightbox('.gallery-list a', {
   captionsData: 'alt',
   captionDelay: 250,
 });

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader');
const btnLoadMore = document.querySelector('#load-more');
const galleryList = document.querySelector('.gallery-list');
const API_KEY = '48271120-e478f6712aa82518e8481b3a8';
let totalPage = 0;
let params = {
  key: '48271120-e478f6712aa82518e8481b3a8',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page:20
};
btnLoadMore.classList.add('pasif');
form.addEventListener('submit', async evt => {
  evt.preventDefault();
  loader.classList.add('loader');
  params.q = evt.currentTarget.elements.query.value.trim();
  params.page = 1;

  try {
    const data = await fetchPixabay(params);
    if (data.hits.length <= 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    totalPage = Math.ceil(data.totalHits  / params.per_page);
    
    if (totalPage > params.page) {
       params.page += 1;
       btnLoadMore.classList.remove('pasif');
    }
   
    
    const galleryMarkup = markup(data.hits);
    galleryList.innerHTML = galleryMarkup;
    loader.classList.remove('loader');
   
    simplo.refresh();
  } catch (error) {
    iziToast.error({
      message: `${error}`,
      position: 'topRight',
    });
    galleryList.innerHTML = '';
    loader.classList.remove('loader');
  }

  form.reset();
});
btnLoadMore.addEventListener("click",async () => {
  
  try {
    const data = await fetchPixabay(params);
    const galleryMarkup = markup(data.hits);
    galleryList.insertAdjacentHTML("beforeend",galleryMarkup)
    // galleryList.innerHTML += galleryMarkup;
    simplo.refresh();
    params.page += 1;
    if (totalPage < params.page) {
       btnLoadMore.classList.add("pasif");
        throw new Error(
          "We're sorry, but you've reached the end of search results"
        );
      }
    
   window.scrollBy(0, 2 * cardHeight());
    
  } catch (error) {
    iziToast.info({
      position: 'topRight',
      message: `${error}`,
    });
  }
  
  
});
const fetchPixabay = async params => {
  const response = await axios.get('/', { params });
  return response.data;
};
const markup = data => {
  return data
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
};

const cardHeight = () => {
  let elem = document.querySelector('.card');
  let rect = elem.getBoundingClientRect();
  let height = rect.height;
  return height;
};