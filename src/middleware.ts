//Protect the whole site
export {default} from "next-auth/middleware"


//Only to matching routes ca be regex

export const config = { matcher: ["/comments", "/input"]}