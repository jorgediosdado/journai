import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"


export default async function Home() {


    const session = await getServerSession({ options })
    //Print the status of a session
    console.log(session)
    return (
        <>
            {session ? (

                <h1>Pricing</h1>   


            ) : (

                <h1>Not logged in</h1>

            )}          
            </>

    )
}
