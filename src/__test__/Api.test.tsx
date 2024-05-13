import { BASE_URL } from "../constants";

it("fetches the user info", async () => {
    const response = await fetch(`${BASE_URL}/users`);

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual([
        {
            email: "Sincere@april.biz",
            id: 1,
            name: "Leanne Graham",
        },
        {
            email: "Shanna@melissa.tv",
            id: 2,
            name: "Ervin Howell",
        },
        {
            email: "Nathan@yesenia.net",
            id: 3,
            name: "Clementine Bauch",
        },
    ]);
});
