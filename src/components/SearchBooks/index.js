import React, { Component, useEffect, useState} from 'react'
import * as API from '../../BooksAPI'
import { BookCard } from '..';
import './style.css'
//import { useBooks } from '../../hooks';
import { KeyWords } from '../../KeyWords';
import Select from 'react-select';

export const SearchBooks = ({}) => {
    const [value, setValue] = useState('');
    const [searchingBooks, setsearchingBooks] = useState([]);
    const [selectedOption, setSelectedOption] = useState({});
    //const { books } = useBooks()

    //const selectedBooksTitle = books.map(book => (book.title))
    //console.log(selectedBooksTitle)
    
    /*const selectedBooks = [currentlyReading, wantToRead, read].reduce(
        function(acumulator, currentValue) {
          return acumulator.concat(currentValue)
        },
        []
    )*/
        //remover os books do useBooks
    //const selectedBooksTitle = selectedBooks.map(selectedBook => (selectedBook.title))

    /*const handleChange = (e) => {
        setValue(e.target.value);
        API.searchBooks(e.target.value).then(e => {
            if (Array.isArray(e)) {
                const searchingBooks = e.map(searchingBook => {
                    return {
                        id: searchingBook.id,
                        title: searchingBook.title,
                        authors: searchingBook.authors || [],
                        image: {
                            src: searchingBook.imageLinks && searchingBook.imageLinks.thumbnail,
                            alt: searchingBook.subtitle
                        },
                        shelf: searchingBook.shelf
                    }
                })
                setsearchingBooks(searchingBooks);
                
            }
        })
    };*/

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        API.searchBooks(selectedOption.value).then((books) => {
            setsearchingBooks(books.map(searchingBook => {
                    return {
                        id: searchingBook.id,
                        title: searchingBook.title,
                        authors: searchingBook.authors || [],
                        image: {
                            src: searchingBook.imageLinks && searchingBook.imageLinks.thumbnail,
                            alt: searchingBook.subtitle
                        },
                        shelf: searchingBook.shelf
                    }
                }))
                
        })
      };


    return (
        <section className="search-books">
            <div className="search-books_input-div">
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={KeyWords}
            />
                {/*<label className="search-books_label" for="search">Search other books</label>
                <input list="search" className="search-books_input" 
                    name="search" 
                    type="search" 
                    value={value} 
                    onChange={handleChange}
                    />
                    <datalist id="search">
                        {KeyWords.map((keyword, key) => <option key={key} value={keyword}>{keyword}</option>)}
                    </datalist>
                <span class="search-books_input-focus"></span>*/}
            </div>
            <div className="search-books_div-list">
                <div className="search-books_div-row">
                {searchingBooks.map((searchingBook) => {
                        return <div className="search-books_div-col" key={searchingBook.id}>
                            <BookCard title={searchingBook.title}
                                image={{ src: searchingBook.image.src, alt: searchingBook.image.alt }}
                                authors={searchingBook.authors}
                                shelf={searchingBook.shelf}
                                id={searchingBook.id}
                            />
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}