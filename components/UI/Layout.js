import Header from "../shared/Header";
import classes from "./Layout.module.css"
import Link from "next/link";
export default function Layout({ children }){
    return (
        <>
            {children}
            <Link href={"/impressum"}><div className={classes.impressum}>Impressum</div></Link>
        </>
    )
}