import React, { useContext, useState } from 'react';
import '../assets/styles/pages/Login.css';
import { StartUpContext } from '../service/StartUpContext';
const Login = () => {

    const { login } = useContext(StartUpContext);
    const [userName, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const isAuthen = login(userName, password);
        if (isAuthen) {
            console.log('Ok');
        } else {
            setError('Opps...')
        }
    }
    return (
        <div className="container-login">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleLogin}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="User name / Email" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => { setPassWord(e.target.value) }} />
                        </div>
                        {error && <p>{error}</p>}
                        <button className="button login__submit" type='submit'>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}

export default Login