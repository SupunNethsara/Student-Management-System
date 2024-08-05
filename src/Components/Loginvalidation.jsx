function validation(values){
    let error= {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passowrd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email Didn,t match"
    }
    else{
        error.email = ""
    }
    if(values.password === ""){
        error.password = "password should not be Empty"
    }
    else if(!passowrd_pattern.test(values.password)){
        error.password = "password didn,t match"
    }
    else{
        error.password = ""
    }
    return error;
}
export default validation;