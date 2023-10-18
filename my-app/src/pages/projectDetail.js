import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id='allr' className='container'>
        <div className='row'> 
        <div className='col-12 col-md-6'>
        <img src={product.thumbnail}></img>
        </div>
        <div className='col-12 col-md-6'>
        <h2 className='h_detail'>Title: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>price: {product.price}</p>
        <p>discountPercentage: {product.discountPercentage}</p>
        <p>rating: {product.rating}</p>
        <p>stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>category: {product.category}</p>
        </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;