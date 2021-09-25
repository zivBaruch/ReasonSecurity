
import getImagesByUserSearch from '../API/Utils';

const Search = ({setSearchInput , setSearchOutput, searchOutput, setPrevSearch, prevSearch, searchInpt, setHistoryDisplay, setPixabayPage}) =>{

    const handleSearchInput = async (userInput) => {
        if(userInput !== ''){
            const resp = await getImagesByUserSearch(userInput,'1');
            setSearchInput(userInput);
            setSearchOutput(resp);
            setPixabayPage(1);
        }else{
            setSearchOutput('');
        } 
    } 

    const saveResults = () => {
        setPrevSearch([...prevSearch,{'search': searchInpt, 'results': searchOutput, 'selected': false}]);
    }

    return(   
        <div>
            <span> Search: </span> <input type='text' placeholder='search for images' onChange={(e) => handleSearchInput(e.target.value)}></input>
            {searchOutput.length > 0 &&  <button onClick={() => saveResults()}>Save results</button> }
            {prevSearch.length > 0 &&  <button onClick={() => setHistoryDisplay(true)}>Search history</button>}
        </div>
    )
}

export default Search;