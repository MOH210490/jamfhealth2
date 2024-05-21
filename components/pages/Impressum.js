import React from 'react';
import classes from "./Impressum.module.css"
import Link from 'next/link';
const Impressum = () => {
    return (
        <div className="container">
    <h1 className="title">Impressum</h1>
    <p className="content">
        Verantwortlich für den Inhalt dieser Webseite: Mariam Aly Farag, Jaden Bayot, Filip Condric, Abdulaahi Mohamed
        <br />
        Spengergasse 20
        <br />
        1050, Wien
        <br />
        bay210469@spengergasse.at
        <br />
        0667 12345678
    </p>
    <p className="content">
        Vertretungsberechtigt: Mariam Aly Farag, Jaden Bayot, Filip Condric, Abdulaahi Mohamed
    </p>
    <p className="content">
        Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Mariam Aly Farag, Jaden Bayot, Filip Condric, Abdulaahi Mohamed
    </p>
    <h2 className="subtitle">Haftungshinweis:</h2>
    <p className="content">
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
    </p>
    <h2 className="subtitle">Urheberrechtshinweis:</h2>
    <p className="content">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <h2 className="subtitle">Datenschutzerklärung:</h2>
    <p className="content">
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten im Rahmen der Nutzung unserer Webseite “JAMF Health” und der damit verbundenen Funktionen, Dienste und Inhalte auf.
    </p>
    <div className="left">
        <h3 className="subsection-title">1. Nutzung ohne Registrierung:</h3>
        <p className="content">
            Sie können unsere Webseite “JAMF Health” grundsätzlich besuchen, ohne personenbezogene Daten zu hinterlassen. Wir erheben und verarbeiten keine Einlog- oder Registrierdaten, wenn Sie die Webseite lediglich aufrufen und durchsuchen. Die Nutzung unserer Blutzucker- und Blutdruckmesserfunktion steht Ihnen ohne die Notwendigkeit einer Registrierung offen.
        </p>
        <h3 className="subsection-title">2. Freiwillige Registrierung:</h3>
        <p className="content">
            Für erweiterte Funktionen, wie das Hinzufügen der Gesundheitsdaten in ein Tagebuch, bieten wir die Möglichkeit zur freiwilligen Registrierung an. In diesem Fall erfassen wir nur die notwendigen Daten für die Registrierung, und Ihre Angaben werden ausschließlich für die angegebenen Zwecke verwendet.
        </p>
        <h3 className="subsection-title">3. Sicherheit Ihrer Daten:</h3>
        <p className="content">
            Wir versichern, dass wir Ihre Einlogdaten und Registrierdaten mit höchster Vertraulichkeit behandeln. Wir geben diese Daten nicht an Dritte weiter und verwenden sie nicht für andere Zwecke als die oben genannten.
        </p>
        <h3 className="subsection-title">4. Zweck der Verarbeitung:</h3>
        <p className="content">
            Die Verarbeitung der Daten erfolgt auf Grundlage der gesetzlichen Bestimmungen (gemäß Art. 6 Abs. 1 DSGVO) und dient der Bereitstellung der Webseite sowie der Erbringung unserer Dienstleistungen.
        </p>
        <h3 className="subsection-title">5. Speicherdauer:</h3>
        <p className="content">
            Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzlich vorgeschrieben ist.
        </p>
        <h3 className="subsection-title">6. Rechte der Nutzer:</h3>
        <p className="content">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten. Sie können der Verarbeitung Ihrer Daten widersprechen oder Ihr Recht auf Datenübertragbarkeit geltend machen. Hierfür sowie für weitere Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
        <h3 className="subsection-title">7. Änderungen der Datenschutzerklärung:</h3>
        <p className="content">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
        </p>
        <Link href={"https://www.spengergasse.at/?page_id=2029"}><div className={classes.btn}>Datenschutzrichtlinien</div></Link>
    </div>
</div>

    );
};

export default Impressum;
