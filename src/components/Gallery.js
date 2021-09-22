import Card from "./Card";

const Gallery = (props) => {
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