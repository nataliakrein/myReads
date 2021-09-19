import { createContext } from 'react'

export const BooksContext = createContext({ 
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    loading: [],
})
