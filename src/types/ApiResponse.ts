import { Message } from "@/models/User";
export interface ApiRespnse{
    success: Boolean;
    message: String;
    isAcceptingMessage?: boolean;
    messages?: Array<Message>
}