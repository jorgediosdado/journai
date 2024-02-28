import { headers } from "next/headers";
import { comments } from "./data";
import { writeFile } from 'fs/promises'; // Import the fs module for file operations

export async function GET() {

  return Response.json(comments);

}

export async function POST(request: Request) {

    const comment = await request.json()
    const newcomment = {
        id: comments.length + 1,
        text: comment.text
    }   
  
    comments.push(newcomment);

    try {

        // Write the updated comments array to a file
        await writeFile('comments.json', JSON.stringify(comments));
        
        return new Response(JSON.stringify(newcomment), {
          headers: {
            "Content-Type": "application/json"
          },
          status: 201
        });
      } catch (error) {
        console.error('Error writing to file:', error);
        return new Response('Error writing to file', { status: 500 });
      }
    }



    
    // return new Response(JSON.stringify(newcomment), {

    //   headers: {
    //         "Content-Type": "application/json"
    //     },

    //     status: 201,
    // });



