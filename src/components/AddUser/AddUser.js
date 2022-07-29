import React,{useState} from "react";
import Form from "../Layout/Form";

import Button from "../Layout/Button";


const AddUser = ({addNewUser, showHandel}) => {
    

    const [input, setInput] = useState({
        name: '',
        age: '',
        address: '',
        phone: '',
        type : ''
    })

    const inputHandller = (e) => {
        const kay = e.target.id;
        const value = e.target.value;
        setInput((prevState) => ( {...prevState, [kay]: value}))
    } 

    const onSubmitHandller = (e) =>{
        showHandel(e)
        e.preventDefault();
        addNewUser({
            id: Math.round(Math.random() * 1000),
            name: input.name,
            age: input.age,
            address: input.address,
            phone: input.phone,
            type: input.type
            
        });
        setInput(
            {
                name: "",
                age: '',
                address: '',
                phone: '',
                type : ''
            }
        )


        //  let localAray = ['id', "name", 'age', 'address', 'phone', 'type']

        // const localHandler = localStorage.setItem(

        //     JSON.stringify(localAray)

        //     ,JSON.stringify([
        //     Math.round(Math.random() * 1000),
        //      input.name, 
        //      input.age,
        //      input.address,
        //      input.phone,
        //      input.type 
        //     ]) )
         
    }
    return ( <Form onSubmit = {onSubmitHandller} >
        <Form.Controller>
            <label htmlFor="name" >Name</label>
            <input type= "text" id = "name" placeholder = "Enter the name" value={input.name} onChange = {inputHandller}/>
        </Form.Controller>

        <Form.Controller>
            <label htmlFor="age">Age</label>
            <input type= "number" id = "age" placeholder = "Enter the age" value={input.age} onChange = {inputHandller}/>
        </Form.Controller>

        <Form.Controller>
            <label htmlFor="address">Address</label>
            <input type= "address" id = "address" placeholder = "Enter the address" value={input.address} onChange = {inputHandller}/>
        </Form.Controller>

        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input type= "number" id = "phone" placeholder = "Enter the phone" value={input.phone} onChange = {inputHandller}/>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="type">Type</label>
            <input type= "text" id = "type" placeholder = "Enter the type" value={input.type} onChange = {inputHandller}/>
        </Form.Controller>

        <div>
            <Button type = "submit" style = {{margin: '10px 10px'}}> Add </Button>
            <Button type = 'reset'> Reset </Button>
        </div>
    </Form> );
}
 
export default AddUser;