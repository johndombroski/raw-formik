import React from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: '',
    },
    onSubmit: values => {
      console.log('form: ', values);
    },
    validate: values=>{
      let errors = {};
      if(!values.name) errors.name = 'Name required';
      if(!values.emailField) errors.emailField = 'Email required';
      if(!values.pswField) errors.pswField = 'Password required';
      return errors;
    }
  })
  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
        <div> Name </div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}></input>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
        <div> Email </div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}></input>
        {formik.errors.emailField ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div> : null}
        <div> Password </div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}></input>
        {formik.errors.pswField ? <div id="pswError" style={{color:'red'}}>{formik.errors.pswField}</div> : null}
        <button id="submitBtn" type="submit"> Submit</button>
      </form>
      
    </div>
  );
}

export default App;
