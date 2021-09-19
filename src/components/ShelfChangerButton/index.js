import React from 'react'
import './style.css'
import * as API from '../../BooksAPI'

export const ShelfChangerButton = ({ name, value = 'none', bookId}) => {
    const titleBook = JSON.stringify(name)
    const handlerChangeSelect = (e) => {
        API.updateBook({id:bookId}, e.target.value).then(() => {
            window.location.reload();
        })
        alert('The book ' + titleBook +' has been moved')
    };

    const shelves = ['currentlyReading', 'wantToRead', 'read', 'none'];

    const newShelves = shelves.filter((shelf) => shelf !== value);

    const selectShelf = (newShelves) => {
        switch (newShelves) {
        case "currentlyReading":
            return 'Currently Reading';
        case "wantToRead":
            return 'Want to Read';
        case "read":
            return 'Read';
        case "none":
            return 'Remove from shelf';
        default:
            return "Shelf not found";
    }
    }
     
      return (
        <div className="shelf-changer">
        <select className="shelf-changer_button" value={value} onChange={handlerChangeSelect}>
                <option value="none">Move to...</option>
            {
                newShelves.map((item, key) => {
                    if (selectShelf(item)) {
                        return <option value={item} key={key}>{selectShelf(item)}</option>
                    }
                })
            }
        </select>
    </div>
    )
}