import { useState } from 'react';
import Search from './components/Search';
import Gallery from './components/Gallery';
import SearchHistory from './components/SearchHistory';
import './App.css';

function App() {

  const [searchInpt, setSearchInput] = useState('');
  const [searchOutput, setSearchOutput] = useState([]);
  const [prevSearch , setPrevSearch] = useState([]);
  const [historyDisplay , setHistoryDisplay] = useState(false);
  const [searchByHistory, setSearchByHistory] = useState([]);
  
  return (
    <div className="App container">
      <h1>Image Gallery</h1>
      {historyDisplay ?
      <div>
        <SearchHistory prevSearch={prevSearch}
                       setSearchOutput={setSearchOutput} 
                       setPrevSearch={setPrevSearch}
                       searchByHistory = {searchByHistory} 
                       setSearchByHistory = {setSearchByHistory}
                       searchInpt ={searchInpt}
        />

      </div>
      :
        <div>
          <Search setSearchInput={setSearchInput}
                  searchInpt={searchInpt}
                  setSearchOutput={setSearchOutput}
                  searchOutput={searchOutput}
                  prevSearch={prevSearch}
                  setPrevSearch={setPrevSearch}
                  setHistoryDisplay={setHistoryDisplay}
          />
          <Gallery searchOutput={searchOutput} 
                   prevSearch = {prevSearch} 
          />  
        </div>
      }
    </div>
  );
}

export default App;
