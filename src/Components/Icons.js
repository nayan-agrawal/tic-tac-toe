import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";

const Icons = ({ name }) => {
    switch (name) {
        case "cross":
            return <FaTimes className="icon" />
        case "circle":
            return <FaRegCircle className="icon" />
        default:
            return ""
    }
}

export default Icons