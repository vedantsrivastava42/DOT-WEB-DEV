import Card from './Card'

function Tours({tours,removeTour}){
return (
    <div className='container'>
        <div className='title'>
            <h2>Plan With Love</h2>
        </div>
        
         <div className='cards'>
            {
                tours.map( (tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card> 
                    // copy of tour object key={tour.id}
                })
            }
        </div> 
    </div>
    );
}
export default Tours;
