import Notiflix from "notiflix";
import { PixabayAPI } from "./fetchPhoto";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryLightBox = new SimpleLightbox(`.gallery a`);
const pixabayAPI = new PixabayAPI();

const perPage = pixabayAPI.perPage;

const formEl = document.querySelector(`#search-form`);
const galleryEl = document.querySelector(`.gallery`);
const loadMoreBtbEl = document.querySelector(`.load-more`);
loadMoreBtbEl.classList.add('is-hiden');


formEl.addEventListener(`submit`, handleSearchPhotos);
loadMoreBtbEl.addEventListener(`click`, handleLoadMore);

async function handleSearchPhotos(e) {
    e.preventDefault();

    pixabayAPI.q = e.target.elements.searchQuery.value.trim();

    if (!pixabayAPI.q) {
        loadMoreBtbEl.classList.add("is-hiden");
        Notiflix.Notify.warning(`The field cannot be empty. Please enter a search query`);
        return;
    }
        pixabayAPI.page = 1;

    try {
        const { data } = await pixabayAPI.fetchPhotos();         
        const totalPage = Math.ceil(data.totalHits / perPage);
        if (!data.hits.length) {
            galleryEl.innerHTML = '';
            throw new Error()

        } else if (totalPage === pixabayAPI.page) {
            galleryEl.innerHTML = createGalleryMarckup(data.hits);
            galleryLightBox.refresh();
            loadMoreBtbEl.classList.add("is-hiden");
            return
        }
    
        galleryEl.innerHTML = createGalleryMarckup(data.hits);
        loadMoreBtbEl.classList.remove("is-hiden");
        galleryLightBox.refresh();
    }

        catch (error) {
        loadMoreBtbEl.classList.add("is-hiden");
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again`);
    };
}

async function handleLoadMore(e) {

    pixabayAPI.page += 1;

    try {
        const { data } = await pixabayAPI.fetchPhotos();
        const totalPage = Math.ceil(data.totalHits / perPage);
        if (totalPage === pixabayAPI.page) {
                galleryEl.insertAdjacentHTML(`beforeend`, createGalleryMarckup(data.hits));
                loadMoreBtbEl.classList.add("is-hiden");
                throw new Error();
            }
        
        galleryEl.insertAdjacentHTML(`beforeend`, createGalleryMarckup(data.hits));
        galleryLightBox.refresh();
        
        } catch (error) {
        loadMoreBtbEl.classList.add("is-hiden");
        Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results`);
    }
}

function createGalleryMarckup(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <div class="photo-card">
            <a class = "gallery-link" href = "${largeImageURL}">
            <div class = "img-container">
                <img src="${webformatURL}" alt="${tags}" class = "img-card" loading="lazy" width = ""300px/>
                </div>
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes: ${likes}</b>
                    </p>
                    <p class="info-item">
                        <b>Views: ${views}</b>
                    </p>
                    <p class="info-item">
                        <b>Comments: ${comments}</b>
                    </p>
                    <p class="info-item">
                        <b>Downloads: ${downloads}</b>
                    </p>
                </div>
            </div>`;
    }).join(''); 
} 





// import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import { PixabayApi } from './fetchPhoto';
// import axios from "axios";
// import "simplelightbox/dist/simple-lightbox.min.css";


// const formEl = document.querySelector('#search-form');
// const searchInputEl = document.querySelector('input[name="searchQuery"]');
// const galleryEl = document.querySelector('.gallery');
// const loadMoreBtnEl = document.querySelector('.load-more');
// loadMoreBtnEl.classList.add('is-hidden');

// const pixabayApi = new PixabayApi();
// const lightBox = new SimpleLightbox(`.gallery a`);

// const perPage = pixabayApi.perPage;


// formEl.addEventListener(`submit`, handleSearchPhotos);
// loadMoreBtnEl.addEventListener(`click`, handleLoadMoreEls);

//     async function handleSearchPhotos(e) {
//         e.preventDefault();
//         pixabayApi.page = 1;

//         const searchQuery = searchInputEl.value.trim();
//         pixabayApi.query = searchQuery;

//         if (!pixabayApi.query.langth) {
//             Notiflix.Notify.warning(`The field cannot be empty. Please enter a search query`);
//             return;
//         }
//     }

// async function handleSearchForm(event) {
//     event.preventDefault();
//     pixabayApi.page = 1;
//     const searchQuery = searchInputEl.value.trim();
//     pixabayApi.query = searchQuery;

//     if (!pixabayApi.query.length) {
//             Notiflix.Notify.warning(`The field cannot be empty. Please enter a search query`);
//             return;
//     }

//     pixabayApi.fetchPhoto().then((data) => {
//         console.log(data);
//         galleryEl.insertAdjacentHTML('beforeend', createGalleryMarckup(data.hits));
//         loadMoreBtnEl.classList.remove('is-hidden');
//     }).catch((error) => {
//         loadMoreBtnEl.classList.add('is-hidden');
//         Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again`);
//     });
// } 

// formEl.addEventListener('submit', handleSearchForm);


// async function handleLoadMoreCards() {
//     pixabayApi.page += 1;
//     pixabayApi.fetchPhoto()
//         .then(data => {
//             if (pixabayApi.pagr === data.total_pages) {
//             loadMoreBtnEl.classList.add('is-hidden');
//             }
//             // что бы переписаь а не добавить нужно innerHTML вместо Insert
//             galleryEl.insertAdjacentHTML('beforeend',
//                 createGalleryMarckup(data.hits));  
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//             loadMoreBtnEl.classList.add('is-hidden');
//         });
// };

// loadMoreBtnEl.addEventListener('click', handleLoadMoreCards);

// function createGalleryMarckup(images) {
//     return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//         return `
//             <div class="photo-card">
//             <a class = "gallery-link" href = "${largeImageURL}">
//             <div class = "img-container">
//                 <img src="${webformatURL}" alt="${tags}" class = "img-card" loading="lazy" width = ""300px/>
//                 </div>
//                 </a>
//                 <div class="info">
//                     <p class="info-item">
//                         <b>Likes: ${likes}</b>
//                     </p>
//                     <p class="info-item">
//                         <b>Views: ${views}</b>
//                     </p>
//                     <p class="info-item">
//                         <b>Comments: ${comments}</b>
//                     </p>
//                     <p class="info-item">
//                         <b>Downloads: ${downloads}</b>
//                     </p>
//                 </div>
//             </div>`;
//     }).join(''); 
// }
 









