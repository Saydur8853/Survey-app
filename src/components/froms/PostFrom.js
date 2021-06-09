import React from 'react'


const initialState = {
    name:'',
    email:'',
    phonenumber:'',
    bio:'',
    gender: '',
    birthday:'',
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
                    this.state.skills.filter(skill => skill !== event.target.value)
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
            
            <div className='survey'>
                <div className='header'>Survey Form</div>
            <hr></hr>
        <form ref={this.myForm} onSubmit= {this.submitHandler}>
            <div className="row">
            <div className= 'form-group col-md-6'>
                <label htmlFor='name'> Enter Your Full name: </label>
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

            <div className= 'form-group col-md-6'>
                <label htmlFor='email'> Enter Your email:</label>
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
            </div>
            &nbsp;

            <div className="row">
            <div className= 'form-group col-md-6'>
            <label htmlFor="birthday">Birthday:</label>
            <input className ='form-control'
            type="date" 
            id="birthday" 
            name="birthday"
            value={this.state.birthday}
            onChange ={this.changeHandler}/>
            </div>


            <div className= 'form-group col-md-6'>
                <label htmlFor='phonenumber'> Enter Your Phone Number: </label>
                <input 
                className ='form-control'
                type = 'number' 
                placeholder='Enter Your Phone Number'
                name='phonenumber'
                id='phonenumber'
                value={this.state.phonenumber}
                onChange = {this.changeHandler}/>
            </div>
            </div>
            &nbsp;

            <div className= 'form-group'>
                <label htmlFor='bio'> Enter Your Bio: </label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Bio'
                name='bio'
                id='bio'
                value={this.state.bio}
                onChange = {this.changeHandler}/>
            </div>
            &nbsp;

            <div className="row">
            <div className= 'form-group col-md-4'>
            <label htmlFor="gender"> Gender : </label>
            <br></br>
            &nbsp;&nbsp;&nbsp;
                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="gender" id="gender1" value='Male'></input> 
                    &nbsp;
                    <label htmlFor = 'gender1'> Male </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="gender" id="gender2" value='Female'></input>
                    &nbsp;
                    <label htmlFor = 'gender2'> Female </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="gender" id="gender3" value='Other'></input>
                    &nbsp;
                    <label htmlFor = 'gender3'> Other </label>
                </div>
            </div>


            

            <div className='form-skill col-md-8' > 
            <label htmlFor="skill">Skills :</label><br/>&nbsp;
                <div className='checkboxes' style={{display:'flex', flexDirection:'row'}}>
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
            </div>
        </div>

            <button className = 'btn btn-primary' type = 'submit'> Submit </button>
        </form>

        </div>

        );
    }
}

export default PostFrom;