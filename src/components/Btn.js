import React from 'react'
function Btn(props){
    return(
        <>
        <button type="button" class="btn btn-primary mx-2 my-2">{props.title}</button>
        </>
    )
}
export default Btn
