
const PersonForm = ({onSubmit, newName, newNumber, handleNameChange, handleNumberChange, type}) => {
    return(
        <form onSubmit={onSubmit} >
            <div>
                name: <input 
                        value={newName}
                        onChange={handleNameChange}
                        />
            </div>
            <div>
                number: <input 
                        value={newNumber}
                        onChange={handleNumberChange}
                        />
            </div>
            <div>
                <button type={type}>add</button>
            </div>
        </form>
    )   
}

export default PersonForm