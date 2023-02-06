import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { add } from '../../Services/Constant'
import { useNavigate } from 'react-router-dom'


const Addcomponent = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [number, setNumber] = useState('')

const contacts = useSelector((state) => state)
const dispatch = useDispatch()
let navigate = useNavigate() 



const clickHandler = (event) => {
    event.preventDefault()

    const checkEmail = contacts.find(contact => contact.email === email)
    // console.log(checkEmail);

    const checkPhone = contacts.find(contact => contact.phone === parseInt(number))
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
        id: contacts[contacts.length-1].id + 1,
        name: name,
        email: email,
        phone: parseInt(number)
    }

    console.log(data);

    dispatch({type: add, payload: data})
    toast.success('Student Added') 
    navigate('/')

}




  return (
    <>
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
                                   value={number} onChange={(event) => setNumber(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" value='Add student' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Addcomponent