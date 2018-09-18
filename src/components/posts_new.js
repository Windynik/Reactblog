import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';


class PostNew extends Component{
    renderField(field){
        return(
            <div className='form-group'>
            <label>{field.label}</label>
                <input 
                className='form-control'
                type="text"
                {...field.input}            //this has pregenerated es6 knowledge
                />
                {field.meta.errors}          
            </div>
        )                      //^ that is done by redux form , for error handling!
    }
    
    render(){
        return(
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/'>
                    Back to main
                    </Link>
                </div>
            <form>
                <Field
                label='Title of the post!'
                name="title"
                component={this.renderField}
                />
                <Field
                label='Categories'
                name='categories'
                component={this.renderField}
                />
                <Field
                label='Post content'
                name='content'
                component={this.renderField}
                />

            </form>
            </div>
        )
    }
}

function validate(values){
    const errors={};

    if(!values.title || values.title.length < 3){
        errors.title="Input a title that is longer is than 3 letters!"
    };
    if(!values.categories){
        errors.categories="Input some category!"
    };
    if(!values.content){
        errors.content="Input some conent please!"
    };



    return errors;
}
export default reduxForm ({
    validate,
    form:'PostsNewForm'
})(PostNew);