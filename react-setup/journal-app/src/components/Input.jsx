export default function Input(props) {
    return(
        <>
        <label htmlFor={props.id}>{props.label}</label>
            <input 
                id={props.id} 
                type={props.type} 
                value={props.value} 
                name={props.name} 
            />
        </>
    )
}