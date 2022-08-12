import { useNavigate } from "react-router-dom";

const componentStyle = {
    "width": "200px",
    "border": "4px solid",
    "margin": "10px",
    "padding": "10px"
}
const DummyCard = (props) => {
    const navigate = useNavigate()
    const navToProfile = () => {
        navigate(`/${props.tabData.owner}`)
    }
    return (
        <div style={componentStyle}>
            <p>Owner: {props.tabData.owner}</p>
            <p>Content: {props.tabData.content}</p>
            {props.tabData.owner === props.loggedInProfile.name &&
                <p>This card belongs to the current user!</p>
            }
            <button onClick={navToProfile}>View profile</button>
        </div>
    );
}
 
export default DummyCard;