import {useState,useEffect, useCallback} from "react";
import validateInfo from "./validateInfo";

const useForm = ( Callback,validate)=> {
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''

    })
    const [errors , setErrors] = useState({});

    const[isSubmitting,setISSubmitting] = useState(false    )


    const handleChange = e => {
        const{ name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    setErrors(validate(values));
    setISSubmitting(true);
    
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            Callback();
        }
    },
    [errors]
    )  

    return{handleChange,values,handleSubmit,errors}
};

export default useForm;