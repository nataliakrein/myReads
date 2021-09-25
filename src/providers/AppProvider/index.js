import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Shelf, SearchBooks } from '../../components'
import { useBooks } from '../../hooks';
import ReactLoading from 'react-loading';

export const AppProvider = () => {
    const { isLoading, currentlyReading, wantToRead, read } = useBooks()

    return isLoading ? (
        <ReactLoading 
            type={'spin'} 
            color={'var(--primary-color)'} 
            height={50} 
            width={50} 
            className='loading'/>
    ) : (
    <Switch>
        <Route exact path='/'>
            <Shelf title="Currently Reading" books={currentlyReading} />
        </Route>
        <Route path='/wanttoread'>
            <Shelf title="Want to Read" books={wantToRead}/>
        </Route>
        <Route path='/read'>
            <Shelf title="Read" books={read} />
        </Route>
        <Route path='/searchbooks'>
            <SearchBooks/>
        </Route>
        <Route>
            <Redirect to="/" />
        </Route>
    </Switch>
    )
}