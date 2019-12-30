import React from 'react'

const Form = ({ onSubmit, onChange }) => (
    <form onSubmit={onSubmit}>
        <input id="username" type="text" name="username" onChange={onChange} required />
        <input id="password" type="password" name="password"onChange={onChange} required />
        <input type="submit" value="Entrar"/>
    </form>
);

export default Form;
