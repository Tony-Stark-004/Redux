import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
  const contacts = useSelector(state=>state)
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
      dispatch({type: 'delete', payload: id})
      toast.success('Yep you deleted')
  }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to='/add' className='btn btn-dark'>Add Contact</Link>
                </div>
                <div>
                  <table className="table table-hover">

                    <thead className='text-white bg-dark'>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                        {
                        contacts.map((contact, id) => (
                          <tr key={id}> 
                            <td>{id+1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>
                              <Link to={`/edit/${contact.id}`} className='btn btn-small btn-dark'>Edit</Link>
                              <button type='button' className='btn btn-small btn-danger mx-2' onClick={()=>deleteHandler(contact.id)}>Delete</button>
                            </td>
                          </tr>
                        ))
                        }
                            
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home