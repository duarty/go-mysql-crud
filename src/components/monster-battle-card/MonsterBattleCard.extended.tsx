// I'm importing the Monster interface to define the monster prop type because I need to specify what data structure the component expects
import { Monster } from "../../models/interfaces/monster.interface";
// I'm adding an empty line to separate imports from different sources for better code organization

// I'm importing all styled components to separate concerns and keep this file focused on logic rather than styling
import {
  BattleMonsterCard, // I'm using this as the main container to wrap the entire card because it provides the base styling and layout
  BattleMonsterTitle, // I'm using this for displaying titles when no monster is selected because it has specific typography styling
  Line, // I'm using this to create a visual separator between monster name and stats because it improves readability
  MonsterContainer, // I'm using this to create a vertical flex layout for monster content because it organizes elements properly
  MonsterImage, // I'm using this to display the monster's image with proper styling because it ensures consistent image formatting
  MonsterName, // I'm using this for consistent typography styling of monster names because it maintains visual hierarchy
  ProgressBar, // I'm using this to visually represent monster stats as progress bars because it's more intuitive than numbers
  StatBox, // I'm using this to contain each individual stat (label + progress bar) because it provides proper spacing
  StatLabel, // I'm using this for consistent typography styling of stat labels because it ensures uniform text appearance
  StatsContainer, // I'm using this to contain all stats in a organized layout because it creates proper grid structure
} from "./MonsterBattleCard.extended.styled"; // I'm importing from the styled file to maintain separation of concerns
// I'm adding an empty line to separate imports from type definitions for better organization

// I'm defining the props interface to make the component flexible for both filled and empty states
type MonsterCardProps = { // I'm creating a type definition to ensure type safety and clear component API
  monster?: Monster | null; // I'm making this optional to handle empty state when no monster is selected because the component needs to work in both scenarios
  title?: string; // I'm making this optional to show custom text in empty state (e.g., "Player", "Computer") because different contexts need different titles
}; // I'm closing the type definition to complete the interface specification
// I'm adding an empty line to separate type definitions from component implementation

// I'm creating a functional component with TypeScript to ensure type safety and modern React patterns
const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => { // I'm destructuring props for cleaner code access
  // I'm checking if monster is null/undefined to render the empty state because the component needs different rendering logic
  if (!monster) { // I'm using the logical NOT operator to check for falsy values (null, undefined)
    return ( // I'm returning JSX for the empty state scenario
      // I'm rendering a centralized card when no monster is provided because empty states need different visual treatment
      <BattleMonsterCard centralized> {/* I'm passing the centralized prop to apply different styling for empty state */}
        {/* I'm using non-null assertion because title should exist in empty state scenarios */}
        <BattleMonsterTitle>{title!}</BattleMonsterTitle> {/* I'm displaying the title text with appropriate styling */}
      </BattleMonsterCard> // I'm closing the card container
    ); // I'm closing the return statement for empty state
  } // I'm closing the if statement for empty state handling
  // I'm adding an empty line to separate different logical sections

  // I'm rendering the full monster card when monster data is available because this is the main use case
  return ( // I'm returning JSX for the filled state scenario
    <BattleMonsterCard> {/* I'm using the main card container without centralized prop for normal layout */}
      <MonsterContainer> {/* I'm wrapping content in a container for proper vertical layout */}
        {/* I'm displaying the monster image with proper accessibility attributes */}
        <MonsterImage // I'm using the styled image component for consistent styling
          src={monster.imageUrl} // I'm using the imageUrl from monster data for the image source because it contains the correct path
          alt={monster.name} // I'm providing alt text for screen readers accessibility to support users with visual impairments
        /> {/* I'm closing the image element */}
        {/* I'm displaying the monster name with consistent styling */}
        <MonsterName>{monster.name}</MonsterName> {/* I'm showing the monster's name using the styled typography component */}
        {/* I'm adding a visual separator between name and stats */}
        <Line /> {/* I'm using the Line component to create visual separation and improve layout structure */}
        {/* I'm creating a container to organize all monster statistics */}
        <StatsContainer> {/* I'm wrapping all stats in a container for organized grid layout */}
          {/* I'm creating a stat box for HP (Health Points) */}
          <StatBox> {/* I'm using StatBox to contain the HP label and progress bar together */}
            {/* I'm using Material-UI variant for consistent typography */}
            <StatLabel variant="body2">HP</StatLabel> {/* I'm labeling the stat with "HP" using Material-UI typography variant */}
            {/* I'm using determinate progress bar to show exact HP value */}
            <ProgressBar variant="determinate" value={monster.hp} /> {/* I'm displaying HP as a visual progress bar for better user comprehension */}
          </StatBox> {/* I'm closing the HP stat box */}
          {/* I'm creating a stat box for Attack power */}
          <StatBox> {/* I'm using StatBox to contain the Attack label and progress bar together */}
            <StatLabel variant="body2">Attack</StatLabel> {/* I'm labeling the stat with "Attack" for clarity */}
            {/* I'm showing attack value as a visual progress bar */}
            <ProgressBar variant="determinate" value={monster.attack} /> {/* I'm displaying Attack as a visual progress bar to show relative strength */}
          </StatBox> {/* I'm closing the Attack stat box */}
          {/* I'm creating a stat box for Defense capability */}
          <StatBox> {/* I'm using StatBox to contain the Defense label and progress bar together */}
            <StatLabel variant="body2">Defense</StatLabel> {/* I'm labeling the stat with "Defense" to indicate protective capability */}
            {/* I'm displaying defense value using the same progress bar pattern */}
            <ProgressBar variant="determinate" value={monster.defense} /> {/* I'm showing Defense as a visual progress bar for consistency */}
          </StatBox> {/* I'm closing the Defense stat box */}
          {/* I'm creating a stat box for Speed attribute */}
          <StatBox> {/* I'm using StatBox to contain the Speed label and progress bar together */}
            <StatLabel variant="body2">Speed</StatLabel> {/* I'm labeling the stat with "Speed" to indicate agility */}
            {/* I'm showing speed value to complete all monster statistics */}
            <ProgressBar variant="determinate" value={monster.speed} /> {/* I'm displaying Speed as a visual progress bar to complete the stat set */}
          </StatBox> {/* I'm closing the Speed stat box */}
        </StatsContainer> {/* I'm closing the stats container */}
      </MonsterContainer> {/* I'm closing the monster container */}
    </BattleMonsterCard> // I'm closing the main card container
  ); // I'm closing the return statement for filled state
}; // I'm closing the component function definition
// I'm adding an empty line to separate component definition from export

// I'm exporting the component using named export for consistency with project patterns and better tree-shaking
export { MonsterBattleCard }; // I'm using named export to allow multiple exports from the same file if needed
// I'm adding a final empty line to follow coding standards
