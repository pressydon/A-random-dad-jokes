const jokeEl = document.getElementById('jokes');
const getJoke = document.getElementById('get-joke');

getJoke.addEventListener('click', generateJoke);
generateJoke();
async function generateJoke(){
    //call the joke api
    const jokeRes = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    });
   const joke = await jokeRes.json();

    //set the new joke
  jokeEl.innerHTML = joke.joke;
}