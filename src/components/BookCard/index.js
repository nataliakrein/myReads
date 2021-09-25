import React from 'react'
import './style.css'
import { SavedButton, ShelfChangerButton } from '..'
import { useLocation } from 'react-router-dom'


export const BookCard = ({ book, image, title, authors, shelf, id}) => {
    const location = useLocation();
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
               {   
               (location.pathname === '/searchbooks' && shelf !== 'none') ? 
               (<SavedButton/>) 
               : 
               (<ShelfChangerButton book={book} name={title} value={shelf}/>)
               }
            </div>
        </div>
    )
}
