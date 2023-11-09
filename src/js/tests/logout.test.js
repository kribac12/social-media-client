import { logout } from "../api/auth/logout";

// Mock complete localStorage object before tests
beforeAll(() => {
  global.localStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
});

//Clear all mocks before each test
beforeEach(() => {
  localStorage.setItem.mockClear();
  localStorage.getItem.mockClear();
  localStorage.removeItem.mockClear();
  localStorage.clear.mockClear();
});

describe("logout function", () => {
  it("should clear token and profile from browser storage", () => {
    // Call logout function
    logout();
    // Check if localStorage.removeItem was called with 'token'
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");

    //Check if localStorage.removeItem was also called with 'profile'
    expect(localStorage.removeItem).toHaveBeenCalledWith("profile");
  });
});
