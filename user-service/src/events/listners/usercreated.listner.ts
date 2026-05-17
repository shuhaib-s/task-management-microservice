import { publishEvent } from "../../messages/rabitMQ/publisher";
import { EVENT_TYPE } from "../constant";
import eventBus from "../eventBus";

export const RegisterUserEventListners = async()=>{
    eventBus.on(EVENT_TYPE.USER_CREATED,async(data)=>{
        await publishEvent(EVENT_TYPE.USER_CREATED, data);
    })
    
    
}