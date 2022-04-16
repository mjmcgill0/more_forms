import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { name, email, password };
        console.log("Welcome", newUser);
    	setName("");
    	setEmail("");
    	setPassword("");
    
        setSubmitted( true );
    };
    
    const formMessage = () => {
        if( submitted ) {
	    return "Thank you, your form has been submitted!";
	} else {
	    return "Welcome, please submit the form.";
	}
    };
    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>Username: </label> 
                <input type="text" value={name} onChange={ (e) => setName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Form;