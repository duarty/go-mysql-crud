import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MonsterBattleCard } from "./MonsterBattleCard.extended";
import { Monster } from "../../models/interfaces/monster.interface";

const mockMonster: Monster = {
  id: "1",
  name: "Test Monster",
  attack: 80,
  defense: 60,
  hp: 100,
  speed: 70,
  type: "fire",
  imageUrl: "https://example.com/monster.png",
};

describe("MonsterBattleCardExtended", () => {
  it("renders the monster card correctly with a monster", () => {
    render(<MonsterBattleCard monster={mockMonster} />);

    expect(screen.getByText("Test Monster")).toBeInTheDocument();
    expect(screen.getByText("HP")).toBeInTheDocument();
    expect(screen.getByText("Attack")).toBeInTheDocument();
    expect(screen.getByText("Defense")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
    expect(screen.getByAltText("Test Monster")).toBeInTheDocument();
  });

  it("renders the card with title when no monster is provided", () => {
    render(<MonsterBattleCard title="Player" />);

    expect(screen.getByText("Player")).toBeInTheDocument();
    expect(screen.queryByText("HP")).not.toBeInTheDocument();
    expect(screen.queryByText("Attack")).not.toBeInTheDocument();
  });

  it("renders the card with centralized styling when no monster is provided", () => {
    render(<MonsterBattleCard title="Computer" />);
    
    expect(screen.getByText("Computer")).toBeInTheDocument();
    expect(screen.queryByText("HP")).not.toBeInTheDocument();
    expect(screen.queryByText("Attack")).not.toBeInTheDocument();
    expect(screen.queryByText("Defense")).not.toBeInTheDocument();
    expect(screen.queryByText("Speed")).not.toBeInTheDocument();
  });

  it("displays all monster stats with correct values", () => {
    render(<MonsterBattleCard monster={mockMonster} />);

    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars).toHaveLength(4);
    
    expect(progressBars[0]).toHaveAttribute("aria-valuenow", "100");
    expect(progressBars[1]).toHaveAttribute("aria-valuenow", "80");
    expect(progressBars[2]).toHaveAttribute("aria-valuenow", "60");
    expect(progressBars[3]).toHaveAttribute("aria-valuenow", "70");
  });

  it("renders monster image with correct src and alt attributes", () => {
    render(<MonsterBattleCard monster={mockMonster} />);

    const image = screen.getByAltText("Test Monster");
    expect(image).toHaveAttribute("src", "https://example.com/monster.png");
  });
});
