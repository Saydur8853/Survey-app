import React from 'react'


const initialState = {
    bio1:'',
    bio2:'',
    bio3:'',
    bio4:'',
    radio1: '',
    radio2: '',
    radio3: '',
    showPosts1:true,
    showPosts2:true,
    showPosts3:true,
    showPosts4:true,
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

    togglePostsHandler1 = () =>{
        this.setState({
            showPosts1: !this.state.showPosts1
        })
    }

    togglePostsHandler2 = () =>{
        this.setState({
            showPosts2: !this.state.showPosts2
        })
    }

    togglePostsHandler3 = () =>{
        this.setState({
            showPosts3: !this.state.showPosts3
        })
    }

    togglePostsHandler4 = () =>{
        this.setState({
            showPosts4: !this.state.showPosts4
        })
    }
    
    
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

        let post1 =null;

        if (this.state.showPosts1){
            post1 = (
                {/* Question 2 */},
    
                <div className='form-skill col-md-8' > 
                <label htmlFor="skill">Q2 : What you hate a lot!</label>&nbsp;
                    <div className='checkboxes' style={{display:'flex', flexDirection:'row'}}>
                        <div className= 'form-check'>
                        <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='js' value='javascript' type="checkbox"/>
                        <label htmlFor="js"> JAVA</label>
                    </div>
    
                    <div className= 'form-check'>
                        <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='react' value='React Js' type="checkbox"/>
                        <label htmlFor="react"> C#</label>
                    </div>
                    <div className= 'form-check'>
                        <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='angular' value='Angular' type="checkbox"/>
                        <label htmlFor="angular">Angular</label>
                    </div>
    
                    <div className= 'form-check'>
                        <input onChange={this.changeHandler} className = 'form-check-input' name='skills' id='Python' value='Python' type="checkbox"/>
                        <label htmlFor="python"> Hero Alom </label>
                    </div>
                    </div></div>
                 
    );
        }

        // ###################################


        let post2 =null;

        if (this.state.showPosts2){
            post2 = (
              
                <div>

                     {/* /* Question 3 */ }

            <div className= 'form-group'>
            <label htmlFor='bio1'>Q3 : Write somthing about your experience. </label>
            <textarea 
            className ='form-control'
            type = 'text' 
            placeholder='Short info touch much.'
            name='bio1'
            id='bio1'
            value={this.state.bio1}
            onChange = {this.changeHandler}/>
            </div>

            <br/>

            {/*  Question 4 */ }

            <div className= 'form-group'>
                <label htmlFor='bio2'>Q4 : Why man are capable to do this work?</label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Enter Your thaught...'
                name='bio2'
                id='bio2'
                value={this.state.bio2}
                onChange = {this.changeHandler}/>
            </div>

            </div>

            
                 
    );
        }

        // #########################################


        
        let post3 =null;

        if (this.state.showPosts3){
            post3 = (

                /* Question 6 */

            <div className= 'form-group'>
                <label htmlFor='bio3'>Q6 : If you get this job, what will be your step?</label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Ex: I will dance for 1 hours. '
                name='bio3'
                id='bio3'
                value={this.state.bio3}
                onChange = {this.changeHandler}/>
            </div>

            );
        
        }

        // #####################################

        let post4 =null;

        if (this.state.showPosts4){
            post4 = (

                
                     /* Question 7 */

            <div className= 'form-group '>
            <label htmlFor="radio3"> Q7 : Choose your favourite branch.</label>
            <br></br>
            &nbsp;&nbsp;&nbsp;
                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio3" id="radio31" value='Male'></input> 
                    &nbsp;
                    <label htmlFor = 'radio31'> Banani </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio3" id="radio32" value='Female'></input>
                    &nbsp;
                    <label htmlFor = 'radio32'> Uttora </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio3" id="radio3" value='Other'></input>
                    &nbsp;
                    <label htmlFor = 'radio3'> Gulsan </label>
                </div>
            </div>


            );
        }




        return(
            
            <div className='survey'>
                <div className='header'>Survey Form</div>
            <hr></hr>
        <form ref={this.myForm} onSubmit= {this.submitHandler}>
           
                {/* Question 1 */}
                

                <div className= 'form-group col-md-4'>
                     <label htmlFor="radio1"> Q1 : Choose your gender?</label>
            
                <div  className= "form-check">
                    <input onClick={this.togglePostsHandler1} onChange={ this.changeHandler} type="radio" name="radio1" id="radio11" value='Male'></input> 
                    &nbsp;
                    <label htmlFor = 'radio11'> Male </label>

                    {/* {this.state.showPosts ? 'Hide Posts' : 'Show Posts'} */}
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onClick={()=> {this.togglePostsHandler2(); this.togglePostsHandler1()}} onChange={ this.changeHandler} type="radio" name="radio1" id="radio12" value='Female'></input>
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
            {post1}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {post2}
            &nbsp;&nbsp;&nbsp;&nbsp;
            
                {/* Question 5 */}

            <div className= 'form-group'>
            <label htmlFor="radio2"> Q5 : As a Fresher what you know better?</label>
            <br></br>
            &nbsp;&nbsp;&nbsp;
                <div className= "form-check">
                    <input onClick={()=> {this.togglePostsHandler3(); this.togglePostsHandler4()}} onChange={ this.changeHandler} type="radio" name="radio2" id="radio21" value='SQA'></input> 
                    &nbsp;
                    <label htmlFor = 'radio21'> SQA </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onChange={ this.changeHandler} type="radio" name="radio2" id="radio22" value='Business analytics'></input>
                    &nbsp;
                    <label htmlFor = 'radio22'> Problem Solving </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <div className= "form-check">
                    <input onClick={this.togglePostsHandler3} onChange={ this.changeHandler} type="radio" name="radio2" id="radio23" value='Cooking'></input>
                    &nbsp;
                    <label htmlFor = 'radio23'> Cooking </label>
                </div>
            </div>

            &nbsp;
            

            {/* Question 6 */}
            {post3}
            &nbsp;

            {/* Question 7 */}

            {post4}
            &nbsp;

                    {/* Question 8 */}

            <div className= 'form-group'>
                <label htmlFor='bio4'>Q8 : Any Question in your mind?</label>
                <textarea 
                className ='form-control'
                type = 'text' 
                placeholder='Ex: Is this company provide lunch?'
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