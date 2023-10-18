import { useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { useContext } from 'react';
import { Context } from '../context/counterContext';
import MyCarcard from '../components/cartcar';

export default function CartPage() {
  const {
    isEmpty,
    items,
    emptyCart,
  } = useCart();
  const { counter, setcounter } = useContext(Context);
  useEffect(() => {
    if (isEmpty) {
      setcounter(0);
    }
  }, [isEmpty, setcounter]);

  if (isEmpty) return <h1 id='empty_div'>Your cart is empty</h1>;

  return (
    <>
      <div className='container pt-3'>
        <div className='row row-cols-md-3 row-cols-12'>
          {items.map((item) => (
                  <MyCarcard
                  key={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      discountPercentage={item.discountPercentage}
                      rating={item.rating}
                      thumbnail={item.thumbnail}
                      items={item}
                  >
                </MyCarcard>
               ))}
        </div>
        <div>
          <button className='remove_button' onClick={() => emptyCart()}>
            <span class="text">Clrear All</span>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}