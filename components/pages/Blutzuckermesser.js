import { useEffect, useState } from "react";
import classes from "./Blutzuckermesser.module.css";
import axios from "axios";
import {signOut, useSession, signIn} from "next-auth/react";
import { useRouter } from "next/router";
export default function Blutzuckermesser() {

  const router = useRouter();
  const [ergebnis, setErgebnis] = useState("");
  const [step, setStep] = useState(0);
  const [diabetesTyp, setDiabetesType] = useState("");
  const [alter, setAlter] = useState("");
  const [zustand, setZustand] = useState("");
  const [wert, setWert] = useState("");
  const [einheit, setEinheit] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [date, setDate] = useState("");
  const {data: session} = useSession();

  const diabetesOptions = [
    { label: "Typ 1", value: "Typ 1" },
    { label: "Typ 2", value: "Typ 2" },
  ];

  const zustandOptions = [
    { label: "Nüchtern", value: "Nüchtern" },
    { label: "Nicht Nüchtern", value: "Nicht Nüchtern" },
  ];

  const einheitOptions = [
    { label: "mg/dl", value: "mg/dl" },
    { label: "mmol/l", value: "mmol/l" },
  ];

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "diabetesTyp":
        setDiabetesType(value);
        break;
      case "zustand":
        setZustand(value);
        break;
      case "einheit":
        setEinheit(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(diabetesTyp && alter && zustand && wert && einheit && isSaved && date){
        const res = await axios.post('/api/bloodsugar', {
          userId: session?.user?.id,
          diabetesType: diabetesTyp,
          age: alter,
          condition: zustand,
          value: wert,
          unit: einheit,
          shouldBeStored: isSaved,
          date,
        });
        console.log('Data saved', res.data);
      }
    } catch (error) {
      console.error('Error saving data', error);
    }

    if(step == 0){
      setStep(1);
    }
  };

  useEffect(() => {
    if(step == 1){
      if(alter >= 18){
        // Erwachsene
        if(zustand == "Nüchtern"){
          // nüchtern
          if(einheit == "mg/dl"){
            if(wert < 100){
              setErgebnis("Normal, gesunder Wert.")
            } else if(wert >= 100 && wert <= 126){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          } else {
            if(wert < 5.6){
              setErgebnis("Normal, gesunder Wert.")
            } else if(wert >= 5.6 && wert <= 7.0){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          }
        } else {
          // nicht nüchtern
          if(einheit == "mg/dl"){
            if(wert < 140){
              setErgebnis("Ihr Blutzuckerwert ist normal und gesund.")
            } else if(wert >= 140 && wert <= 200){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          } else {
            if(wert < 7.8){
              setErgebnis("Ihr Blutzuckerwert ist normal und gesund.")
            } else if(wert >= 7.8 && wert <= 11.1){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          }
        }
      } else{
        // Kinder
        if(zustand == "Nüchtern"){
          // nüchtern
          if(einheit == "mg/dl"){
            if(wert < 65){
              setErgebnis("Ihr Blutzuckerwert ist normal und gesund.")
            } else if(wert >= 65 && wert <= 100){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          } else {
            if(wert < 3.6){
              setErgebnis("Ihr Blutzuckerwert ist normal und gesund.")
            } else if(wert >= 3.6 && wert <= 5.6){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          }
        } else {
          if(einheit == "mg/dl"){
            if(wert < 80){
              setErgebnis("Ihr Blutzuckerwert ist normal und gesund.")
            } else if(wert >= 80 && wert <= 126){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          } else {
            if(wert < 4.5){
              setErgebnis("Ihr Blutzuckerwert ist normal und gesund.")
            } else if(wert >= 4.5 && wert <= 7.0){
              setErgebnis("Ihr Blutzuckerwert ist erhöht. Bitte verzichten Sie auf zuckerhaltige Nahrungsmittel und überwachen Sie Ihren Blutzucker regelmäßig.")
            } else {
              setErgebnis("Ihr Blutzuckerwert ist extrem hoch. Bitte konsultieren Sie sofort einen Arzt, um mögliche Gesundheitsrisiken zu vermeiden.")
            }
          }
        }
      }
  }
  }, [step])

  return (
    <main className={classes.background}>
      {step == 0 && <form onSubmit={handleSubmit} className={classes.container}>
        <div className={classes.title}>Blutzuckermesser</div>
        <div className={classes.all_inputs}>
          <div className={classes.row}>
            <div className={classes.inp}>
              <label className={classes.label}>Diabetes Typ</label>
              <select 
                className={`${classes.select} ${diabetesTyp === "" ? classes.graySelect : ""}`}
                name="diabetesTyp"
                value={diabetesTyp}
                onChange={handleSelectChange}
              >
                <option value="" className={`${classes.disabled} ${classes.option}`}>Diabetes Typ</option>
                {diabetesOptions.map((option) => (
                  <option className={classes.option} key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={`${classes.inp} ${classes.marginLeft}`}>
              <label className={classes.label}>Alter</label>
              <input
                type="number"
                max={100}
                placeholder="Alter"
                className={classes.input}
                value={alter}
                onChange={(e) => setAlter(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.inp}>
              <label className={classes.label}>Zustand</label>
              <select
                className={`${classes.select} ${zustand === "" ? classes.graySelect : ""}`}
                name="zustand"
                value={zustand}
                onChange={handleSelectChange}
              >
                <option value="" className={`${classes.disabled} ${classes.option}`}>Zustand auswählen</option>
                {zustandOptions.map((option) => (
                  <option className={classes.option} key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.inp} ${classes.marginRight}`}>
              <label className={classes.label}>Wert</label>
              <input
                type="number"
                placeholder="Wert"
                className={classes.input}
                value={wert}
                onChange={(e) => setWert(e.target.value)}
              />
            </div>
            <div className={classes.inp}>
              <label className={classes.label}>Einheit</label>
              <select
                className={`${classes.select} ${einheit === "" ? classes.graySelect : ""}`}
                name="einheit"
                value={einheit}
                onChange={handleSelectChange}
              >
                <option value="" className={`${classes.disabled} ${classes.option}`}>Einheit auswählen</option>
                {einheitOptions.map((option) => (
                  <option className={classes.option} key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {session && <><div className={`${classes.row} ${!isSaved && classes.adaptive_bottom}`}>
            <input
              type="checkbox"
              value={isSaved}
              className={`${classes.checkbox}`}
              onChange={() => setIsSaved((d) => !d)}
            />
            <div className={classes.text}>Den Wert im Tagebuch speichern</div>
          </div>
          {isSaved && <div className={`${classes.row}`}>
            <input
              type="date"
              className={`${classes.input} ${classes.fullWidth}`}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>} </>}
        </div>
        <button type="submit" className={`${classes.button} ${!session && classes.adaptive}`}>{session ? isSaved ? "Speichern" : "Berechnen" : "Berechnen"}</button>
      </form>}
      {step != 0 && <div className={classes.container}>
          <div className={classes.title}>Ergebnis</div>
          <div className={classes.ergebnis}>{ergebnis}</div>
      </div>}
    </main>
  );
}
