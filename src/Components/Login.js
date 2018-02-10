import React, { Component } from 'react';
import { Input,Button,Icon } from 'semantic-ui-react';


import '../Css/Login.css';


const UsersFake = 
[
    {
        name : 'David',
        pass : '123'
    },
    {
        name : 'Alex',
        pass : '123'
    },
    {
        name : 'Carl',
        pass : '123'
    },
]


class Login extends Component {

    constructor () {
        super();
        this.state = {
            loading : false,
            user : '',
            pass : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeload(){
        
        this.setState({
            loading : true
        });   
        
        if(UsersFake.find(user => user.name === this.state.user)){
            this.props.history.push('/board')
        }
    }

    handleChange(event) {
        this.setState({user: event.target.value});
    }

    handleSubmit(event){
        console.log(this.state.user);  
    }

    render() {
        let loading = this.state.loading;
        return (
            <div className="Login">
                <div className="Login-logo">
                    <Icon name='github' size='huge' />
                </div>
                <form onSubmit={this.handleSubmit} className="Login-Form">
                    <div className="Login-Form-Input-Box">
                        <Input type="text" value={this.state.user} onChange={this.handleChange} className="Login-Form-Input" placeholder="Username or email" />
                        <Input type="password" value={this.state.pass} className="Login-Form-Input" placeholder="Password" />
                    </div>
                    <Button type="submit" loading={loading} onClick={this.changeload.bind(this)} className="Login-Form-Button" color='black'>Sign In</Button>
                </form> 
            </div>
        );
    }
}

export default Login;
