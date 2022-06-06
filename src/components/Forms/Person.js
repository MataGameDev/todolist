import React,{Component} from 'react';
import './Person.css'
import Popup from 'react-popup';
import './Popup.css';

class Person extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
        }
    }
    handleOnChange = e => {
        const{target: {value,name}} = e;

        this.setState({
            [name]:value
        })

        console.log(value)
    }


    handleOnSubmit = e => {
        e.preventDefault();
        const{firstName,lastName,email,phone} = this.state;
        this.setState({
            errors:{
                firstName:firstName.trim() ==='',
                lastName:lastName.trim() === '',
            }
        })
        if(firstName.trim() && lastName.trim()){

            Popup.create({
                title: 'Person Information',
                content:(
                    <div>
                        <p><strong>Name:</strong> {firstName} {lastName} </p>
                        <p><strong>Email:</strong> {email} </p>
                        {phone && <p><strong>Phone:</strong>{phone}</p>}
                    </div>
                ),
                buttons:{
                    right:[{
                        text:'Close',
                        action:popup =>popup.close()
                    }]
                }
            })
        }
    }

    render(){
        return(
            <div className="Person">
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>
                            <p><strong>First Name: </strong></p>
                            <input 
                                name="firstName"
                                type= "text"
                                value={this.state.firstName}
                                onChange={this.handleOnChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p><strong>Last Name: </strong></p>
                            <input 
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleOnChange}       
                            />
                        </label>
                    </div>
                    <div>
                    <label>
                        <p><strong>Email: </strong></p>
                        <input 
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                        />
                    </label>
                </div>
                <div>
                <label>
                    <p><strong>Phone: </strong></p>
                    <input 
                        name="phone"
                        type="tel"
                        value={this.state.phone}
                        onChange={this.handleOnChange}
                    />
                </label>
            </div>
            <input type ="submit" name="Save Information"/>
                </form>
            </div>
            


        )
    }
}

export default Person;
