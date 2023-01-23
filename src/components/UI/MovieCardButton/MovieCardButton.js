import './MovieCardButton.css';

function MovieCardButton({ handleClick, type }) {
    return (
        <button
            type='button'
            className='card-button'
        >
            Сохранить
        </button>
    );
}

export default MovieCardButton;