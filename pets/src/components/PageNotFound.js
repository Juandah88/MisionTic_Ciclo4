import '../css/PageNotFound.css';
import Foter from './Footer';
export function PageNotFound() {
    return (
        <div>
           <h1 className="PageH1"> Page not found</h1>
           <h2 className="PageH2">404</h2>

           <img className="PageImg" src="../assets/img/perro.jpg" alt="imagen de perro"></img>

           <Foter/>
        </div>
    )
}
