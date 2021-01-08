export default class BookstoreService {
    async getBooks() {
        const response = await fetch('http://localhost:4000/books');

        return response.json();
    }
}
