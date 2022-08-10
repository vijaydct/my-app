import React from 'react'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            email:'',
            password: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }
    handleSubmit=(e) =>{
        e.preventDefault() // this method will prevent the default page reload
        const formData={
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        console.log('formData', formData)
    }

    render() {
        // <input type='submit' value='register' />, is must be inside the form, if not, submit button will not get fired.
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>username</label>
                    <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        required={true}
                    /> <br/>

                    <label>email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /> <br/>
                    <label>password</label>

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    /> <br/>
                    <input type='submit' value='register' />
                </form>
            </div>
        )
    }
}

export default Register