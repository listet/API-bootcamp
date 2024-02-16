// Övning 1:
// Hämta alla pokemons genom en fetch mot API'et
async function fetchPokemon() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');
        const pokemons = await response.json();

        //Rendera ut objekten en och en ut i konsollen
        console.log(pokemons)

        // Rendera ut objektens namn i DOM'en istället så de blir synliga för en användare
        let mainRef = document.querySelector('main');
        pokemons.forEach(pokemon => {
            const pRef = document.createElement('p');
            pRef.textContent = pokemon.name;
            mainRef.appendChild(pRef);
        });
    } catch (error) {
        console.error('Error fetching pokemons:', error);
    }
}
//fetchPokemon();
//let respont = await fetch(`http`)

// Övning 2:
// Hämta alla hundar genom en fetch mot API'et
async function fetchDogs() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/dogs.json');
        const dogs = await response.json();

        // Rendera ut NAMNEN en och en ut i konsollen
        dogs.forEach(dog => {
            console.log(dog.name);
        });

        // Rendera ut dem i DOM'en istället så de blir synliga för en användare
        let mainRef = document.querySelector('main');
        dogs.forEach(dog => {
            const pRef = document.createElement('p');
            pRef.textContent = dog.name;
            mainRef.appendChild(pRef);
        });
    } catch (error) {
        console.error('Error fetching dogs:', error);
    }
}
//fetchDogs()

// Övning 3:
// Hämta alla böcker genom en fetch mot API'et
async function fetchBooks() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/books.json');
        const books = await response.json();
        console.log(books);

        // Rendera ut de böcker vars sidor inte är längre än 500 pages
        const mainRef = document.querySelector('main');
        books.forEach(book => {
            if (book.pages <= 500) {
                const pRef = document.createElement('p');
                pRef.textContent = book.title;
                mainRef.appendChild(pRef);
            }
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}
//fetchBooks()

// Övning 4:
// Hämta alla besökare till ett jobb-event genom en fetch mot API'et
async function fetchVisitors() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/attendees.json');
        const visitors = await response.json();
        console.log(visitors);

        // Rendera enbart ut de som skall komma
        // attending: true
        const mainRef = document.querySelector('main');
        visitors.forEach(visitor => {
            if (visitor.attending === true) {
                const pRef = document.createElement('p');
                pRef.textContent = visitor.name;
                mainRef.appendChild(pRef);
            }
            // Rendera enbart ut de som skall komma OCH som har allergier
            if (visitor.attending === true && visitor.allergies.length > 0) {
                const pRef = document.createElement('p');
                pRef.textContent = visitor.name;
                mainRef.appendChild(pRef);
            }
        });
    } catch (error) {
        console.error('Error fetching visitors:', error);
    }
}
//fetchVisitors()

// Övning 5:
// Hämta alla pokemons genom en fetch mot API'et
async function fetchPokemons() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');
        const pokemons = await response.json();
        console.log(pokemons);

        // Skapa ett formulär där användaren kan söka efter namnet på en pokemon.
        async function searchPokemon(searchQuery) {
            const filteredPokemons = pokemons.filter(pokemon => //pokemon.name.includes(document.querySelector(#Search´).value))
                pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Render the filtered pokemons
            renderPokemons(filteredPokemons);

            document.querySelector('#searchbar').value = '';
        }

        // Presentera data om eftersökt pokemon för användaren i DOM:en.
        function renderPokemons(pokemonList) {
            const mainRef = document.querySelector('main');
            mainRef.innerHTML = ''; // Clear previous search results

            pokemonList.forEach(pokemon => {
                const pRef = document.createElement('p');
                pRef.textContent = pokemon.name;
                pokemonAPI()
                mainRef.appendChild(pRef);
            });
        }

        async function pokemonAPI() {
            let displayedPokemon = i + fetched


            for (let i = 0; i < counter; i++) {
                const listItemRef = document.createElement('li');
                listItemRef.textContent = displayedCharacters[i].name;
                listItemRef.classList.add('characters__list-item');
                listRef.appendChild(listItemRef);


                renderPokemon(displayedPokemon[i].url);
            }
        };


        // Add event listener to the search bar input
        const searchbuttonRef = document.querySelector('#searchbutton');
        const mainRef = document.querySelector('main');
        searchbuttonRef.addEventListener('click', () => {
            const searchInput = document.querySelector('#searchbar').value.trim();
            if (searchInput === '') {
                mainRef.innerHTML = '';
            } else {
                searchPokemon(searchInput);
            }
        });
    } catch (error) {
        console.error('Error fetching pokemons:', error);
    }

}
fetchPokemons()

// Leta reda på den pokemon som användaren sökt efter och gör ett nytt API-anrop på den pokemonens URL som bör finnas med från det första anropet.



// Övning 6:
// Återupprepa övning 5 men utöka den. Omedelbart efter det första API-anropet gör du ett nytt API-anrop per hämtad pokemon och försök rendera alla pokemons med mer detaljerad info direkt på skärmen på ett tillfredsställande sätt. Tex i form av cards eller dylikt.
// Hitta på någonting valfritt med APIet space
// https://santosnr6.github.io/Data/space.json
// Önskar ni ett API med specifikt tema som ni vill leka med, kan ni be mig att lösa detta. Det går jättesnabbt!