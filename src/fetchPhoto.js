import axios from "axios";

export class PixabayAPI {
    #BASE_URL = `https://pixabay.com/api/`;
    #API_KEY = `35192963-4124dd642b3fb461106fa319d`;

    #BASE_PARAMS = {
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        per_page: 40,
    }

    get perPage() {
        return this.#BASE_PARAMS.per_page;
    }

    q = null;
    page = 1;
    
    fetchPhotos() {
        return axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&`,{
            params: {
                ...this.#BASE_PARAMS,
                q: this.q,
                page: this.page,
            },
        });
    }
}

// export class PixabayApi{
//     #API_KEY = `35192963-4124dd642b3fb461106fa319d`;
//     #BASE_URL = `https://pixabay.com/api/`;
//     #BASE_PARAMS = {
//         per_page: 40,
//         image_type: 'photo',
//         safesearch: 'true',
//         orientation: 'horizontal',
//         key: this.#API_KEY,
//     };

//     page = 1;
//     query = null;

//     fetchPhoto() {
//         const searchParams = new URLSearchParams({
//             ...this.#BASE_PARAMS,
//             page: this.page,
//             q: this.query,
//         })
//         return fetch(`${this.#BASE_URL}?${searchParams}`).
//     then(res => {
//     if (!res.ok) {
//         throw new Error(res.status);
//     }
//     return res.json();
// })
//     }
// }