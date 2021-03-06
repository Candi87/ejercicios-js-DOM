// # Ejercicio 5

// Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen en los episodios lanzados en el mes de enero (el año no importa).

// Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'
'use strict';

let API_URL = 'https://rickandmortyapi.com/api/episode/';

const getCharacters = async () => {
    try {
        do {
            const { results, info } = await fetch(API_URL).then((results) =>
                results.json()
            );
            for (const result of results) {
                const date = result.air_date;
                const date1 = date.split(' ');
                if (date1[0] === 'January') {
                    const characters = result.characters;
                    for (const character of characters) {
                        fetch(character)
                            .then((response) => response.json())
                            .then((data) => {
                                const name = data.name;
                                console.log(`${date1} ${name}`);
                            });
                    }
                }
            }

            API_URL = info.next;
        } while (API_URL !== null);
    } catch (e) {
        console.error(e);
        return undefined;
    }
};
getCharacters();
