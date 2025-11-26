import { deviceAuthorizationClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/client"

export const authClient = createAuthClient({
    baseURL: "https://hellfire-cli.onrender.com/",
      plugins: [ 
    deviceAuthorizationClient(), 
  ], 
})