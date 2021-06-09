import React from 'react'


const initialState = {
    bio1:'',
    bio2:'',
    bio3:'',
    bio4:'',
    radio1: '',
    radio2: '',
    radio3: '',
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
           
                {/* Question 1 */}

                <div className= 'form-group col-md-4'>
            <label htmlFor="radio1"> Q1 : </label>
            <br></br>
            &nbsp;&nbsp;&nbsp;
                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio1" id="radio11" value='Male'></input> 
                    &nbsp;
                    <label htmlFor = 'radio11'> Male </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio1" id="radio12" value='Female'></input>
                    &nbsp;
                    <label htmlFor = 'radio12'> Female </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio1" id="radio13" value='Other'></input>
                    &nbsp;
                    <label htmlFor = 'radio13'> Other </label>
                </div>
            </div>


            {/* Question 2 */}

            <div className='form-skill col-md-8' > 
            <label htmlFor="skill">Q2 :</label><br/>&nbsp;
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
            </div> &nbsp;


            {/* Question 3 */}

            <div className= 'form-group'>
                <label htmlFor='bio1'>Q3 : </label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Bio1'
                name='bio1'
                id='bio1'
                value={this.state.bio1}
                onChange = {this.changeHandler}/>
            </div>
            &nbsp;

            {/* Question 4 */}

            <div className= 'form-group'>
                <label htmlFor='bio2'>Q4 : </label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Bio2'
                name='bio2'
                id='bio2'
                value={this.state.bio2}
                onChange = {this.changeHandler}/>
            </div>
            &nbsp;



                {/* Question 5 */}

            <div className= 'form-group col-md-4'>
            <label htmlFor="radio2"> Q5 : </label>
            <br></br>
            &nbsp;&nbsp;&nbsp;
                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio2" id="radio21" value='Male'></input> 
                    &nbsp;
                    <label htmlFor = 'radio21'> Male </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio2" id="radio22" value='Female'></input>
                    &nbsp;
                    <label htmlFor = 'radio22'> Female </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio2" id="radio23" value='Other'></input>
                    &nbsp;
                    <label htmlFor = 'radio23'> Other </label>
                </div>
            </div>

            &nbsp;
            

            {/* Question 6 */}

            <div className= 'form-group'>
                <label htmlFor='bio3'>Q6 : </label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Bio3'
                name='bio3'
                id='bio3'
                value={this.state.bio3}
                onChange = {this.changeHandler}/>
            </div> &nbsp;

            


                     {/* Question 7 */}

            <div className= 'form-group col-md-4'>
            <label htmlFor="radio3"> Q7 : </label>
            <br></br>
            &nbsp;&nbsp;&nbsp;
                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio3" id="radio31" value='Male'></input> 
                    &nbsp;
                    <label htmlFor = 'radio31'> Male </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio3" id="radio32" value='Female'></input>
                    &nbsp;
                    <label htmlFor = 'radio32'> Female </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio3" id="radio3" value='Other'></input>
                    &nbsp;
                    <label htmlFor = 'radio3'> Other </label>
                </div>
            </div> &nbsp;


                    {/* Question 8 */}

            <div className= 'form-group'>
                <label htmlFor='bio4'>Q8 : </label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your Bio4'
                name='bio4'
                id='bio4'
                value={this.state.bio4}
                onChange = {this.changeHandler}/>
            </div>
        

            <button className = 'btn btn-primary' type = 'submit'> Submit </button>
        </form>

        </div>

        );
    }
}

export default PostFrom;