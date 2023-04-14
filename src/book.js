// BOOK
const book = {
    _id: "642fd89ac8cf5ee957f12361",
    list_name: "Middle Grade Paperback Monthly",
    date: "2023-04-07T08:46:57.000Z",
    age_group: "",
    amazon_product_url: "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
    article_chapter_link: "",
    author: "Barbara O'Connor",
    book_image: "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: "",
    book_uri: "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
    contributor: "by Barbara O'Connor",
    created_date: "2023-04-05 23:10:17",
    contributor_note: "",
    description: "",
    first_chapter_link: "",
    price: "0.00",
    primary_isbn10: "1250144051",
    primary_isbn13: "9781250144058",
    publisher: "Square Fish",
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: "",
    title: "WISH",
    updated_date: "2023-04-05 23:10:17",
    weeks_on_list: 0,
    buy_links: [
        {
            name: "Amazon",
            url: "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
        },
        {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
        },
        {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
        },
        {
            name: "Books-A-Million",
            url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
        },
        {
            name: "Bookshop",
            url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
        },
        {
            name: "IndieBound",
            url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
        }]
};


// OPEN/CLOSE MODAL

const openModal = document.querySelector(`[data-modal-open]`);
const closeModalBtn = document.querySelector(`[data-modal-close]`);
const modal = document.querySelector(`[data-modal]`);
const div = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');


openModal.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-hidden");
}

// document.addEventListener('click', (event) => {
//    const withinBoundaries = event.composedPath().includes(div);
// 	if ( !withinBoundaries ) {
//         div.style.display = 'none';
// 	}
// })

// backdrop.addEventListener('click', () => {
//     if(modal)
// });
// document.activeElement('keydown', closeModal);

// function closeModal() {
//     if (!modal) {
//         modal.classList.add("is-hidden");
//     }
// }

  
//  SWITCH BUTTON

const btn = document.querySelector('#add');
const congratMessage = document.querySelector('.under-btn-text');
congratMessage.hidden = true;

btn.addEventListener('click', function() {
    btn.textContent = (btn.textContent === 'ADD TO SHOPPING LIST' ? ('REMUVE FROM SHOPPING LIST') : 'ADD TO SHOPPING LIST');
    if (btn.textContent === 'ADD TO SHOPPING LIST') {
       congratMessage.hidden = true; 
    } else {
        congratMessage.hidden = false;
    }  
})

// RENDER MODAL MARKUP

const murkupConteiner = document.querySelector('.book');
murkupConteiner.insertAdjacentHTML(`beforeend`, createModalMarcup(book));

function createModalMarcup(book) {
    if (book) {
        return `<div class="book">
                   <img class="book-image" src="${book.book_image}" alt="обкладинка" width = "200px">
                   <div class = "modal-text-content">
                       <h2 class="book_title">${book.title}</h2>
                       <h3 class="book_author">${book.author}</h3>
                       <p class="book_reviev">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas perspiciatis repellendus
                           hic praesentium, culpa quos ratione porro sunt ad blanditiis ab autem cupiditate aut placeat similiqquae reiciendis doloremque cumque odio impedit,
                           doloribus odit eligendi deserunt sequi ducimus molestiae optio eaque commodi suscipit ullam fugiat asperiores ratione
                       </p>
                    </div>
                </div>`;
    }
}

// const markup =  books.map((book) => 
//               `<div class="book">
//                    <img class="book-image" src="${book.book_image}" alt="обкладинка" width = "200px">
//                    <div class = "modal-text-content">
//                        <h2 class="book_title">${book.title}</h2>
//                        <h3 class="book_author">${book.author}</h3>
//                        <p class="book_reviev">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas perspiciatis repellendus
//                            hic praesentium, culpa quos ratione porro sunt ad blanditiis ab autem cupiditate aut placeat similiqquae reiciendis doloremque cumque odio impedit,
//                            doloribus odit eligendi deserunt sequi ducimus molestiae optio eaque commodi suscipit ullam fugiat asperiores ratione
//                        </p>
//                        <ul class="store_list">
//                            <li class="store_item">
//                                <svg></svg>
//                                <a href="" class="store_item_link"></a>
//                            </li>
//                            <li class="store_item">
//                                <svg></svg>
//                                <a href="" class="store_item_link"></a>
//                            </li>
//                            <li class="store_item">
//                                 <svg></svg>
//                                  <a href="" class="store_item_link"></a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>`
// ).join('');
    
// console.log(markup);


// const markupConteiner = document.querySelector('.modal');
// markupConteiner.innerHTML(markup);



// const shoppingBtnAdd = document.querySelector('.modal-button--add-to-shopinglist');
// const shoppingBtnRemove = document.querySelector('.modal-button--remuve-from-shopinglist');
// const btnActive = shoppingBtnAdd.textContent;
// shoppingBtnRemove.classList.add('is-hidden');
// const switchBtn = document.querySelector('.switch-btn');

// shoppingBtnAdd.addEventListener('click', switchBtnAdd);
// shoppingBtnRemove.addEventListener('click', switchBtnRemove);



// function switchBtnAdd() {
//     if (shoppingBtnAdd.textContent === btnActive) {
//         shoppingBtnAdd.classList.add('is-hidden');
//         shoppingBtnRemove.classList.remove('is-hidden');
//         return;
//     } else if (shoppingBtnAdd.textContent !== btnActive) {
//         shoppingBtnAdd.classList.remove('is-hidden');
//         shoppingBtnRemove.classList.add('is-hidden');

//     }
// }

// const addBookToShopingList = btnShoping.textContent;
// console.log(addBookToShopingList)

// document.getElementById('add-to-shopinglist').onclick = function() {
//     this.textContent = 'REMOVE FROM THE SHOPPING LIST';
//     if (this.textContent === 'REMOVE FROM THE SHOPPING LIST') {
//         document.getElementById('add-to-shopinglist').onclick = function () {
//            return this.textContent = 'ADD TO SHOPING LIST'
//         }
//     }
// }

// const btnValue = btnShoping.textContent;

// btnShoping.addEventListener('click', switchBTN);
// function switchBTN(){
//     if (btnValue === 'ADD TO SHOPING LIST') {
//         btnShoping.textContent = "REMOVE"
//     } else {
//         btnShoping.textContent = "ADD TO SHOPING LIST"
//     }
// }


// const btnFetchBook = document.querySelector('.fetch-book');
// const bookList = document.querySelector('.book-list');

// btnFetchBook.addEventListener("click", () => {
//     console.log(`hello`);
//     getBook().then().catch(err => console.log(err));
// })

// const BASE_URL = `https://books-backend.p.goit.global`;

// const getBook = () => fetch(`${BASE_URL}/books/category/`).then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
// });


// function renderBooksList(books) {
//     const markup = books.map((book) => {
//         return `<li><p>BookId:${book._id}</p></li>`;
//     }).join("");
//     bookList.innerHTML = markup;
// }

// const bookList = document.querySelector('.list');
// const bookLink = document.querySelector('.book-link');
// const body = document.querySelector('body');
// const modal = document.querySelector('.modal');
// const popupLincs = document.querySelectorAll('.popup-link');

// console.log(bookLink);

