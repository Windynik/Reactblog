import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions';


class PostNew extends Component{
    
    renderField(field){
        const {meta:{touched,error}} = field;               //destructuring! , taking the meta off of feild , making field.meta.error to meta.error , the "field" element is destructured.
        const classNe=`form-group ${touched&&error?'has-danger' : ''}`
        return(
            <div className={classNe}>
            <label>{field.label}</label>
                <input 
                className='form-control'
                type="text"
                {...field.input}            //this has pregenerated es6 knowledge
                />
                <div className="text-help"> 
                {touched ? error : ''}        
                </div>
            </div>
        )                      //^ that is done by redux form , for error handling!
                                //the ternary operator is done because the if is not being rendered.
    }
    onSubmit(values){
        this.props.createPost(values);
    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <div>
                <div className='text-xs-right kekek'>
                    <Link className='btn btn-primary' to='/'>
                    Back to main
                    </Link>
                </div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
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
                <button type="submit" className="btn btn-primary">Submit </button>
                <Link className="btn btn-danger hek" to='/'>Cancel</Link>
            </form>
            </div>
        )
    }
}

function validate(values){
    const errors={};

    if(!values.title||values.title.length<3){
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
})(
    connect(null,{createPost})(PostNew)                  //Parenthasis inside a parenthasis!!
    
);