import Card from "./Card";
import { useEffect } from "react";
import getImagesByUserSearch from '../API/Utils';

const Gallery = (props) => {

    useEffect(() => {
        const handleScroll = () => {
          if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2 || props.scrolling) 
          return props.setScrolling(true);
        }  
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      useEffect(() => {
            const setMoreItems = async () => {    
                    const resp = await getImagesByUserSearch(props.searchInpt,props.pixabayPage);
                    props.setSearchOutput([...props.searchOutput , ...resp]);
                   
                    props.setScrolling(false);
                    props.setPixabayPage(props.pixabayPage + 1)
            };
    
        if (!props.scrolling) return;
        setMoreItems();
        
      }, [props.scrolling]);

    return (
        <div className='container'>
            <div>
                { props.searchOutput && !props.historyDisplay && props.searchOutput.map((item, index) => {
                    return  <Card key={index} id={item.id} image={item.webformatURL}/>
                })}
            </div>  
        </div>
    )
}

export default Gallery;