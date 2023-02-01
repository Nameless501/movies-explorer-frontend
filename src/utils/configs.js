export const routesConfig = {
    main: '/',
    movies: '/movies',
    savedMovies: '/saved-movies',
    profile: '/profile',
    signIn: '/sign-in',
    signUp: '/sign-up',
    notFound: '/not-found',
};

// export const mainApiConfig = {
//     baseURL: 'https://api.nameless.nomoredomains.rocks',
//     signIn: 'https://api.nameless.nomoredomains.rocks/signin',
//     signUp: 'https://api.nameless.nomoredomains.rocks/signup',
//     signOut: 'https://api.nameless.nomoredomains.rocks/signout',
//     userData: 'https://api.nameless.nomoredomains.rocks/users/me',
//     moviesData: 'https://api.nameless.nomoredomains.rocks/movies',
// }

export const mainApiConfig = {
    baseURL: 'http://localhost:3000',
    signIn: 'http://localhost:3000/signin',
    signUp: 'http://localhost:3000/signup',
    signOut: 'http://localhost:3000/signout',
    userData: 'http://localhost:3000/users/me',
    moviesData: 'http://localhost:3000/movies',
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