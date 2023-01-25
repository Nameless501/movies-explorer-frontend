import './ToggleInput.css';

function ToggleInput({ handleChange, id, name, title }) {
    return (
        <div className='toggle' >
            <input
                type='checkbox'
                name={name}
                id={id}
                className='toggle__checkbox'
            />
            <label
                htmlFor={id}
                className='toggle__label'
            />
            <p className='toggle__title' >
                {title}
            </p>
        </div>
    );
}

export default ToggleInput;