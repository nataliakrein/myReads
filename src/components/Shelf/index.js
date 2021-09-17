import React from 'react'
import { BookCard } from '..'
import './style.css'

export const Shelf = ({title, books}) => {
    return (
            <div className="shelf_div">
                {books.map((book) => (
                    <div className="shelf_card" key={book.id}>
                        <BookCard title={book.title}
                            image={{ src: book.image.src, alt: book.image.alt }}
                            authors={book.authors}
                            shelf={book.shelf}
                            id={book.id}
                        />
                    </div>
                ))}
            </div>
    )
}