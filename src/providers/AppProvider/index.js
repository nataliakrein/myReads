import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Shelf, SearchBooks } from '../../components'
import { useBooks } from '../../hooks';

export const AppProvider = () => {
    const { currentlyReading, wantToRead, read } = useBooks()

    return (
    <Switch>
        <Route exact path='/'>
            <Shelf title="Tô lendo" books={currentlyReading} />
        </Route>
        <Route path='/wanttoread'>
            <Shelf title="Quero ler" books={wantToRead}/>
        </Route>
        <Route path='/read'>
            <Shelf title="Já li" books={read} />
        </Route>
        <Route path='/searchbooks'>
            <SearchBooks/>
        </Route>
    </Switch>
    )
}