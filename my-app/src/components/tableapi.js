import React , {useContext, useEffect,useState} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { PencilSquare, Save2Fill, Trash2 } from 'react-bootstrap-icons';
export default function Users(){
    const [data , setData]= useState([]);
    const [firstName,setFirstName] = useState('');
    const [editFirstName,setEditFirstName] = useState('');
    const [editage,seteditage] = useState('');
    const [editgender,setEditGender] = useState('');
    const [editEmail,setEditEmail] = useState('');
    const [editPhone,serEditPhone] = useState('');
    const [editusername,seteditusername] = useState('');
    const [editId , setEditId] = useState(-1); 
    
    useEffect( ()=> {
        axios.get('http://localhost:3030/users').then( res => {
            console.log(res)
            setData(res.data)
        })
    },[]);

   const handlerSubmit = (e) =>{
    e.preventDefault();
    
    axios.post('http://localhost:3030/users',{firstName:firstName}).then(res => console.log(res.data))
   }
    const handleEdit= (id)=>{
        axios.get('http://localhost:3030/users/'+id).then( res => {
            setEditFirstName(res.firstName);
            seteditage(res.age);
            setEditGender(res.gender);
            setEditEmail(res.email);
            serEditPhone(res.phone);
            seteditusername(res.username);
            })
        setEditId(id);
    }
    const handleUpdate = ()=>{
        axios.put('http://localhost:3030/users/'+editId , { firstName:editFirstName,age:editage,gender:editgender,email:editEmail,phone:editPhone,username:editusername}).then(
            res => {
                setEditId(-1)
              document.location.reload();
            }
        )
    }

    const deleteUser= (id) =>{
        axios.delete(`http://localhost:3030/users/${id}`);
        setData(
            data.filter((item)=>{
                return item.id!==id
            })
        )
    }

    var usersDetailes ='';
    usersDetailes=data.map((item , index)=>{
        return(
            item.id === editId? <tr>
                <td>-</td>
                <td>{item.id}</td>
                <td><input type='text' value={editFirstName} onChange={e => setEditFirstName(e.target.value)}/></td>
                <td><input type='text' value={editage} onChange={e => seteditage(e.target.value)}/></td>
                <td><input type='text' value={editgender} onChange={e => setEditGender(e.target.value)}/></td>
                <td><input type='text' value={editEmail} onChange={e => setEditEmail(e.target.value)}/></td>
                <td><input type='text' value={editPhone} onChange={e => serEditPhone(e.target.value)}/></td>
                <td><input type='text' value={editusername} onChange={e => seteditusername(e.target.value)}/></td>
                <td><button className='btn' onClick={handleUpdate}>Update</button></td>
               
                        </tr>:
            <tr key={index}>
                  <td width="40%"><img src={item.image} width="10%"></img></td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.username}</td>
                
                <td><button className='btn ' onClick={()=> handleEdit(item.id)}><i class="bi bi-pencil"></i></button></td>
                <td><button className='remove_button' onClick={()=> deleteUser(item.id)} ><span class="text">DELETE</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                </td>
            </tr>
        )
    })
    return(
        <>
         <div id='tabll' className='d-flex justify-content-center'>
            <form className='form formo' action='' onClick={handlerSubmit}> 
            <input 
             type="text"
             name='firstName'
             onChange={ (e) => setFirstName(e.target.value)}
             placeholder='Add User'/>
             <button className='btn text-white' type='submit'>Add</button>
            </form>
        </div>
        <div  className=' p-5 mx-auto'>
        <Table className='text-center' hover  responsive >
            <thead className='table-white' >
            <tr>
            <th id='th'>
              Image
            </th>
            <th id='th'>
                 ID
            </th>
            <th id='th'>
                 Name
            </th>
            <th id='th'>
                Age
            </th>
            <th id='th'>
                Gender
            </th>
            <th id='th'>
                Email
            </th>
            <th id='th'>
                Phone
            </th>
            <th id='th'>
                Username
            </th>
            
            </tr>
            </thead>
            <tbody>
                {usersDetailes}
            </tbody>
        </Table>
        </div>
        </>
    )
    
}