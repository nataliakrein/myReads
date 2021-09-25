import React, { useState } from 'react'
import * as API from '../../BooksAPI'
import { BookCard } from '..';
import './style.css'
import { KeyWords } from '../../KeyWords';
import Select from 'react-select';
import ReactLoading from 'react-loading';
import { useBooks } from '../../hooks';


export const SearchBooks = () => {
    const [searchingBooks, setSearchingBooks] = useState([]);
    const [selectedOption, setSelectedOption] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const {books} = useBooks()

   const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        setIsLoading(true)
        API.searchBooks(selectedOption.value).then((search) => {
            const searchingBooks = (search.map(searchingBook => {
                    return {
                        id: searchingBook.id,
                        title: searchingBook.title,
                        authors: searchingBook.authors || [],
                        image: {
                            src: searchingBook.imageLinks && searchingBook.imageLinks.thumbnail,
                            alt: searchingBook.subtitle
                        },
                        shelf: books.find(bk => bk.id === searchingBook.id) ? books[(books.indexOf(books.find(bk => bk.id === searchingBook.id)))].shelf : 'none', 
                    }
                })) 
                setIsLoading(false)
                setSearchingBooks(searchingBooks);
        })
      };

    return (
        <section className="search-books">
            <div className="search-books_input-div">
            <label className="search-books_label">Search other books</label>
            <Select
                value={selectedOption} 
                onChange={handleChange}
                options={KeyWords} 
                theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: 'var(--primary-color)',
                    },
                  })}
            />
            </div>
            <div className="search-books_div-list">
                {isLoading ? 
                    (<ReactLoading 
                        type={'spin'} 
                        color={'var(--primary-color)'} 
                        height={50} 
                        width={50} 
                        className='search-books_loading'/>) : 
                    (<div className="search-books_div-row">
                        {searchingBooks.map((searchingBook) => {
                                return (
                                <div className="search-books_div-col" key={searchingBook.id}>
                                    <BookCard book={searchingBook} title={searchingBook.title}
                                        image={{ src: searchingBook.image.src, alt: searchingBook.image.alt }}
                                        authors={searchingBook.authors}
                                        shelf={searchingBook.shelf} 
                                        id={searchingBook.id} 
                                    />
                                </div>
                                )
                        })}
                    </div>)
                }
            </div>
        </section>
    )
}