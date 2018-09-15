export function SelectBook(book){
    //this is the action creator , so we can configure this to do some action.
    //it always has a type and a payload.
    return {
        type:'BOOK_SELECTED',
        payload:book

    }
}