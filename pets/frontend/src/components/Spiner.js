import '../../src/css/Spinner.css'
import { FaSpinner} from 'react-icons/fa';
export function Spiner() {
    return (
        <div className="spinner ContainerMain">
           <FaSpinner className="spinning" size={60}/>
        </div>
    )
}
