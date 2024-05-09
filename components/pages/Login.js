import { useState } from 'react';
import classes from './Registration.module.css';
import { useEffect } from 'react';
import Link from "next/link"
function Login(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const handleChangeEmail = (e) => {
        const {value} = e.target;
        setState((prevState) => ({
            ...prevState,
            email: value
        }));
    }
    const handlePasswordChange = (e) => {
        const {value} = e.target;
        setState((prevState) => ({
            ...prevState,
            password: value
        }));
    }
    console.log(state.email);
    return(
        <div className={classes.signs}>
            <div className={classes.titel}>
                <div>Login</div>
            </div>
{/*----------------------Input Felder------------------------ */}            
            <div className={classes.inputbox}>
                <input type='text' onChange={handleChangeEmail} value={state.email} placeholder='Email' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='password' value={state.password}  onChange={handlePasswordChange} placeholder='Passwort' className={classes.input}/>
            </div>        
{/*----------------------Registrierung Button------------------------ */}            
            <div className={classes.button}>
                <button type='button'>Login</button>
            </div>    
{/*----------------------Verlinkung zum Login------------------------ */}              
            <div className={classes.redirect}>
                Haben Sie noch kein Konto?
                <Link href='/registration'><div className={classes.redirector}>Registrieren</div></Link>
            </div>
        </div>
    )
}

export default Login;