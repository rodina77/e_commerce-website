import React, { useContext, useState } from "react";
import { SearchContext } from "../context/searchContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchBar(props) {
    const [currentVal, setCurrentVal] = useState("");
    const {searchHandler} = useContext(SearchContext);

    const filtredDataHandler = ()=>
    {
        searchHandler(currentVal);
    };
  return (
    <div className='container'>
            
    <h2 id='h2_content' className='text-center m-2'>Our products</h2>
    <p id='p' className="text-center"> here you can find all what you want</p>
    <div className="container">
    <Form id="form_input" className="d-flex m-auto mt-5 rounded p-2 col-lg-8">


        <Form.Control className="me-2" type="search" placeholder="search for product" aria-label="Search"
         value={currentVal}
         onChange={(e) => setCurrentVal(e.target.value)}
          />

      <Button
          onClick={filtredDataHandler}
           variant="text-white"
           className="btn rounded text-light"
           >
            Search
           </Button>
      
    </Form>
     </div>
     </div>
  );
}
