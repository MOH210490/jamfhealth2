import React, { useState } from "react";
import classes from "./Blutdruckmesser.module.css";

export default function Blutdruckmesser() {
  const [systolischerWert, setSystolischerWert] = useState("");
  const [diastolischerWert, setDiastolischerWert] = useState("");
  const [gewicht, setGewicht] = useState("");
  const [groesse, setGroesse] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  async function handleSubmit(event) {
    
  }

  return (
    <main className={classes.background}>
      <form onSubmit={handleSubmit} className={classes.container}>
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
        </div>
        <button type="submit" className={classes.button}>
          Berechnen
        </button>
      </form>
    </main>
  );
}
