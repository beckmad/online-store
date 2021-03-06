module.exports = {
    path: '/books',
    method: 'GET',
    delay: 400,
    cache: false,
    template: [
        {
            test: (params, query, body, cookies, headers) => ({params, query, body, cookies, headers}),
            qwe: 1,
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
}
