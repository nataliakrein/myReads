import { TopNavBar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppProvider, BooksProvider } from './providers';

function App() {

  return (
    <Router>
      <BooksProvider>
        <TopNavBar/>
        <AppProvider/>
      </BooksProvider>
  </Router>
  );
}

export default App;