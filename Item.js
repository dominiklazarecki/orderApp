const Item = (props) => {
    return (
        <li 
            className={props.active ? "enable" : "disabled"}
            // style={props.active ? {fontWeight: 'bold'} : {color: 'gray'}}
            
            onClick={() => props.changeStatus(props.id)}>{props.name} 
            
        </li>
    )
}