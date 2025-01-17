import { Svix, Webhook } from "svix";
import User from "../models/User.js";

//API controller function to manage clerk user with database
 export const clerkWebhooks = async (req,res) =>{

    try {
      
        //Create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //Verifying headers
        await whook.verify(JSON.stringify(req.body,{
            "svix-id": req.headers
            "svix-timestamp":
        }))

    } catch (error) {
        
    }

 }