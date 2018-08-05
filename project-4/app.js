document.querySelector('.get-jokes').addEventListener('click',generateJokes);

function generateJokes(e) {
    e.preventDefault();
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            let output = '';

            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                })
            } else {
                output += `<li>Something went wrong</li>`;
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
}