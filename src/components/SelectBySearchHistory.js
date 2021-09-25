import { useState } from "react"
import Card from './Card';

const SelectBySearchHistory = (props) =>{

    const [showSearchHistoryResults, setShowSearchHistoryResults] = useState(false);
    const [operator, setOperator] = useState('');
    const [afterSort, setAfterSort] = useState([]);

    var arrIds = [];
    let result = [];
    

    const heandleSearchButton = () => {
        setShowSearchHistoryResults(true);

        props.searchByHistory.map((item) =>{
            return ( 
                    item.results.forEach((image,index,arr) => {
                        arrIds.push(image);
                                                                           
                        if (arr.length - 1 === index) {
                            if( operator === '1'){
                                result = Array.from(new Set(arrIds.map(x => x.id))).map(id => {
                                    return { id:id,
                                             webformatURL: arrIds.find(x => x.id === id).webformatURL
                                    }
                                })
                            }else{
                                result = Array.from(arrIds.map(x => x.id))
                                .filter((e, i, a) => a.indexOf(e) !== i)
                                .map(id => {
                                    return { id:id,
                                             webformatURL: arrIds.find(x => x.id === id).webformatURL
                                    }
                                })
                            }
                            setAfterSort(result)
                        }  
    

                    })
                ) 
        });
        
    }

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
                <button onClick={() => heandleSearchButton()}>Search</button>
            }
            <div>

                {
                    afterSort.map((item, index) =>{                               
                        return <Card key={index} id={item.id} image={item.webformatURL}/>                                
                    })              
                }
               
            </div>      
        </div>
    )
}

export default SelectBySearchHistory;