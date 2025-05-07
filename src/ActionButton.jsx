import ActionIcon from "./ActionIcon"
import App from './App.jsx'

function ActionButton({action ="rock", onActionSelected} ){
    return(
        <button className='round-btn' onClick={() => onActionSelected(action)}>
            <ActionIcon className='actionImg' action={action} size={60}/>
        </button>
    )
}

export default ActionButton