import React from 'react'
import { createContext } from 'react'

export const BooksContext = createContext({ 
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
})
