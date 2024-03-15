import axios from 'axios';

const tournaments = [8, 9, 17, 18, 20, 22, 23, 24, 25, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46];
let randomTournament = tournaments[Math.floor(Math.random() * tournaments.length).toString()];
console.log(randomTournament);

let responseSeason;

//Get season
const optionsSeason = {
  method: 'GET',
  url: 'https://sofascores.p.rapidapi.com/v1/unique-tournaments/seasons',
  params: {
    unique_tournament_id: randomTournament
  },
  headers: {
    'X-RapidAPI-Key': '15c6056408msh07475a71a05447dp13e074jsnb938af7a8a5f',
    'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(optionsSeason);
	console.log(response.data.data[0]);
    
    responseSeason = response.data.data[0].id;
    console.log(responseSeason);
} catch (error) {
	console.error(error);
}



//Standings
const optionsStandings = {
  method: 'GET',
  url: 'https://sofascores.p.rapidapi.com/v1/seasons/standings',
  params: {
    standing_type: 'total',
    seasons_id: responseSeason,
    unique_tournament_id: randomTournament
  },
  headers: {
    'X-RapidAPI-Key': '15c6056408msh07475a71a05447dp13e074jsnb938af7a8a5f',
    'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
  }
};

let teamName;
let matches;
let points;

try {
	const response = await axios.request(optionsStandings);
	console.log(response.data.data[0].rows.length);

    for(let i = 0; i < response.data.data[0].rows.length; i++) {
        teamName = response.data.data[0].rows[i].team.name;
        matches = response.data.data[0].rows[i].matches;
        points = response.data.data[0].rows[i].points;

	    console.log(i+1 + ". " + teamName + " - " + matches + " - " + points);
    }
} catch (error) {
	console.error(error);
}