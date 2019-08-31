import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

function App() {

  const [results, setResults] = useState([])


  return (
    <div className="App">
      <SearchBar setResults={setResults}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
