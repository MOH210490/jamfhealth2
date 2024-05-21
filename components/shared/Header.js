import { useState } from 'react';
import classes from './Header.module.css';
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import {signOut, useSession, signIn} from "next-auth/react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(true);
    const {data: session} = useSession();
    const signedIn = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        try{
            await signOut();
            router.push("/");
        }
        catch(err){
            console.error("Error,", err);
        }
    }

    const currentUrl = router.asPath;
    return (
        <div className={`${classes.header} ${menuOpen && classes.responsive_header}`}>
            <div className={classes.toplogo}>
                <div className={classes.logo}>
                    <Image src={"/images/logoo.png"} alt='logo' layout='fill' />
                </div>
                <div className={classes.title}>
                   JAMF health 
                </div>
            </div>
            <div className={`${classes.menuOpen}`} onClick={() => setMenuOpen(d => !d)}>
                {
                    !menuOpen ? <div className={classes.opt}><Image src={"/svgs/close.png"} layout='fill' /></div> : <div className={classes.opt}><Image src={"/svgs/burger.png"} layout='fill' /></div>
                }
            </div>
            <div className={classes.links}>
                <Link href={"/"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/svgs/home.png"} alt="home" layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/" && classes.active_page}`}>Home</div>
                    </div>
                </Link>
                <Link href={"/blutzuckermesser"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/images/glucose.png"} alt='glucose' layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/blutzuckermesser" && classes.active_page}`}>Blutzuckermesser</div>
                    </div>
                </Link>
                <Link href={"/blutdruckmesser"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/images/blood_pressure.png"} alt='blood pressure' layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/blutdruckmesser" && classes.active_page}`}>Blutdruckmesser</div>
                    </div>
                </Link>
                <Link href={"/tagebuch"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/images/book.png"} alt='book' layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/tagebuch" && classes.active_page}`}>Tagebuch</div>
                    </div>
                </Link>
            </div>
            {
                !signedIn ? <div className={classes.signlinks}>
                <Link href="/registration"><div className={classes.sign}>Registrieren</div></Link>
                <Link href={"/login"}><div className={classes.sign}>Anmelden</div></Link>
                </div> 
                :
                <div className={classes.right_side}>
                    <div className={classes.profile}>
                        <div className={classes.name}>
                            {session?.user?.firstname} {session?.user?.lastname}
                        </div>
                        <div className={classes.account_svg}>
                            <Image src={"/svgs/account.png"} alt='account' layout='fill' />
                        </div>
                    </div>
                    <div className={classes.separator}></div>
                    <div className={classes.signout} onClick={handleSignOut}>
                        <Image src={"/svgs/logout.png"} layout='fill' alt='image' />
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;