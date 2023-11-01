import { login } from "../api/auth/login";
import * as storage from "../storage/save.js";

//Mocking localStorage

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.fetch = jest.fn();

describe("login function", () => {
  beforeEach(() => {
    localStorage.setItem.mockClear();
    localStorage.getItem.mockClear();
    localStorage.removeItem.mockClear();
    localStorage.clear.mockClear();
    fetch.mockClear();
  });

  it("should store token in browser storage if login success", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: "test-token", name: "Doggy Doggo" }),
    });

    // Mock save function
    jest.spyOn(storage, "save").mockImplementation((key, value) => {
      localStorage.setItem(key, value);
    });

    await login("doggo@example.com", "password");

    expect(localStorage.setItem).toHaveBeenCalledWith("token", "test-token");
  });
});
