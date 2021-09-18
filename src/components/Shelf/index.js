import React, { useState, useEffect } from 'react'
import { BookCard } from '..'
import './style.css'
//import ReactLoading from 'react-loading';


export const Shelf = ({title, books}) => {
    /*const [isLoading, setIsLoading] = useState(true)

    const handleLoading = () => {
        setIsLoading(false);
    }
    
    useEffect(()=>{
        window.addEventListener("load",handleLoading);
        return () => window.removeEventListener("load",handleLoading);
    },[])*/

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