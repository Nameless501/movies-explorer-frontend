import './MovieCardButton.css';

function MovieCardButton({ handleClick, typeSaved, typeDelete }) {
    return (
        <>
            {(typeSaved || typeDelete) ?
                <button
                    type='button'
                    className={`
                        card-button
                        ${ typeSaved && 'card-button_type_saved' }
                        ${ typeDelete && 'card-button_type_delete' }
                    `}
                />
                :
                <button
                    type='button'
                    className='card-button'
                >
                    Сохранить
                </button>
            }
        </>
    );
}

export default MovieCardButton;