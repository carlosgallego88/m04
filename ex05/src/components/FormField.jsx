function FormField(props) {
    return (
        <div className="form-field">

            <label htmlFor={props.id}>
                {props.label}
            </label>

            <input
                type={props.type}
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />

            {props.error && (
                <p className="error">
                    {props.error}
                </p>
            )}

        </div>
    );
}

export default FormField;