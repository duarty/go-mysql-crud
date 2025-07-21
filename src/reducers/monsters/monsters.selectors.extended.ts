// I'm importing the RootState type to ensure proper typing for selectors because TypeScript requires explicit typing for function parameters
import { RootState } from "../../app/store";
// I'm adding an empty line to separate imports from selector definitions for better code organization

// I'm creating a selector to get the battle winner from the extended state because components need access to the battle result
export const monsterWins = (state: RootState) => state.monstersExtended.winner; // I'm accessing the winner property from the extended reducer state
// I'm adding an empty line to separate different selector definitions

// I'm creating a selector to get the randomly selected computer monster because the UI needs to display the opponent's choice
export const selectRandomMonster = (state: RootState) => state.monstersExtended.selectRandomMonster; // I'm accessing the selectRandomMonster property from the extended state
// I'm adding an empty line to separate selector definitions

// I'm creating an alias selector for the random monster (keeping for compatibility) because other parts of the code might use this naming convention
export const randomMonsters = (state: RootState) => state.monstersExtended.selectRandomMonster; // I'm providing the same functionality with a different name for backward compatibility
// I'm adding a final empty line to follow coding standards
