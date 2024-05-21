import { useState } from 'react';
import { useRouter } from 'next/router';
import classes from './Registration.module.css';
import Link from 'next/link';

function Registration() {
    const router = useRouter();

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmation: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (state.password !== state.confirmation) {
            setError("Passwords do not match");
            return;
        }

        try {
            // Check if user already exists
            const checkResponse = await fetch("/api/signedIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: state.email })
            });

            const { user_signedIn } = await checkResponse.json();
            if (user_signedIn) {
                setError("User already exists...");
                return;
            }

            // Register new user
            const response = await fetch("/api/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: state.firstName,
                    lastname: state.lastName,
                    email: state.email,
                    password: state.password
                })
            });

            if (response.ok) {
                const res = await response.json();
                console.log(res);
                e.target.reset();
                setSuccess("Registration Successful");
                router.replace("/login");
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred during registration");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes.signs}>
            <div className={classes.titel}>
                <div>Registrieren</div>
            </div>
            {/* Input Fields */}
            <div className={classes.inputbox}>
                <input 
                    type='text' 
                    name='firstName' 
                    value={state.firstName} 
                    onChange={handleChange} 
                    placeholder='Vorname' 
                    className={classes.input} 
                />
            </div>
            <div className={classes.inputbox}>
                <input 
                    type='text' 
                    name='lastName' 
                    value={state.lastName} 
                    onChange={handleChange} 
                    placeholder='Nachname' 
                    className={classes.input} 
                />
            </div>
            <div className={classes.inputbox}>
                <input 
                    type='email' 
                    name='email' 
                    value={state.email} 
                    onChange={handleChange} 
                    placeholder='Email' 
                    className={classes.input} 
                />
            </div>
            <div className={classes.inputbox}>
                <input 
                    type='password' 
                    name='password' 
                    value={state.password} 
                    onChange={handleChange} 
                    placeholder='Passwort' 
                    className={classes.input} 
                />
            </div>
            <div className={classes.inputbox}>
                <input 
                    type='password' 
                    name='confirmation' 
                    value={state.confirmation} 
                    onChange={handleChange} 
                    placeholder='Passwort bestätigen' 
                    className={classes.input} 
                />
            </div>
            {/* Error and Success Messages */}
            {error && <div className={classes.error}>{error}</div>}
            {success && <div className={classes.success}>{success}</div>}
            {/* Registration Button */}
            <div className={classes.button}>
                <button type='submit'>Registrieren</button>
            </div>
            {/* Redirect to Login */}
            <div className={classes.redirect}>
                Haben Sie bereits ein Konto?
                <Link href='/login'><div className={classes.redirector}>Einloggen</div></Link>
            </div>
        </form>
    );
}

export default Registration;
