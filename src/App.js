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
  const [scrolling, setScrolling] = useState(false);
  const [pixabayPage, setPixabayPage] =useState(1);

  
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
                  setPixabayPage = {setPixabayPage}
          />
          <Gallery searchOutput={searchOutput} 
                   prevSearch = {prevSearch} 
                   setScrolling = {setScrolling}
                   scrolling = {scrolling}
                   searchInpt ={searchInpt}
                   searchOutput = {searchOutput}
                   setSearchOutput = {setSearchOutput}
                   setPixabayPage ={setPixabayPage}
                   pixabayPage ={pixabayPage}
          />  
        </div>
      }
    </div>
  );
}

export default App;
