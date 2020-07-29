const globalConstants = {
    iconsUrl: `${process.env.PUBLIC_URL}/assets/images/icons/`,
    triviaURL:'https://marvelheroes-1d22.restdb.io/rest/simpsons-trivia',
    triviaHighScoresURL: 'https://marvelheroes-1d22.restdb.io/rest/simpsons-highscores',
    charsTriviaURL: 'https://marvelheroes-1d22.restdb.io/rest/simpsons-chars',
    charsImagesUrl: `${process.env.PUBLIC_URL}/assets/images/chars/`,
    headers: {
        'x-apikey': '5c3f94b966292476821ca01e',
        'content-type': 'application/json',
    }
}

export default globalConstants