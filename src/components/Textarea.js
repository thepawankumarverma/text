import React from 'react'
import Navbar from './Navbar'
import Btn from './Btn'
function Textarea(){
return(
    <>
    
    <form>
 <br></br>
  <div className="form-group mx-4">
    <h3>Enter Your Text Here</h3>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Enter Your Text Here'></textarea>
    <Btn title="Change to UpperCase"></Btn>
<Btn title="Change to LowerCase"></Btn>
<Btn title="Change to CamelCase"></Btn>
<Btn title="Copy Text"></Btn>
<p>Number of Words is 0 and Number of letters is 0</p>
  </div>
</form>
    </>
)

}
export default Textarea

