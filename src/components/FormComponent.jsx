import React from 'react';
import useForm from '../hooks/useForm';

const FormComponent = () => {
    const { values, handleChange, handleSubmit } = useForm(
        { username: '', password: '' },
        () => {
            console.log("Credentials: ", values);
        }
    );

    return (
        <div className="wrapper">
            <h1>Component to showcase <span>useForm</span> hook</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={values.username} onChange={handleChange} />
                </label>

                <label>
                    Password:
                    <input type="password" name="password" value={values.password} onChange={handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;