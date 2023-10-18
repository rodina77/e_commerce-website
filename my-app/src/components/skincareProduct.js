
import Mycard from '../components/skincareProductCard'
import {SearchContext} from "../context/searchContext"
import React, { useContext } from "react";
import { useParams } from 'react-router-dom';

export default function CardProduct(props)
{
    
    const {searchData,msg} = useContext(SearchContext);
    const { id } = useParams();

    const product = searchData.find((item) => item.id === id);

    return(
      
        <div className='container'>
            <div className='w-50 p-2 rounded mt-3 m-auto'>{msg}</div>
        <div className='row row-cols-md-3 row-cols-12'>

            {searchData?.map((item)=> {
                return (
                    <>
                    <Mycard
                     key={item.id}
                     title={item.title}
                     description={item.description}
                     price={item.price}
                     discountPercentage={item.discountPercentage}
                     rating={item.rating}
                     thumbnail={item.thumbnail}
                     items={item}
                      >
                    </Mycard>
                    
 
                    </>
                    
                )

            })}
            

        </div>
        </div>

    )
}