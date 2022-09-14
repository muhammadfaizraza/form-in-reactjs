import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/form.css'

const Form = () => {
const [img ,setImg] = useState()
const styles = {
  popup:{
    display: img ? "flex" : "none",
  }
};


const onImageChange = (e) => {
  const [file] = e.target.files;
  setImg(URL.createObjectURL(file));
};

return (
    <div>
<div className='container maincontainer'>
  <div className='row'>
    <div className='col-sm-12'>
    <form>
  <div className="form-row formMain">
    <div className="form-group col-md-5 col-lg-5 col-sm-12 ">
     
      <input type="Text" className="form-control"  placeholder="Title English" required/>
    </div>
    <div className="form-group col-md-5">
    
      <input type="text" className="form-control"  placeholder="العنوان عربي" required style={{direction:'rtl'}}/>
    </div>
  </div>
  <div className="form-row formMain">
    <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
     
      <input type="Text" className="form-control"  placeholder="Title English" required />
    </div>
    <div className="form-group col-md-5">
    
      <input type="text" className="form-control" name='text'  placeholder="العنوان الفرعي عربي" required style={{direction:'rtl'}}/>
    </div>
  </div>
  <div className="form-row formMain">
    <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
     
      <textarea type="Text" className="form-control"  placeholder="Description English"/>
    </div>
    <div className="form-group col-md-5">
    
      <textarea type="text" className="form-control"  placeholder="الوصف العربي" style={{direction:'rtl'}}/>
    </div>
  </div>  
  
  <div className='formBtnDiv container'>


    <label>
      Enter your File
  <input type='file' onChange={onImageChange} className='fileInput'  ></input>
  </label>
  <button type="submit" className="btn btn-primary " >Submit</button>
  
  
  
  </div>
  <div className='ImageContainer'>
<img src={img} alt= '' required  style={styles.popup}></img>

</div>
</form> 
    </div>

  </div>
</div>


    </div>
  )
}

export default Form