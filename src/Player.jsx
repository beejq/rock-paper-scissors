import ActionIcon from "./ActionIcon";

function Player({name, action="rock"}){
    return(
        <div className="player-content">
            <p>{`${name}`}</p>
            <div className="choice">
                {action && <ActionIcon action={action} size={150} />}
            </div>
        </div>
    )
}

export default Player