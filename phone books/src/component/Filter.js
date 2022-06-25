
const Filter = ({type, id, value, onChange}) => {
    return(
        <div>
            <label htmlFor="searchInput">Filter shown with</label>
            <input 
                type= {type}
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Filter