import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandLizard } from "react-icons/fa";
import { FaRegHandSpock } from "react-icons/fa";

function ActionIcon({action, ...props}){
    const icons = {
        rock: FaRegHandRock,
        paper: FaRegHandPaper,
        scissors: FaRegHandScissors,
        lizard: FaRegHandLizard,
        spock: FaRegHandSpock,
    };

    const Icon = icons[action]

    return(<Icon className='icon' {...props}/>);
}

export default ActionIcon