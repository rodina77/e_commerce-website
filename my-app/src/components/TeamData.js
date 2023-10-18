
import TeamDataTable from '../components/teamTable'
import React, { useState, useEffect } from "react";
export default function TeamData()
{
    const url = "https://dummyjson.com/users";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }

    useEffect(() => {
      fetchInfo();
    }, []);
    
    return(
      
        <div className='container'>
            <h1 id='h'>our team</h1>
        <div className='row row-cols-md-3 row-cols-12'>

            {data?.users?.map((item)=> {
                return (
                    <TeamDataTable
                      key={item.id}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      age={item.age}
                      gender={item.gender}
                      email={item.email}
                      phone={item.phone}
                      username={item.username}
                      image={item.image}
                      >
                    </TeamDataTable>
                )
               
            })}

        </div>
        </div>

    )
}