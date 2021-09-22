
import SelectBySearchHistory from './SelectBySearchHistory'

const SearchHistory = (props) => {

    return(
        <div className='container'>
            <div>Select one or more to search from your history:</div>
            <br/>
            {   props.prevSearch.length> 0 && props.prevSearch.map((item, index) =>{
                                                                                                   
                    return <span key={index} onClick={() => {props.setSearchByHistory([...props.searchByHistory, {'search': item.search, 'results': item.results}])}} className= 'user-input-search-history'> {item.search} </span>
                }) 
            }
            <div>
                <SelectBySearchHistory  props={props} searchByHistory={props.searchByHistory}/>
            </div>
        </div> 
    )
}

export default SearchHistory;