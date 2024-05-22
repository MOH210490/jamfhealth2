import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import classes from "./Tagebuch.module.css";

export default function Diary() {
  const { data: session } = useSession();
  const [bloodSugarRecords, setBloodSugarRecords] = useState([]);
  const [bloodPressureRecords, setBloodPressureRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTagebuch, setActiveTagebuch] = useState(false);
  useEffect(() => {
    if (!session) return;

    async function fetchData() {
      try {
        const res = await axios.get('/api/diary');
        setBloodSugarRecords(res.data.bloodSugarRecords);
        setBloodPressureRecords(res.data.bloodPressureRecords);
        setLoading(false);
      } catch (error) {
        console.error('Ein Fehler ist aufgetreten ;(', error);
      }
    }

    fetchData();
  }, [session]);

  const handleDeleteBloodSugar = async (id) => {
    try {
      await axios.delete(`/api/blood-sugar/${id}`);
      setBloodSugarRecords(bloodSugarRecords.filter(record => record._id !== id));
    } catch (error) {
      console.error('Fehler beim Löschen ;(', error);
    }
  };

  const handleDeleteBloodPressure = async (id) => {
    try {
      await axios.delete(`/api/blood-pressure/${id}`);
      setBloodPressureRecords(bloodPressureRecords.filter(record => record._id !== id));
    } catch (error) {
      console.error('Fehler beim Löschen ;(', error);
    }
  };

  if (!session) {
    return <div className={classes.container}>Für diese Funktion brauchen Sie ein Konto ;) Melden Sie sich kostenlos an!!</div>;
  }

  if (loading) {
    return <div className={classes.container}>Laden...</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.selector}>
        <div className={`${classes.option} ${!activeTagebuch && classes.active }`} onClick={() => setActiveTagebuch(false)}>Blutzuckertagebuch</div>
        <div className={`${classes.option} ${activeTagebuch && classes.active }`} onClick={() => setActiveTagebuch(true)}>Blutdrucktagebuch</div>
        <div className={` ${classes.div} ${!activeTagebuch && classes.anime} ${activeTagebuch && classes.sel}`}></div>
      </div>
      {!activeTagebuch ? <><h1 className={classes.title}>Blutzucker-Tagebuch</h1>
      <div className={classes.table_container}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr className={classes.tr}>
              <th className={classes.th}>Datum</th>
              <th className={classes.th}>Diabetes Typ</th>
              <th className={classes.th}>Alter</th>
              <th className={classes.th}>Zustand</th>
              <th className={classes.th}>Wert</th>
              <th className={classes.th}>Einheit</th>
              <th className={classes.th}>Aktion</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
            {bloodSugarRecords.map((record) => (
              <tr className={classes.tr} key={record._id}>
                <td className={classes.td}>{new Date(record.date).toLocaleDateString()}</td>
                <td className={classes.td}>{record.diabetesType}</td>
                <td className={classes.td}>{record.age}</td>
                <td className={classes.td}>{record.condition}</td>
                <td className={classes.td}>{record.value}</td>
                <td className={classes.td}>{record.unit}</td>
                <td className={classes.td}>
                  <button className={classes.deleteButton} onClick={() => handleDeleteBloodSugar(record._id)}>Löschen</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></> : <>
      <h1 className={classes.title}>Blutdruck-Tagebuch</h1>
      <div className={classes.table_container}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr className={classes.tr}>
              <th className={classes.th}>Datum</th>
              <th className={classes.th}>Systolischer Wert</th>
              <th className={classes.th}>Diastolischer Wert</th>
              <th className={classes.th}>Gewicht (kg)</th>
              <th className={classes.th}>Größe (cm)</th>
              <th className={classes.th}>Aktion</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
            {bloodPressureRecords.map((record) => (
              <tr className={classes.tr} key={record._id}>
                <td className={classes.td}>{new Date(record.date).toLocaleDateString()}</td>
                <td className={classes.td}>{record.systolicValue}</td>
                <td className={classes.td}>{record.diastolicValue}</td>
                <td className={classes.td}>{record.weight}</td>
                <td className={classes.td}>{record.height}</td>
                <td className={classes.td}>
                  <button className={classes.deleteButton} onClick={() => handleDeleteBloodPressure(record._id)}>Löschen</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>}


    </div>
  );
}
