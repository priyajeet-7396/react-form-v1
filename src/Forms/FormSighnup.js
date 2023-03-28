
import React from 'react'
import useform from './useForm';
import validate from './validateInfo';

const FormSighnup = () => {
    const{handleChange,values , handleSubmit, errors } = useform(validate);
  return (
    <div className='form-content-right' >
        <form className="form" onSubmit={handleSubmit}>
        <h1>
            get started with us today!
        </h1>
        <div className="form-inputs">
         <label  htmlFor="username" className = "form-label">
            username 
         </label>
         <input 
         id = "username"
         type="text" 
            name  = "username" 
            className="form-input " 
            placeholder="Enter your Username" 
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
         <label  htmlFor="email" className = "form-label">
            email
         </label>
         <input 
         id='email'
            type="email" 
            name  = "email" 
            className="form-input " 
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
             />
             {errors.email && <p>{errors.email}</p>}
           
        </div>
        <div className="form-inputs">
         <label  htmlFor="email" className = "form-label">
            password
         </label>
         <input 
         id='password'
            type="password" 
            name  = "password" 
            className="form-input " 
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange} 
            />
           {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
         <label  htmlFor="password2" className = "form-label">
            confirm password
         </label>
         <input 
         id='password2'
            type="password" 
            name  = "password2" 
            className="form-input " 
            placeholder="Enter your password"
             value={values.password2}
            onChange={handleChange}
            />
                 {errors.password2 && <p>{errors.password2}</p>}
        </div>
        
        <button  className="form-input-btn"  type="submit">sign-up</button>
        <span className="form-input-login">
             Alreay have an acount <a href = "#">here</a>
        </span>
        </form>
    </div>
  )
}

export default FormSighnup;



