
export default function TeamDataTable({ firstName = 'normal', lastName = '5', age, gender = 'default value', email, phone, username, image }) {
  
    return (
    
        <>
        <table id="yable" class="table align-middle mb-0 bg-white">
            <tbody>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img
                                src={image}
                                width="20%"
                                alt=""
                                class="rounded-circle"
                            />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">{firstName}</p>
                                <p class="mb-0">{email}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1 text-dark">{age}</p>
                        <p class="text-muted mb-0">{gender}</p>
                    </td>
                    <td>
                        <span class="badge badge-success rounded-pill d-inline">{lastName}</span>
                    </td>
                    <td>{phone}</td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            {username}
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-rounded">
                          ADD
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-rounded">
                           UPDATE
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-rounded">
                            DELETE
                        </button>
                    </td>
                </tr>
                
            </tbody>
        </table>
        </>
      
    )
}