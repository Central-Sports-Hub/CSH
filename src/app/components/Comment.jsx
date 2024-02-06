import { Card } from "react-bootstrap"


export default function Comment ({comment_text,created_at}){
return (
    <div className="card bg-base-100 shadow-xl card-body">
        <div>
            {comment_text}
        </div>
        <div>
            {created_at.slice(0,10)} 
        </div>
    </div>

    )    
}
