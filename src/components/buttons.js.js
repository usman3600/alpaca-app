const changeButtons = (set) => (Event) =>{
    set(Event.target.id)
}
const MakeButton = (props) =>{
    return(
        <div className="button-container">
            {Object.keys(props.location).map((key)=>{
            return (
            <button
            key={key}
            value={props.location[key]}
            className={props.giveClass && props.location[key].split("/")[2]}
            type="button"
            id={key}
            onClick ={props.func}>
                {key}
            </button>
            )
        })}
        </div>
    )
}

export {MakeButton, changeButtons}