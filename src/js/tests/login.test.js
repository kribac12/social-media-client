import { login } from "../api/auth/login";
import { save } from "../storage";

global.fetch = jest.fn();

describe("login function", () => {
  it("should store token in browser storage if login success", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: "test-token", name: "Doggy Doggo" }),
    });

    const saveMock = jest.fn();
    save.save = saveMock;
    await login("doggo@example.com", "password");

    expect(saveMock).toHaveBeenCalledWith("token", "test-token");
  });
});
