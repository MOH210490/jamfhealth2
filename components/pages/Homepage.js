import classes from "./Homepage.module.css";
import Link from "next/link";
import Image from "next/image";

function Homepage() {
    return (
        <div className={classes.container}>

<main className={classes.main}>
                <section className={classes.banner}>
                    <h1 className={classes.title}>JAMF Health - Dein All-in-One Gesundheitsbegleiter</h1>
                    <p className={classes.subtitle}>Starte noch heute deine Reise zu einem gesünderen Leben</p>
                    <div className={classes.bannerButtons}>
                        <Link href="/blutdruckmesser"><div className={classes.button}>Entdecke den Blutdruckmesser</div></Link>
                        <Link href="/blutzuckermesser"><div className={classes.button}>Entdecke den Blutzuckermesser</div></Link>
                    </div>
                </section>
                <section className={classes.features}>
                    <h2 className={classes.sectionTitle}>Unsere Hauptfunktionen</h2>
                    <div className={classes.featureList}>
                        <div className={classes.featureItem}>
                            <h3 className={classes.featureTitle}>Blutdruckmessung</h3>
                            <p className={classes.featureText}>Verfolge deine Blutdruckwerte und erhalte sofortiges Feedback.</p>
                        </div>
                        <div className={classes.featureItem}>
                            <h3 className={classes.featureTitle}>Blutzuckermessung</h3>
                            <p className={classes.featureText}>Behalte deinen Blutzuckerspiegel im Auge und optimiere deine Gesundheit.</p>
                        </div>
                        <div className={classes.featureItem}>
                            <h3 className={classes.featureTitle}>Gesundheitstagebuch</h3>
                            <p className={classes.featureText}>Speichere deine Werte und erkenne Trends über die Zeit.</p>
                        </div>
                    </div>
                </section>
                <section className={classes.aboutUs}>
                    <div className={classes.aboutContainer}>
                        <h2 className={classes.aboutTitle}>Über Uns</h2>
                        <div className={classes.aboutText}>
                            <p>
                                Wir bei JAMF Health glauben, dass Gesundheit Spaß machen sollte! Unsere Website ist wie ein magischer Begleiter, der dir hilft, deine Gesundheitsziele zu erreichen, ohne den Spaß zu verlieren. Egal, ob du deine Blutdruckwerte im Auge behalten möchtest oder einfach nur neugierig auf deine Gesundheit bist, wir sind hier, um dir zu helfen. Mach dich bereit, die Reise zu einem gesünderen und glücklicheren Leben anzutreten - mit JAMF Health an deiner Seite!
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage;
