import { useState } from "react"
import Card from './Card';

const SelectBySearchHistory = (props) =>{

    const [showSearchHistoryResults, setShowSearchHistoryResults] = useState(false);
    const [operator, setOperator] = useState('');
    
    return(
        <div>
            <br/>
            <div>  </div>
            <br/>
            {props.searchByHistory.length > 0 && props.searchByHistory.map((item,index) => {
                return <span key={index} className= 'user-input-search-history-selected'> {item.search}  </span>
            })
            }
            { props.searchByHistory.length > 0  &&
            <select onChange={(e)=> setOperator(e.target.value)}>
                <option style={{display:'none'}}>Select operator</option>
                <option value='1'>OR</option>
                <option value='2'>AND</option>
            </select>
            }

            { operator!== '' &&
                <button onClick={() => setShowSearchHistoryResults(true)}>Search</button>
            }
            <div>
            {showSearchHistoryResults && operator === '1' ?
            props.searchByHistory.map((item) =>{
                        return ( 
                                item.results.map((image,index) => {
                                   return <Card key={index} id={image.id} image={image.webformatURL}/>
                                    
                                })

                                )
                    })  
            :showSearchHistoryResults && operator === '2' ?
                props.searchByHistory.map((item) =>{
                        return ( 
                                item.results.map((image,index) => {
                                   return <Card key={index} id={image.id} image={image.webformatURL}/>
                                    
                                })

                                )
                    })  
                
            : null}    
            </div>      
        </div>
    )
}

export default SelectBySearchHistory;