import { add, update } from "../Constant"

const initialState = [
    {
        id: 1,
        name: 'Aditya Kumar',
        email: 'shahaditya292@gmail.com',
        phone: 8588962288
    },

    {
        id: 2,
        name: 'Vishal',
        email: 'vishal1431@gmail.com',
        phone: 8700977261
    }
]

const ContactReducer = (state=initialState, action) => {
        switch(action.type) {

            case add : 
            return [...state, action.payload]

            case update : 
                const updatedState = state.map(contact => 
                    contact.id === action.payload.id? action.payload : contact)

                state = updatedState
                return state

                case 'delete' : 
                const dontDel = state.filter(contact => contact.id !== action.payload)
                state = dontDel
                return state

            default: return state
        }
}

export default ContactReducer