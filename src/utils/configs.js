export const routesConfig = {
    main: '/',
    movies: '/movies',
    savedMovies: '/saved-movies',
    profile: '/profile',
    signIn: '/sign-in',
    signUp: '/sign-up',
    notFound: '/not-found',
};

export const mainApiConfig = {
    baseURL: 'https://api.nameless.nomoredomains.rocks',
    signIn: 'https://api.nameless.nomoredomains.rocks/signin',
    signUp: 'https://api.nameless.nomoredomains.rocks/signup',
    signOut: 'https://api.nameless.nomoredomains.rocks/signout',
    userData: 'https://api.nameless.nomoredomains.rocks/users/me',
    moviesData: 'https://api.nameless.nomoredomains.rocks/movies',
}

export const movieApiConfig = {
    baseURL: 'https://api.nomoreparties.co',
    getMovies: 'https://api.nomoreparties.co/beatfilm-movies',
}

export const signInErrorsConfig = {
    401: 'Вы ввели неправильный логин или пароль.',
    500: 'При авторизации произошла ошибка.',
}

export const signUpErrorsConfig = {
    409: 'Пользователь с таким email уже существует.',
    500: 'При регистрации пользователя произошла ошибка.',
}

export const profileErrorsConfig = {
    409: 'Пользователь с таким email уже существует.',
    500: 'При обновлении профиля произошла ошибка.',
    signOut: 'На сервере произошла ошибка. ',
}

export const validationConfig = {
    name: {
        pattern: /^[a-zA-Zа-яА-ЯёЁ-]+[a-zA-Zа-яА-ЯёЁ -]*$/,
        validationError: 'Имя может содержать только буквы, пробел или дефис',
        emptyError: 'Заполните это поле.',
    },
    email: {
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        validationError: 'Email введен некорректно',
        emptyError: 'Заполните это поле.',
    },
}