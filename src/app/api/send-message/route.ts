import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import {Message} from '@/models/User'

export async function POST(request:Request){
    await dbConnect()

    const {username,content} = await request.json()

    try {
        const user = await UserModel.findOne({username})

        if(!user){
            return Response.json(
                {
                    success: false,
                    message: "User Not found"
                },
                {status : 404}
            )
        }

        if(!user.isAcceptingMessage){
            return Response.json(
                {
                    success: false,
                    message: "User Not Accepting the messages"
                },
                {status : 403}
            )
        }

        const newMessage = {content,createdAt: new Date()}
        user.messages.push(newMessage as Message)
        await user.save()
        return Response.json(
            {
                success: false,
                message: "message sent successfully"
            },
            {status : 401}
        )
    } catch (error) {
        console.log("Error adding messages" , error);
        
         return Response.json(
                {
                    success: false,
                    message: "Error adding messages"
                },
                {status : 500}
            )
    }

}