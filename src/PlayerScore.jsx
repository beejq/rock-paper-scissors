function PlayerScore({name, score}){
    return(
        <div className='player-score'>
            <p>{`${name}`}</p>
            <h4>{`${score}`}</h4>
        </div>
    )
}

export default PlayerScore