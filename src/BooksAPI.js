const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: window.token
}

export function getBook(bookId) {
  return (
    fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)
  )
}

export function getMyBooks() {
  return (
    fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)
  )
}

export function updateBook(book, shelf, reject) {
  return (
    fetch(`${api}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shelf })
    }).then(res => res.json())
      .catch(reject)
  )
}

export function searchBooks(query, reject) {
  return (
    fetch(`${api}/search`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    }).then(res => res.json())
      .then(data => data.books)
      .catch(reject)
  )
}