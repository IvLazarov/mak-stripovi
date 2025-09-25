import { Link } from "react-router";
import membersInfo from "./membersInfo";
import LinkComponent from "../LinkComponent/LinkComponent";
import './Members.css';

const Members = () => {
    return <div className="members-container">
        <h1>Членови</h1>
        <div>
            {membersInfo.map((memberInfo) => {
                return <Link key={memberInfo.id} to={`/член/${memberInfo.id}`}>
                    {
                        memberInfo.drawnProfilePicture === null ? 
                        <img src="https://ik.imagekit.io/qxje7xjia/Profile%20Pics/member-placeholder-img.jpg?updatedAt=1758781177597" 
                        alt="placeholder-pic" 
                        style={{height: 150, width: 150}}
                        />
                        :
                        <img src={memberInfo.drawnProfilePicture} alt="member-pic" 
                        style={{height: 150, width: 150}} 
                        />
                    }
                    
                    <h3>{memberInfo.name}</h3>
                    </Link>
            })}
        </div>
        <LinkComponent />
    </div>
}

export default Members;