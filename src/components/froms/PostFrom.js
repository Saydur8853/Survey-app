import React from 'react'


const initialState = {
    name:'',
    email:'',
    password:'',
    bio:'',
    country: '',
    gender: '',
    skills: []
}
class PostFrom extends React.Component{

    constructor(){
        super()

        this.myForm = React.createRef()
    }
    
    state = {
        ...initialState
    };
    
    changeHandler = event =>{
        if(event.target.type ==='checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills:
                    this.state.skills.filter(skill => skill =! event.target.value)
                })
            }
        } else{
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)

        this.myForm.current.reset()
        this.setState({
            ...initialState
        })
    }


    render(){
        return(
        <form ref={this.myForm} onSubmit= {this.submitHandler}>
            <div className= 'form-group'>
                <label htmlFor='name'> Enter Your Full name </label>
                <input 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Name'
                name='name'
                id='name'
                value={this.state.name}
                onChange = {this.changeHandler}
                />
            </div>

            <div className= 'form-group'>
                <label htmlFor='email'> Enter Your email </label>
                <input
                className ='form-control' 
                type = 'email' 
                placeholder='Enter Your Email'
                name='email'
                id='email'
                value={this.state.email}
                onChange = {this.changeHandler}
                />
            </div>

            <div className= 'form-group'>
                <label htmlFor='password'> Enter Your Password </label>
                <input 
                className ='form-control'
                type = 'password' 
                placeholder='Enter Your password'
                name='password'
                id='password'
                value={this.state.password}
                onChange = {this.changeHandler}/>
            </div>

            <div className= 'form-group'>
                <label htmlFor='bio'> Enter Your Bio </label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Bio'
                name='bio'
                id='bio'
                value={this.state.bio}
                onChange = {this.changeHandler}/>
            </div>

            <div className='form-group'>
                <label htmlFor="country"> Choose Your Country</label>
                <select className='form-control' onChange={this.changeHandler} name="country" id='country'>
                    <option>Select Your Country</option>
                    <option value="Bangladesh"> Bangladesh</option>
                    <option value="Australia"> Australia</option>
                    <option value="Germany"> Germany</option>
                    <option value="New Zeeland"> New Zeeland</option>
                </select>
            </div>

            <div className= 'form-group'>
            <label htmlFor="country"> Gender : </label>
                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="gender" id="gender1" value='Male'></input>
                    <label htmlFor = 'gender1'> Male </label>
                </div>

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="gender" id="gender2" value='Female'></input>
                    <label htmlFor = 'gender2'> Female </label>
                </div>

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="gender" id="gender3" value='Other'></input>
                    <label htmlFor = 'gender3'> Other </label>
                </div>
            </div>

            <label htmlFor="country"> Skills : </label>

            <div className='form-group'>
                <div className= 'form-check'>
                    <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='js' value='javascript' type="checkbox"/>
                    <label htmlFor="js"> javascript</label>
                </div>

                <div className= 'form-check'>
                    <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='react' value='React Js' type="checkbox"/>
                    <label htmlFor="react"> React Js</label>
                </div>

                <div className= 'form-check'>
                    <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='angular' value='Angular' type="checkbox"/>
                    <label htmlFor="angular"> Angular</label>
                </div>

                <div className= 'form-check'>
                    <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='Python' value='Python' type="checkbox"/>
                    <label htmlFor="python"> Python</label>
                </div>
            </div>

            <button className = 'btn btn-primary' type = 'submit'> Submit </button>
        </form>

        );
    }
}

export default PostFrom;