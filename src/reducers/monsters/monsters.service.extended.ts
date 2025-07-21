// I'm importing the API_URL constant to build the correct endpoint URL because I need the base URL for API calls
import { API_URL } from "../../constants/env";
// I'm importing the Battle interface to ensure proper return type because TypeScript requires explicit typing for async functions
import { Battle } from "../../models/interfaces/battle.interface";
// I'm adding an empty line to separate imports from function definitions for better code organization

// I'm creating an async function to handle the battle API request between two monsters because the frontend needs to communicate with the backend
const battle = async (monsterAId: string, monsterBId: string): Promise<Battle> => { // I'm defining parameters as strings because that's how IDs come from the frontend components
  // I'm making a POST request to the battle endpoint with monster IDs because we need to send data to create a new battle
  const response = await fetch(`${API_URL}/battle`, { // I'm using template literal to construct the full URL path
    method: 'POST', // I'm using POST because we're creating a new battle resource on the server
    headers: { // I'm opening the headers object to specify request metadata
      'Content-Type': 'application/json', // I'm setting JSON content type for the request body because the API expects JSON data
    }, // I'm closing the headers object
    body: JSON.stringify({ // I'm converting the JavaScript object to JSON string because fetch requires string body
      // I'm converting string IDs to numbers because the API expects numeric IDs as specified in the backend interface
      monsterAId: Number(monsterAId), // I'm sending the first monster ID as a number using Number() conversion
      monsterBId: Number(monsterBId), // I'm sending the second monster ID as a number using Number() conversion
    }), // I'm closing the JSON.stringify call and body property
  }); // I'm closing the fetch options object
  // I'm adding an empty line to separate the fetch call from response handling

  // I'm checking if the response is successful to handle errors properly because fetch doesn't throw on HTTP error codes
  if (!response.ok) { // I'm using the ok property to check for 2xx status codes
    // I'm throwing a descriptive error if the request fails because the calling code needs to handle failures
    throw new Error('Failed to battle monsters'); // I'm providing a clear error message for debugging purposes
  } // I'm closing the error handling if statement
  // I'm adding an empty line to separate error handling from response processing

  // I'm parsing the JSON response to get the battle result because the API returns JSON data
  const data = await response.json(); // I'm using await because json() returns a Promise
  // I'm returning the battle result in the expected format because the component expects a specific interface
  return { // I'm opening the return object
    winner: data.winner, // I'm extracting the winner monster from the API response because that's the main result needed
    tie: false // I'm setting tie to false as the API doesn't support tie battles according to the backend implementation
  }; // I'm closing the return object
}; // I'm closing the battle function definition
// I'm adding an empty line to separate function definition from export

// I'm exporting the service object with the battle function for use in other modules because this follows the service pattern
export const MonsterServiceExtended = { // I'm creating a service object to group related functions
  battle, // I'm including the battle function using object shorthand property syntax
}; // I'm closing the service object and export statement
// I'm adding a final empty line to follow coding standards
