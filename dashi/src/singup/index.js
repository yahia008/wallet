import * as yup from "yup"


const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

export const basicSchema = yup.object().shape({

    name:yup.string().min(5).required("required"),

    pasword:yup.string().min(8, "password must be at least 8 character")
    .matches(pass, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    .required("required"),

    confirmPassword:yup.string()
    .oneOf([yup.ref("pasword"), null], "password must match" )
    .required("required")
})