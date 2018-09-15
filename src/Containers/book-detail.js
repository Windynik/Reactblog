import React , {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{

    render(){
    if(!this.props.book){
        return(
            
            <div><h1>Select a book to start with!</h1></div>
        )
    }
        return(
            <div>
            <h1>Book Details for the Selected book is :</h1>
            <div>Name : {this.props.book.title}<br />
                Pages : {this.props.book.pages}
            </div>
            </div>
        )
    
    }
}

function mapStateToProps(state)
{
return{
    book : state.ActiveBook
};
}
export default connect (mapStateToProps)(BookDetails);