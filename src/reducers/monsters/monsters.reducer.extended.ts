// I'm importing createReducer from Redux Toolkit to create a type-safe reducer because it provides better performance than traditional reducers
import { createReducer } from "@reduxjs/toolkit";
// I'm importing interfaces to define the state structure properly because TypeScript requires explicit typing for reducer state
import { Battle } from "../../models/interfaces/battle.interface";
import { Monster } from "../../models/interfaces/monster.interface";
// I'm importing actions to handle in this reducer because the reducer needs to respond to specific actions
import { fetchBattleWins, setRandomMonster, setWinner } from "./monsters.actions.extended";
// I'm adding an empty line to separate imports from interface definitions for better code organization

// I'm defining the extended state interface for additional monster functionality because this reducer handles battle-specific state
interface MonsterState { // I'm creating an interface to define the shape of the state object
  selectRandomMonster: Monster | null; // I'm storing the computer's randomly selected monster because the game needs to track the opponent
  winner: Battle | null; // I'm storing the battle result with winner information because the UI needs to display the outcome
} // I'm closing the interface definition
// I'm adding an empty line to separate interface from initial state definition

// I'm defining the initial state with null values to indicate no data initially because the application starts with no active battle
const initialState: MonsterState = { // I'm creating the initial state object with explicit typing
  selectRandomMonster: null, // I'm setting null because no computer monster is selected initially at app startup
  winner: null, // I'm setting null because no battle has occurred initially when the app loads
}; // I'm closing the initial state object
// I'm adding an empty line to separate initial state from reducer definition

// I'm creating the reducer using Redux Toolkit's createReducer for better performance because it uses Immer internally for immutable updates
export const monstersReducerExtended = createReducer( // I'm using createReducer to define how state changes in response to actions
  initialState, // I'm passing the initial state as the first parameter because the reducer needs a starting point
  (builder) => { // I'm using the builder pattern for type-safe action handling because it provides better TypeScript support
    builder // I'm starting the builder chain to define action handlers
      // I'm handling the setRandomMonster action to update the computer's monster because the UI needs to show the selected opponent
      .addCase(setRandomMonster, (state, action) => { // I'm adding a case handler for the setRandomMonster action
        // I'm updating the state with the randomly selected monster from the action payload because this represents the computer's choice
        state.selectRandomMonster = action.payload; // I'm using direct assignment because Immer handles immutability
      }) // I'm closing the setRandomMonster case handler
      // I'm handling the setWinner action for manual winner setting because sometimes we might need to set the winner directly
      .addCase(setWinner, (state, action) => { // I'm adding a case handler for the setWinner action
        // I'm updating the winner state with the battle result from the action payload because this represents the battle outcome
        state.winner = action.payload; // I'm using direct assignment because Immer handles immutability
      }) // I'm closing the setWinner case handler
      // I'm handling the successful completion of the fetchBattleWins async thunk because this represents a successful API call
      .addCase(fetchBattleWins.fulfilled, (state, action) => { // I'm adding a case handler for the fulfilled state of the async thunk
        // I'm setting the winner from the API response when the battle request succeeds because this is the authoritative result
        state.winner = action.payload; // I'm using the API response as the source of truth for the battle result
      }) // I'm closing the fetchBattleWins.fulfilled case handler
      // I'm handling the failure case of the fetchBattleWins async thunk because we need to handle API errors gracefully
      .addCase(fetchBattleWins.rejected, (state) => { // I'm adding a case handler for the rejected state of the async thunk
        // I'm clearing the winner state when the battle request fails because we shouldn't show stale or invalid results
        state.winner = null; // I'm resetting to null to indicate no valid battle result
      }); // I'm closing the fetchBattleWins.rejected case handler and the builder chain
  }, // I'm closing the builder function
); // I'm closing the createReducer call and the export statement
// I'm adding a final empty line to follow coding standards
