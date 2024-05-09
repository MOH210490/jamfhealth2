import { useState } from 'react';
import classes from './Header.module.css';
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";

function Header(){
    const [signedIn, setSignedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();

    const currentUrl = router.asPath;
    return (
        <div className={`${classes.header} ${menuOpen && classes.responsive_header}`}>
            <div className={classes.toplogo}>
                <div className={classes.logo}>
                    <Image src={"/images/logoo.png"} layout='fill' />
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
                            <Image src={"/svgs/home.png"} layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/" && classes.active_page}`}>Home</div>
                    </div>
                </Link>
                <Link href={"/blutzuckermesser"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/images/glucose.png"} layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/blutzuckermesser" && classes.active_page}`}>Blutzuckermesser</div>
                    </div>
                </Link>
                <Link href={"/blutdruckmesser"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/images/blood_pressure.png"} layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/blutdruckmesser" && classes.active_page}`}>Blutdruckmesser</div>
                    </div>
                </Link>
                <Link href={"/tagebuch"}>
                    <div className={classes.link}>
                        <div className={classes.icon}>
                            <Image src={"/images/book.png"} layout='fill' />
                        </div>
                        <div className={`${classes.icontext} ${currentUrl == "/tagebuch" && classes.active_page}`}>Tagebuch</div>
                    </div>
                </Link>
            </div>
            {
                !signedIn ? <div className={classes.signlinks}>
                <Link href="/registration"><div className={classes.sign}>Registrieren</div></Link>
                <div className={classes.sign}>Anmelden</div>
                </div> 
                :
                <div className={classes.right_side}>
                    <div className={classes.profile}>
                        <div className={classes.name}>
                            Abu Musa
                        </div>
                        <div className={classes.account_svg}>
                            <Image src={"/svgs/account.png"} layout='fill' />
                        </div>
                    </div>
                    <div className={classes.separator}></div>
                    <div className={classes.signout}>
                        <Image src={"/svgs/logout.png"} layout='fill' alt='image' />
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;