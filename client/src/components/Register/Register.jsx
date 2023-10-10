import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css';
import { UserContext } from '../../App';

function Register() {
    const context = useContext(UserContext);
    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })
    const navigate = useNavigate();

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/user/register', { ...user })
            const userResponse = res['data']['data']['user'];
            localStorage.setItem('user', JSON.stringify({ ...userResponse, token: res['data']['token'] }));
            context.setUser({ ...userResponse, token: res['data']['token'] });
            navigate('/');
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="register-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                    placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register