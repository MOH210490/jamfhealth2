import { useState } from 'react';
import classes from './Registration.module.css';
import { useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import {signIn} from "next-auth/react";
function Login(){

    const router = useRouter();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                password: password,
                email: email,
                redirect: false
            });
            console.log(res);
            if(res.error){
                setError("Invalid Credentials..")
                return;
            }
            router.replace("/");
        } catch (error) {
            console.log(error)
        }
    }

    console.log(email)
    console.log(password)
    return(
        <form onSubmit={handleSubmit} className={classes.signs}>
            <div className={classes.titel}>
                <div>Login</div>
            </div>
{/*----------------------Input Felder------------------------ */}            
            <div className={classes.inputbox}>
                <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Passwort' className={classes.input}/>
            </div>        
            {error}
{/*----------------------Registrierung Button------------------------ */}            
            <button type='submit' className={classes.button} >Login</button>
{/*----------------------Verlinkung zum Login------------------------ */}              
            <div className={classes.redirect}>
                Haben Sie noch kein Konto?
                <Link href='/registration'><div className={classes.redirector}>Registrieren</div></Link>
            </div>
        </form>
    )
}

export default Login;