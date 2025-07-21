import { MonsterServiceExtended } from "./monsters.service.extended";
import { API_URL } from "../../constants/env";

global.fetch = jest.fn();

describe("Monsters Service Extended", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("should get the winner of the battle of monsters", async () => {
    const mockWinner = {
      id: "1",
      name: "Dragon",
      attack: 90,
      defense: 70,
      hp: 120,
      speed: 80,
      type: "fire",
      imageUrl: "dragon.png"
    };

    const mockResponse = {
      id: 1,
      winner: mockWinner
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await MonsterServiceExtended.battle("1", "2");

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monsterAId: 1,
        monsterBId: 2,
      }),
    });

    expect(result).toEqual({
      winner: mockWinner,
      tie: false
    });
  });

  it("should throw error when battle request fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(MonsterServiceExtended.battle("1", "2")).rejects.toThrow(
      "Failed to battle monsters"
    );
  });

  it("should convert string IDs to numbers in request body", async () => {
    const mockResponse = {
      id: 1,
      winner: { id: "1", name: "Test Monster" }
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    await MonsterServiceExtended.battle("5", "10");

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monsterAId: 5,
        monsterBId: 10,
      }),
    });
  });

  it("should handle network errors", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(MonsterServiceExtended.battle("1", "2")).rejects.toThrow(
      "Network error"
    );
  });
});
