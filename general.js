const axios = require('axios');

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get("http://localhost:5000/");
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

// Get book by ISBN (Promises)
function getBookByISBN(isbn) {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}

// Get books by Author
async function getBookByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

// Get books by Title
async function getBookByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};