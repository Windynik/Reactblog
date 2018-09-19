import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost,deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostShow extends Component{

        componentDidMount(){
            //this.props.match.params.id;             //params takes in the wild card stuff , in this case m its ID
            const {id}=this.props.match.params          //same thing , but put into ID :D
            this.props.fetchPost(id);


        }
        onDeleteClick(){
            const{id}=this.props.match.params
            this.props.deletePost(id,()=>{
                this.props.history.push('/');
            })
        }
        render(){
            const {post}=this.props;
            if(!post){
                return(<div>Loading...</div>)
            }
            return(
            <div>
                <div className='pull-xs-right kekek'>
                <Link to='/' className="btn btn-primary">Back to menu!</Link>
                <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)} >Delete!</button>
                </div>
                <h3>{post.title} </h3>
                <h6>Categories : {post.categories}</h6>
                <p>{post.content}</p>

            </div>
            )
        }
}

function mapStateToProps({posts},ownProps){
    return{
        post:posts[ownProps.match.params.id]
    };

}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);