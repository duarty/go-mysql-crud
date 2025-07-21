// I'm importing useEffect to handle side effects like data fetching and monster selection because React components need lifecycle management
import { useEffect } from "react";
// I'm importing useSelector to read data from the Redux store because components need access to global state
import { useSelector } from "react-redux";
// I'm importing the typed dispatch hook for dispatching actions because I need type-safe action dispatching
import { useAppDispatch } from "../../app/hooks";
// I'm importing the MonsterBattleCard component to display monster information because the battle interface needs to show monster details
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard.extended";
// I'm importing the MonstersList component to display available monsters because users need to select their fighter
import { MonstersList } from "../../components/monsters-list/MonstersList.extended";
// I'm importing the Title component for page heading because the page needs a clear title
import { Title } from "../../components/title/Title";
// I'm importing the WinnerDisplay component to show battle results because users need to see who won the battle
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay";
// I'm importing the action to fetch all monsters from the API because the page needs to load monster data
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions";
// I'm importing selectors to get monsters and selected monster from base state because I need access to core monster data
import { // I'm opening the import block for multiple selectors from the same module
  selectMonsters, // I'm importing the selector to get all available monsters
  selectSelectedMonster, // I'm importing the selector to get the player's chosen monster
} from "../../reducers/monsters/monsters.selectors"; // I'm importing from the base selectors module
// I'm importing extended actions for battle functionality because this page handles battle-specific operations
import { // I'm opening the import block for extended actions
  fetchBattleWins, // I'm importing the async action to initiate battles via API
  setRandomMonster, // I'm importing the action to set the computer's monster choice
} from "../../reducers/monsters/monsters.actions.extended"; // I'm importing from the extended actions module
// I'm importing extended selectors to get computer monster and winner because the battle page needs battle-specific state
import { // I'm opening the import block for extended selectors
  selectRandomMonster, // I'm importing the selector to get the computer's chosen monster
  monsterWins, // I'm importing the selector to get the battle winner result
} from "../../reducers/monsters/monsters.selectors.extended"; // I'm importing from the extended selectors module
// I'm importing styled components for layout and button styling because the page needs proper visual structure
import { // I'm opening the import block for styled components
  BattleSection, // I'm importing the container for the battle area layout
  PageContainer, // I'm importing the main page wrapper container
  StartBattleButton, // I'm importing the styled button to initiate battles
} from "./BattleOfMonsters.extended.styled"; // I'm importing from the local styled components file
// I'm adding an empty line to separate imports from component definition for better code organization

// I'm creating the main battle page component because this is the central interface for monster battles
const BattleOfMonsters = () => { // I'm defining a functional component using arrow function syntax
  // I'm getting the typed dispatch function to dispatch actions because I need to trigger state changes
  const dispatch = useAppDispatch(); // I'm using the custom hook that provides typed dispatch functionality
  // I'm adding an empty line to separate dispatch from selectors for better readability

  // I'm selecting the monsters list from the Redux store because the component needs to display available monsters
  const monsters = useSelector(selectMonsters); // I'm using useSelector to subscribe to the monsters array in the store
  // I'm selecting the player's chosen monster from the Redux store because the UI needs to show the player's selection
  const selectedMonster = useSelector(selectSelectedMonster); // I'm using useSelector to get the currently selected monster
  // I'm selecting the computer's randomly chosen monster from the extended store because the battle needs an opponent
  const computerMonster = useSelector(selectRandomMonster); // I'm using useSelector to get the computer's selected monster
  // I'm selecting the battle winner result from the extended store because the UI needs to display the battle outcome
  const winner = useSelector(monsterWins); // I'm using useSelector to get the battle result when available

  // I'm adding an empty line to separate state selectors from useEffect hooks for better readability

  // I'm using useEffect to fetch monsters data when the component mounts because the page needs initial data
  useEffect(() => { // I'm defining the first useEffect hook to handle component mounting side effects
    // I'm dispatching the action to load all monsters from the API because the user needs to see available monsters
    dispatch(fetchMonstersData()); // I'm calling the async action to populate the monsters list
  }, [dispatch]); // I'm including dispatch in dependencies for ESLint compliance and to avoid stale closures
  // I'm adding an empty line to separate different useEffect hooks

  // I'm using useEffect to automatically select a random computer monster when player selects because the game needs an opponent
  useEffect(() => { // I'm defining the second useEffect hook to handle automatic computer selection
    // I'm checking if a monster is selected and monsters are loaded because both conditions must be true for selection
    if (selectedMonster && monsters.length > 0) { // I'm using logical AND to ensure both values exist
      // I'm filtering out the player's monster to avoid computer selecting the same one because that would be unfair
      const availableMonsters = monsters.filter( // I'm creating a new array with available monsters
        (monster) => monster.id !== selectedMonster.id // I'm excluding the player's monster using comparison
      ); // I'm closing the filter function call
      // I'm adding an empty line to separate the filtering logic from selection logic
      
      // I'm ensuring there are available monsters for the computer to choose from because we need valid options
      if (availableMonsters.length > 0) { // I'm checking if the filtered array has any monsters
        // I'm generating a random index within the available monsters array because we want random selection
        const randomIndex = Math.floor(Math.random() * availableMonsters.length); // I'm using Math.floor and Math.random for true randomness
        // I'm getting the randomly selected monster from the available monsters because this will be the computer's choice
        const randomMonster = availableMonsters[randomIndex]; // I'm accessing the array element at the random index
        // I'm dispatching the action to set the computer's monster because the state needs to be updated
        dispatch(setRandomMonster(randomMonster)); // I'm calling the action with the selected monster
      } // I'm closing the if statement for available monsters check
    } // I'm closing the if statement for monster and array validation
  }, [selectedMonster, monsters, dispatch]); // I'm watching for changes in selected monster and monsters list because these trigger new selections
  // I'm adding an empty line to separate useEffect hooks from event handlers

  // I'm creating the click handler for the start battle button because user interactions need event handlers
  const handleStartBattleClick = () => { // I'm defining an arrow function to handle button clicks
    // I'm checking if both monsters are selected before starting the battle because both fighters are required
    if (selectedMonster && computerMonster) { // I'm using logical AND to ensure both monsters exist
      // I'm dispatching the async action to fetch battle results from the API because battles are processed server-side
      dispatch( // I'm calling dispatch to trigger the async action
        fetchBattleWins({ // I'm calling the async thunk with the required parameters
          playerMonsterId: selectedMonster.id, // I'm sending the player's monster ID because the API needs to identify the player's fighter
          computerMonsterId: computerMonster.id, // I'm sending the computer's monster ID because the API needs to identify the computer's fighter
        }) // I'm closing the parameter object for the async action
      ); // I'm closing the dispatch call
    } // I'm closing the if statement for monster validation
  }; // I'm closing the event handler function definition
  // I'm adding an empty line to separate event handlers from the render section

  // I'm rendering the complete battle page layout because this is the component's main output
  return ( // I'm starting the return statement with JSX
    <PageContainer> {/* I'm wrapping everything in the main page container for consistent layout */}
      {/* I'm displaying the main page title */}
      <Title>Battle of Monsters</Title> {/* I'm showing the page title with the Title component */}
      {/* I'm adding an empty comment line to separate different sections of the layout */}

      {/* I'm displaying the list of available monsters for selection */}
      <MonstersList monsters={monsters} /> {/* I'm passing the monsters array to the list component */}
      {/* I'm adding an empty comment line to separate the monster list from the battle section */}

      {/* I'm creating the battle section with both monster cards and start button */}
      <BattleSection> {/* I'm wrapping the battle area in a styled container */}
        {/* I'm displaying the player's monster card or empty state */}
        <MonsterBattleCard // I'm rendering the player's monster card
          monster={selectedMonster} // I'm passing the selected monster data because the card needs to display the player's choice
          title={selectedMonster?.name || "Player"} // I'm showing monster name or "Player" as fallback using optional chaining and logical OR
        ></MonsterBattleCard> {/* I'm closing the player's monster card */}
        {/* I'm displaying the start battle button with proper state management */}
        <StartBattleButton // I'm rendering the battle initiation button
          data-testid="start-battle-button" // I'm adding test ID for testing purposes because automated tests need element identification
          disabled={selectedMonster === null} // I'm disabling button when no monster is selected because battles require a player monster
          onClick={handleStartBattleClick} // I'm attaching the click handler because the button needs to respond to user interaction
        > {/* I'm opening the button content */}
          Start Battle {/* I'm displaying the button text */}
        </StartBattleButton> {/* I'm closing the start battle button */}
        {/* I'm displaying the computer's monster card or empty state */}
        <MonsterBattleCard  // I'm rendering the computer's monster card
          monster={computerMonster} // I'm passing the computer's monster data because the card needs to show the opponent
          title="Computer" // I'm showing "Computer" as the title because this represents the AI opponent
        ></MonsterBattleCard> {/* I'm closing the computer's monster card */}
      </BattleSection> {/* I'm closing the battle section container */}
      {/* I'm adding an empty comment line to separate the battle section from the winner display */}

      {/* I'm conditionally rendering the winner display only when there's a battle result */}
      {winner && <WinnerDisplay text={winner.winner.name} />} {/* I'm using logical AND for conditional rendering and passing the winner's name */}
    </PageContainer> // I'm closing the main page container
  ); // I'm closing the return statement
}; // I'm closing the component function definition
// I'm adding an empty line to separate component definition from export

// I'm exporting the component using named export for consistency with project patterns and better tree-shaking
export { BattleOfMonsters }; // I'm using named export to maintain consistency with other components in the project
// I'm adding a final empty line to follow coding standards
