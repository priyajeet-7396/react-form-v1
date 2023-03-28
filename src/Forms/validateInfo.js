export default function validateInfo(values){
    let errors = {}

    // Username
    if (!values.username.trim()) {
        errors.username = 'Username required';
      }

    // email
    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
    // password
    if(!values.password){
        errors.password = "password is required"
    } else if (values.password.length < 6){
        errors.password = "Password needs to be 6 character or more"
    }
    //  confirm password 
    if(!values.password2){
        errors.password2 = "password is required"
    } else if (values.password2 !== values.password){
        errors.password2 = "passwords do not match"
    }
    return errors;
}