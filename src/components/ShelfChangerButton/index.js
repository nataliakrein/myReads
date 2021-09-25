import React, { useState} from 'react'
import './style.css'
import { useBooks } from '../../hooks'

export const ShelfChangerButton = ({ book, name, value }) => {
	console.log(book)
    const { updateList } = useBooks()
    const titleBook = JSON.stringify(name)
    const [optionsShelf] = useState([
		{
			nameShelf: "Move to...",
			valueShelf: null,
		},
		{
			nameShelf: "Currently Reading",
			valueShelf: "currentlyReading",
		},
		{
			nameShelf: "Want to Read",
			valueShelf: "wantToRead",
		},
		{
			nameShelf: "Read",
			valueShelf: "read",
		},
		{
			nameShelf: "Remove from Shelf",
			valueShelf: "none"
		},
	]);
    
    const handlerChangeSelect = (e) => {
        e.preventDefault()
        updateList(book,  e.target.value)
        alert('The book ' + titleBook +' has been moved')
    }

      return (
        <div className="shelf-changer">
        <select className="shelf-changer_button" value={value} onChange={handlerChangeSelect}>
            {optionsShelf.map((option, key) => {
                if(option.valueShelf !== book.shelf){
                    return <option value={option.valueShelf} key={key}>{option.nameShelf}</option>
                }
            })
            }
        </select>
    </div>
    ) 
}