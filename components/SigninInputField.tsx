import React from "react";

interface SigninInputFieldProps {
    id:string;
    type: "text" | "email" | "password";
    placeholder: string;
    value: string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) =>void;
    label: string;
};

const SigninInputField : React.FC<SigninInputFieldProps> = ({ id, type, placeholder, value, onChange, label }) =>{
    return(
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor={id}>{label}</label>
            <input 
                type={type}
                id={id}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default SigninInputField;