import {sleep} from "./utils";

export default class BookstoreService {
    #data = [
        {
            id: 1,
            title: 'Роковые яйца',
            author: 'Булгаков М. A.',
            price: 100,
            coverImage: 'https://cdn1.ozone.ru/s3/multimedia-e/wc1200/6012263090.jpg'
        },
        {
            id: 2,
            title: 'Грокаем алгоритмы',
            author: 'Бхаргава Адитья',
            price: 500,
            coverImage: 'https://cdn1.ozone.ru/multimedia/wc1200/1037901676.jpg'
        },
        {
            id: 3,
            title: 'Вы не знаете JS: Область видимости и замыкания',
            author: 'Kyle Simpson',
            price: 0,
            coverImage: 'https://github.com/azat-io/you-dont-know-js-ru/raw/master/scope%20%26%20closures/cover.jpg'
        }
    ]

    async getBooks() {
        await sleep(400);

        return this.#data;
    }
}
