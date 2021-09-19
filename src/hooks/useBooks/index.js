import { useContext } from 'react';
import { BooksContext } from '../../contexts';

export const useBooks = () => useContext(BooksContext) 
