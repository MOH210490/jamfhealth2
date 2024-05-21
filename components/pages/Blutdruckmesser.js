import React, { useEffect, useState } from "react";
import classes from "./Blutdruckmesser.module.css";
import axios from "axios";
import {signOut, useSession, signIn} from "next-auth/react";

export default function Blutdruckmesser() {
  const [ergebnis,setErgebnis] = useState("");
  const [step, setStep] = useState("");
  const [systolischerWert, setSystolischerWert] = useState("");
  const [diastolischerWert, setDiastolischerWert] = useState("");
  const [gewicht, setGewicht] = useState("");
  const [groesse, setGroesse] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [date, setDate] = useState("");
  const {data: session} = useSession();

  async function handleSubmit(event) {
    event.preventDefault();
    if(systolischerWert && diastolischerWert && gewicht && groesse && isSaved && date){
      try {
        const res = await axios.post('/api/bloodpressure', {
          userId: session?.user?.id,
          systolicValue: systolischerWert,
          diastolicValue: diastolischerWert,
          weight: gewicht,
          height: groesse,
          shouldBeStored: isSaved,
          date,
        });
        console.log('Data saved', res.data);
      } catch (error) {
        console.error('Error saving data', error);
      }
    }
    if(step == 0){
      setStep(1);
    }
  }

  useEffect(() => {
    if(step == 1){
      if(systolischerWert < 120 || diastolischerWert < 80){
        setErgebnis("Niedrig")
      } else if(systolischerWert < 120 || diastolischerWert < 80){
        setErgebnis("Optimal")
      } else if(systolischerWert < 130 || diastolischerWert < 85){
        setErgebnis("Normal")
      }
       else if(systolischerWert < 140 || diastolischerWert < 89){
        setErgebnis("Hochnormal")
      }
       else if(systolischerWert < 159 || diastolischerWert < 99){
        setErgebnis("Hypertonie Grad 1")
      }
       else if(systolischerWert < 180 || diastolischerWert < 110){
        setErgebnis("Hypertonie Grad 2")
      }
      } else {
        setErgebnis("Hypertonie Grad 2")
      }
  }, [step]);

  return (
    <main className={classes.background}>
      {step == 0 && <form onSubmit={handleSubmit} className={classes.container}>
        <div className={classes.title}>Blutdruckmesser</div>
        <div className={classes.all_inputs}>
          {/* Row 1 */}
          <div className={classes.row}>
            <div className={`${classes.inp} ${classes.marginRight}`}>
              <label className={classes.label}>Systolischer Wert</label>
              <input
                type="number"
                placeholder="Systolischer Wert"
                className={classes.input}
                value={systolischerWert}
                onChange={(e) => setSystolischerWert(e.target.value)}
              />
            </div>
            <div className={classes.inp}>
              <label className={classes.label}>Diastolischer Wert</label>
              <input
                type="number"
                placeholder="Diastolischer Wert"
                className={classes.input}
                value={diastolischerWert}
                onChange={(e) => setDiastolischerWert(e.target.value)}
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className={classes.row}>
            <div className={`${classes.inp} ${classes.marginRight}`}>
              <label className={classes.label}>Gewicht (kg)</label>
              <input
                type="number"
                placeholder="Gewicht in kg"
                className={classes.input}
                value={gewicht}
                onChange={(e) => setGewicht(e.target.value)}
              />
            </div>
            <div className={classes.inp}>
              <label className={classes.label}>Größe (cm)</label>
              <input
                type="number"
                placeholder="Größe in cm"
                className={classes.input}
                value={groesse}
                onChange={(e) => setGroesse(e.target.value)}
              />
            </div>
          </div>
          {/* Row 3 */}
          <div className={classes.row}>
            <input
              type="checkbox"
              checked={isSaved}
              className={classes.checkbox}
              onChange={() => setIsSaved(!isSaved)}
            />
            <div className={classes.text}>Die Daten speichern</div>
          </div>
          {/* Row 4 */}
          {isSaved && <div className={classes.row}>
            <input
              type="date"
              className={`${classes.input} ${classes.fullWidth}`}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>}
        </div>
        <button type="submit" className={classes.button}>
          Berechnen
        </button>
      </form>}
      {step != 0 && <div className={classes.container}>
          <div className={classes.title}>Ergebnis</div>
          <div className={classes.ergebnis}>{ergebnis}</div>
      </div>}
    </main>
  );
}
