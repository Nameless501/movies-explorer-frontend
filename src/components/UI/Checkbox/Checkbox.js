import './Checkbox.css';

function Checkbox({ handleChange, id, name, title }) {
    return (
        <div className='checkbox' >
            <input
                type='checkbox'
                name={name}
                id={id}
                className='checkbox__input'
            />
            <label
                htmlFor={id}
                className='checkbox__label'
            />
            <p className='checkbox__title' >
                {title}
            </p>
        </div>
    );
}

export default Checkbox;