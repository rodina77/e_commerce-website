
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart'

function MyCarcard({title='normal',description='default value',price,rating,discountPercentage,thumbnail,items}) {
  const {
    removeItem,
  } = useCart();

  return (
    <div id='cart_container' className='container mb-3 mt-5'>
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
          {description}
        </Card.Text>
        <Card.Text>
           discount: {discountPercentage}
        </Card.Text>
        <Card.Text>
            {price}$
        </Card.Text>
        <Card.Text>
            {rating} rate
        </Card.Text>
        <Card.Text>
          <button id='button_skin' onClick={()=> removeItem(items.id)}>remove item</button>
             </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>
  );
}

export default MyCarcard;