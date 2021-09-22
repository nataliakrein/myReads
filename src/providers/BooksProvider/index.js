import React from 'react'
import { useState, useEffect } from 'react'
import { BooksContext } from '../../contexts'
import * as API from '../../BooksAPI'

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //const [searchingBooks, setsearchingBooks] = useState([]); 

    useEffect(() => {
        setIsLoading(true)
		  API.getMyBooks().then(books => {
            setBooks(books.map((book) => {
              return ({
              id: book.id,
              title: book.title,
              authors: book.authors || [],
              image: {
                  src: book.imageLinks && book.imageLinks.thumbnail,
                  alt: book.subtitle
              },
              shelf: book.shelf
            })
            }))
            setIsLoading(false)
            })
	  }, []);

    useEffect(() => {
            setCurrentlyReading(books.filter((book) => book.shelf === 'currentlyReading'));
            setWantToRead(books.filter((book) => book.shelf === 'wantToRead'));
            setRead(books.filter((book) => book.shelf === 'read'));
	  }, [books]);

    const updateList = (book, newShelf) => {
        API.updateBook(book,newShelf).then(() => {
          book.shelf = newShelf
          setBooks(books.filter(b => b.id !== book.id).concat([ book ]))
        })
      }

    return (
        <BooksContext.Provider value={{isLoading, updateList, books, currentlyReading, wantToRead, read}}>
            {children}
        </BooksContext.Provider>
    )
}