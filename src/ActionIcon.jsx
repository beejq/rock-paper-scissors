import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

function ActionIcon({action, ...props}){
    const icons = {
        rock: FaRegHandRock,
        paper: FaRegHandPaper,
        scissor: FaRegHandScissors
    };

    const Icon = icons[action]

    return(<Icon className='icon' {...props}/>);
}

export default ActionIcon