// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { BASE_URL } from "../constants";

export const handlers = [
    // Intercept "GET https://example.com/user" requests...
    http.get(`${BASE_URL}/users`, () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json([
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
    }),
];
