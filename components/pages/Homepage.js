import classes from "./Homepage.module.css"
import Link from "next/link";
function Homepage(){
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.title}>JAMF Health - Dein All-in-One Gesundheitsbegleiter</div>
                <div className={classes.text}>
                    <p className={classes.p}>Willkommen bei JAMF Health, deinem zuverlässigen Partner für ganzheitliches Wohlbefinden. Mit unserer fortschrittlichen Plattform hast du alles, was du brauchst, um deine Gesundheit in den Griff zu bekommen und zu halten.
</p>
                    <p className={classes.p}>Egal, ob du deine Blutdruckwerte verfolgen oder deinen Blutzuckerspiegel im Auge behalten möchtest, mit JAMF Health hast du die Kontrolle. Unser benutzerfreundliches Interface ermöglicht es dir, deine Daten schnell und einfach einzugeben, während unsere intelligente Analysefunktion dir sofortiges Feedback gibt, um deine Gesundheit zu optimieren.
</p>
                    <p className={classes.p}>Mit unserem umfangreichen Tagebuch kannst du nicht nur deine aktuellen Werte speichern, sondern auch Trends erkennen und langfristige Ziele setzen. Verfolge deine Fortschritte im Zeitverlauf und erhalte wertvolle Einblicke, um fundierte Entscheidungen für deine Gesundheit zu treffen.</p>
                    <p className={classes.p}>JAMF Health ist mehr als nur ein Tracker - es ist eine ganzheitliche Gesundheitsplattform, die dich auf jedem Schritt deiner Reise begleitet. Ob du deine Daten mit deinem Arzt teilen oder einfach nur für dich behalten möchtest, mit JAMF Health bist du in besten Händen.</p>
                    <p className={classes.p}>Starte noch heute deine Reise zu einem gesünderen Leben mit JAMF Health. Denn deine Gesundheit liegt uns am Herzen.</p>
                </div>
                <Link href="/blutdruckmesser"><div className={classes.button}>Entdecke den Blutdruckmesser</div></Link>
                <Link href="/blutzuckermesser"><div className={classes.button}>Entdecke den Blutzuckermesser</div></Link>
            </div>
        </div>
    )
} export default Homepage;