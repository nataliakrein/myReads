import React, { useState } from 'react'
import './style.css'
import { ShelfChangerButton } from '..'

export const BookCard = ({image, title, authors, shelf, id}) => {
    return (
        <div className="book-card">
            <div className="book-card_data">
                <div className="book-card_img">
                    <img src={image.src} alt={image.alt} />
                </div>
                <div className="book-card_info">
                    <p className="book-card_title">{title}</p>
                    <ul className="book-card_authors">
                        {authors.map( (author, index) => {
                            return <li key={index}>{author}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="book-card_button">
                <ShelfChangerButton name={title} value={shelf} bookId={id}/>
            </div>
        </div>
    )
}
