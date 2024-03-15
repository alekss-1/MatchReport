import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI();

async function chatReq(req, res) {
  try {
    // Your chat request logic here
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function fetchData() {
  const options = {
    method: 'GET',
    url: 'https://sofascores.p.rapidapi.com/v1/events/data',
    params: {
      event_id: '11387487'
    },
    headers: {
      'X-RapidAPI-Key': '15c6056408msh07475a71a05447dp13e074jsnb938af7a8a5f',
      'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
    }
  };

  const incidentsOptions = {
    method: 'GET',
    url: 'https://sofascores.p.rapidapi.com/v1/events/incidents',
    params: {
      event_id: '11387487'
    },
    headers: {
      'X-RapidAPI-Key': '15c6056408msh07475a71a05447dp13e074jsnb938af7a8a5f',
      'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
    }
  };

  const statsOptions = {
    method: 'GET',
    url: 'https://sofascores.p.rapidapi.com/v1/events/statistics',
    params: {
      event_id: '11387481'
    },
    headers: {
      'X-RapidAPI-Key': '15c6056408msh07475a71a05447dp13e074jsnb938af7a8a5f',
      'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    const responseIncidents = await axios.request(incidentsOptions);
    const responseStats = await axios.request(statsOptions);

    const teamInstance = response.data;
    const incidentInstance = responseIncidents.data;
    const statInstance = responseStats.data;
    
    console.log("Received teamInstance in index.js:", teamInstance);
    console.log("Received incidentInstance in index.js:", incidentInstance);
    console.log("Received statInstance in index.js:", statInstance);

    main(teamInstance, incidentInstance, statInstance)
  } catch (error) {
    console.error(error);
  }
}

async function main(teamInstance, incidentInstance, statInstance) {
  let schema = "{write about the goal scorers, when they scored, how the game went statistic wise; only use the data that was provided, do not make anything else up; go through the game chronologically based on the incidents}"
  let message = "Write a match report. Analyse the data: " + JSON.stringify(teamInstance) + "\n"+ JSON.stringify(incidentInstance) + "\n" + JSON.stringify(statInstance) + "\n Use following schema to give your response: " + schema;
  console.log(message);
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message}],
    model: "gpt-3.5-turbo-0125",
    temperature: 1
  });

  console.log(completion.choices[0]);
} 

// Call your functions here
fetchData();
//main();
