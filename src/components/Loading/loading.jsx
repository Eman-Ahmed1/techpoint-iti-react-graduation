import { TfiReload } from "react-icons/tfi";
import "./loading.css"

export default function Loading(){
    return(
        <div className="loading">
            <TfiReload className="icon"/> 
            <p>Loading products...</p>
        </div>
    )
}