import { Card } from "react-bootstrap"


export default function Comment ({comment_text,created_at}){
return (
    <div className="card bg-base-100 shadow-xl">
        <div >
            {comment_text}
        </div>
        <div>
            {created_at}
        </div>
    </div>

    )    
}
