import { Link } from 'react-router-dom'
import './Button.css'
export default function Button({ children, to }){
    if(to){
        return (
            <Link to={to} className='btn'>{children}</Link>
        )
    }
    return(
        <>
        <button className='btn'>{ children }</button>
        </>
    )
}