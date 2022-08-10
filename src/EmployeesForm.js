import React from 'react'
import axios from 'axios'

 // child component to Employees
 class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email:'',
            gender:'',
            department:''
        }
    }

    handleNameChange = (e) => {
        const name = e.target.value
        this.setState({name})
    }

    handleEmailChange = (e) => {
        const email = e.target.value
        this.setState({email})
    }

    handleGenderChange = (gender) => {
        this.setState({gender})
    }

    handleDepartmentChange = (e) => {
        const department = e.target.value
        this.setState({department})
    }

    handleOnBlur = () => {
        //  automatic selct gender radio button based on name via API provided by genderize.io website.
        // const xhr = new XMLHttpRequest()

        // xhr.open('GET', `https://api.genderize.io?name=${this.state.name}`)
        // xhr.send()
        
        // xhr.onload = () => {
        //     console.log('genderize', xhr.responseText)
        //     const resp = JSON.parse(xhr.responseText)
        //     console.log('resp', typeof resp, resp.gender)
        //     if(resp.gender !== null){
        //         this.setState({gender: resp.gender})
        //     }
        // }

        axios.get(`https://api.genderize.io?name=${this.state.name}`)
            .then((response)=>{
                const resp = response.data
                if(resp.gender !== null){
                    this.setState({gender: resp.gender})
                }

            })
            .catch((err)=>{
                console.log(err.message)
            })

    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            department: this.state.department
        }

        console.log('formData', formData)
        if (formData.name === ''){
            alert('name should not empty')
        } else{
            this.props.addEmployee(formData)
        }
        this.setState({name: '', email: '', gender: '', department: ''})
    }

    render() {
        console.log('gender', this.state.gender)
        return (
            <div>
                <h2>Add Employee</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        onBlur={this.handleOnBlur} 
                    /> <br/>

                    <label>Email</label>
                    <input 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleEmailChange} 
                    /> <br/>

                    <label>gender</label>
                    <input 
                        type="radio" 
                        name="gender"
                        checked={this.state.gender === 'male'} 
                        onChange={()=>{
                            this.handleGenderChange('male')
                        }}
                    /> male
                    <input 
                        type="radio" 
                        name="gender" 
                        checked={this.state.gender === 'female'}
                        onChange={()=>{
                            this.handleGenderChange('female')
                        }}
                    /> female <br/>

                    <label>department</label>
                    <select value={this.state.department} onChange={this.handleDepartmentChange}>
                        <option value= "">select</option>
                        <option value="tech">technology</option>
                        <option value="hr">human resource</option>
                        <option value="facility">facility management</option>
                    </select>
                    <br/>

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default EmployeeForm