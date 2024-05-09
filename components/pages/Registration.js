import { useState } from 'react';
import { useEffect } from 'react';
import classes from './Registration.module.css';
import Link from "next/link"
function Registration(){
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmation: ""
    });

    const handleChangeFirstName = (e) => {
        const {value} = e.target;
        setState((prevState) => ({
            ...prevState,
            firstName: value
        }));
    }
    const handleChangeLastName = (e) => {
        const {value} = e.target;
        setState((prevState) => ({
            ...prevState,
            lastName: value
        }));
    }
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
    const handleConfirmationChange = (e) => {
        const {value} = e.target;
        setState((prevState) => ({
            ...prevState,
            confirmation: value
        }));
    }
    return(
        <div className={classes.signs}>
            <div className={classes.titel}>
                <div>Registrieren</div>
            </div>
{/*----------------------Input Felder------------------------ */}            
            <div className={classes.inputbox}>
                <input type='text' value={state.firstName} onChange={handleChangeFirstName} placeholder='Vorname' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={state.lastName} onChange={handleChangeLastName} placeholder='Nachname' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={state.email} onChange={handleChangeEmail} placeholder='Email' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='password' value={state.password} onChange={handlePasswordChange} placeholder='Passwort' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='password' value={state.confirmation} onChange={handleConfirmationChange} placeholder='Passwort bestätigen' className={classes.input}/>
            </div>
{/*----------------------Registrierung Button------------------------ */}            
            <div className={classes.button}>
                <button type='button'>Registrieren</button>
            </div>
{/*----------------------Verlinkung zum Login------------------------ */}              
            <div className={classes.redirect}>
                Haben Sie bereits ein Konto?
                <Link href='/login'><div className={classes.redirector}>Einloggen</div></Link>
            </div>
        </div>
    )
}

export default Registration;