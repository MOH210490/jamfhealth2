import classes from "./Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <div className={classes.pageContent}>
                {children}
            </div>
            <div className={classes.marginBottom}></div> {/* Extra Platzhalter für den Abstand */}
            <footer className={classes.footer}>
                <div className={classes.footerSection}>
                    <h3 className={classes.footerTitle}>Kontakt</h3>
                    <p className={classes.footerText}>Telefon: +49 123 456789</p>
                    <p className={classes.footerText}>E-Mail: info@jamfhealth.com</p>
                </div>
                <div className={classes.footerSection}>
                    <h3 className={classes.footerTitle}>Öffnungszeiten</h3>
                    <p className={classes.footerText}>Montag - Freitag, 9:00 - 18:00 Uhr</p>
                </div>
                <div className={classes.footerSection}>
                    <h3 className={classes.footerTitle}>Unser Impressum</h3>
                    <Link href="/impressum" legacyBehavior>
                        <a className={classes.footerButton}>Impressum</a>
                    </Link>
                </div>
            </footer>
        </>
    );
}

