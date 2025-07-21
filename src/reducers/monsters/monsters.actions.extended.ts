// I'm importing Redux Toolkit functions to create actions for state management because I need to handle both sync and async actions
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
// I'm importing interfaces to ensure proper typing for action payloads because TypeScript requires explicit types for Redux actions
import { Monster } from "../../models/interfaces/monster.interface";
import { Battle } from "../../models/interfaces/battle.interface";
// I'm importing the service to make API calls for battles because actions need to call external services
import { MonsterServiceExtended } from "./monsters.service.extended";
// I'm adding an empty line to separate imports from action definitions for better code organization

// I'm creating an async thunk to handle the battle API call with automatic loading states because Redux Toolkit provides built-in pending/fulfilled/rejected states
export const fetchBattleWins = createAsyncThunk( // I'm using createAsyncThunk to handle async operations with automatic state management
  "monsters/fetchBattleWins", // I'm using this action type string for Redux DevTools identification and debugging purposes
  // I'm defining the async function that will be called when this action is dispatched because this contains the actual logic
  async ({ playerMonsterId, computerMonsterId }: { playerMonsterId: string, computerMonsterId: string }) => { // I'm typing the parameter object for type safety
    // I'm calling the battle service to get the winner from the API because the action needs to fetch data from the backend
    const battle = await MonsterServiceExtended.battle(playerMonsterId, computerMonsterId); // I'm using await because the service returns a Promise
    // I'm returning the battle result which will become the action payload because Redux Toolkit automatically wraps the return value
    return battle; // I'm returning the battle object that will be available in the fulfilled action
  } // I'm closing the async function
); // I'm closing the createAsyncThunk call
// I'm adding an empty line to separate different action definitions

// I'm creating a synchronous action to set the randomly selected computer monster because I need to update state immediately without API calls
export const setRandomMonster = createAction<Monster>("monsters/setRandomMonster"); // I'm using createAction with Monster type for the payload
// I'm adding an empty line to separate action definitions

// I'm creating a synchronous action to set the battle winner manually if needed because sometimes we might need to set the winner directly
export const setWinner = createAction<Battle>("monsters/setWinner"); // I'm using createAction with Battle type for the payload
// I'm adding a final empty line to follow coding standards
