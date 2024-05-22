import { useState } from 'react';
import Link from 'next/link';
import classes from './Welcome.module.css';

function Welcome(){
    return(
        <div className={classes.signpage}>
            <div className={classes.backToHome}>
                <Link href="/">
                    Zurück zur Homepage
                </Link>
            </div>
            <div className={classes.welcomesign}>
                <div className={classes.wtext}>
                    Willkommen zu
                </div>
                <div className={classes.wtitel}>
                    JAMF Health
                </div>
                <div className={classes.wabv}>
                    Just Ask Me For Health!
                </div>
                <div className={classes.wabv}>
                    Du willst bessere Funktionen? Anmelden :)
                </div>
            </div>
        </div>
    )
}

export default Welcome;


