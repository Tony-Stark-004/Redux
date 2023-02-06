import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { toast } from 'react-toastify'
import { update } from '../../Services/Constant'
import { useNavigate } from 'react-router-dom'


const Edit = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const {id} = useParams()

    const contacts = useSelector(state => state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    const dispatch = useDispatch()
    let navigate = useNavigate() 

    useEffect(() => {
            if(currentContact) {
                setName(currentContact.name)
                setEmail(currentContact.email)
                setNumber((currentContact.phone))
            }
    }, [currentContact])

    const clickHandler = (event) => {
        event.preventDefault()
    
        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email)
        // console.log(checkEmail);
    
        const checkPhone = contacts.find(contact => contact.id !== parseInt(id) && contact.phone === parseInt(number))
        // console.log(checkPhone);
    
    
        if(!name || !email || !number) {
            return toast.warning(`Please Fill ${!name?'Name Input':!(email)?'Email Input':'Number Input'}`)
        }
    
        if(checkEmail) {
            return toast.error('Email is already exist')
        }
    
        if(checkPhone) {
            return toast.error('Number is already exist')
        }
    
        const data = {
            id: parseInt(id),
            name: name,
            email: email,
            phone: parseInt(number)
        }
    
        console.log(data);
    
        dispatch({type: update, payload: data})
        toast.success('Student updated') 
        navigate('/')
    
    }

    
  return (
    <>
    {
        currentContact? <>
            <div className="container">
            <div className="row">
                <div className='col-md-6 shadow mx-auto p-5 my-5'>
    
                    <form onSubmit={clickHandler}>
    
                    <div className="form-group">
                            <input type="text" placeholder='enter name' className='form-control my-2'
                                   value={name} onChange={(event) => setName(event.target.value)} 
                            />
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder='enter email' className='form-control my-2' 
                                   value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder='enter phone number' className='form-control my-2' 
                                   value={number} onChange={(event) => setNumber((event.target.value))}
                            />
                        </div>
    
                        <div className="form-group">
                            <input type="submit" value='Update student' className='btn btn-dark' />
                            <Link to='/'  className='btn btn-danger mx-3'>Cancel</Link>
    
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>

      </> : <h3 className='my-5 text-center'>Student with id {id} is not exist</h3>
    }
    
    </>
  )
}

export default Edit