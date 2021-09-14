import React, { Component, useState} from 'react'
import * as API from '../../BooksAPI'
import { BookCard } from '..';
import './style.css'

export const SearchBooks = ({}) => {
    const [value, setValue] = useState('');
    const [books, setBooks] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
        API.searchBooks(e.target.value).then(e => {
            if (Array.isArray(e)) {
                const books = e.map(book => {
                    return {
                        id: book.id,
                        title: book.title,
                        authors: book.authors || [],
                        image: {
                            src: book.imageLinks && book.imageLinks.thumbnail,
                            alt: book.subtitle
                        },
                        shelf: book.shelf
                    }
                })
                setBooks(books)
            }
        })
    };
    
    return (
        <section className="search-books">
            <div className="search-books_input-div">
            <label className="search-books_label" for="search">Search other books</label>
                <input className="search-books_input" 
                    id="search"
                    name="search" 
                    type="search" 
                    value={value} 
                    onChange={handleChange}/>
                <span class="search-books_input-focus"></span>
            </div>
            <div className="search-books_div-list">
                <div className="search-books_div-row">
                    {books.map((book) => {
                        return <div className="search-books_div-col" key={book.id}>
                            <BookCard title={book.title}
                                image={{ src: book.image.src, alt: book.image.alt }}
                                authors={book.authors}
                                shelf={book.shelf}
                                id={book.id}
                            />
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}