import classes from "./Blutzuckermesser.module.css"
import { useState } from "react";
export default function Blutzuckermesser(){

    const [isSaved, setIsSaved] = useState();
    const [diabetesTyp, setDiabetesType] = useState();
    const [alter, setAlter] = useState();
    const [zustand, setZustand] = useState();
    const [wert, setWert] = useState();
    const [einheit, setEinheit] = useState();

    const diabetesOptions = [
        {label: "Typ 1", value: "Typ 1"},
        {label: "Typ 2", value: "Typ 2"}
    ]

    const zustandOptions = [
        {label: "Nüchtern", value: "Nüchtern"},
        {label: "Nicht Nüchtern", value: "Nicht Nüchtern"},
    ]

    const einheitOptions = [
        {label: "mg/dl", value: "mg/dl"},
        {label: "mmol/l", value: "mmol/l"}
    ]

    const handleSelectChange = (event) => {
      setDiabetesType(event.target.value);
    };

    async function handleSubmit(){

    }


    return (
        <main className={classes.background}>
                   <form onSubmit={handleSubmit} className={classes.container}>
            <div className={classes.title}>Blutzuckermesser</div>
            <div className={classes.all_inputs}>
                <div className={classes.row}>
                    <div className={classes.inp}>
                        <label className={classes.label}>Diabetes Typ</label>
                        <select className={classes.select} value={diabetesTyp} onChange={handleSelectChange}>
                            <option value="">Diabetes Typ</option>
                            {diabetesOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`${classes.inp} ${classes.marginLeft}`}>
                        <label className={classes.label}>Alter</label>
                        <input type="number" max={100} placeholder="Alter" className={classes.input} value={alter} onChange={(e) => setAlter(e.target.value)} />
                    </div>
                </div>
                <div className={classes.row}>
                <div className={classes.inp}>
                        <label className={classes.label}>Zustand</label>
                        <select className={classes.select} value={zustand} onChange={handleSelectChange}>
                            <option value="">Zustand auswählen</option>
                            {zustandOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={`${classes.inp} ${classes.marginRight}`}>
                        <label className={classes.label}>Wert</label>
                        <input type="number" placeholder="Wert" className={classes.input} value={wert} onChange={(e) => setWert(e.target.value)} />
                    </div>
                    <div className={classes.inp}>
                        <label className={classes.label}>Einheit</label>
                        <select className={classes.select} value={diabetesTyp} onChange={handleSelectChange}>
                            <option value="">Einheit auswählen</option>
                            {einheitOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={classes.row}>
                    <input type="checkbox" value={isSaved} className={classes.checkbox} onChange={() => setIsSaved(d => !d)} />
                    <div className={classes.text}>Den Wert im Tagebuch speichern</div>
                </div>
                <div className={classes.row}>
                    <input type="date" className={`${classes.input} ${classes.fullWidth}`} />
                </div>
            </div>
            <button type="submit" className={classes.button}>Berechnen</button>
        </form>  
        </main>
    )
}