
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart'
import { useContext } from 'react';
import { Context } from '../context/counterContext';
import { Link } from 'react-router-dom';
function Mycard({title='normal',price,thumbnail,items}) {
  const {addItem} = useCart();
  const { counter, setcounter } = useContext(Context);
    
     
  const increaseHandler = () => {
      setcounter((count) => count + 1);
  };

  return (
    <div className='container mb-3 mt-5'>
        <div className='row'>  
        <Card className='shadow-lg' id='card_skincare'>
      <Card.Img 
      
      variant="top"
       src={thumbnail}
       id='image_skincare'
        className='rounded'
         />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {items.description}
        </Card.Text>
    
        <Card.Text>
            {price}$
        </Card.Text>
 
        <Card.Text>
                 <button id='button_skin'
                onClick={() => {
                  addItem(items);
                  increaseHandler();
                }}
             >
                Add to cart
             </button>
                
        </Card.Text>
        <Link to={`/ProductDetails/${items.id}`}>More Details</Link>
      </Card.Body>
    </Card>
        </div>
    </div>
  );
}

export default Mycard;