import { DeliveryItem } from "./DeliveryItem";

export interface DeliveryReturn {

    acceptedItems: DeliveryItem[], 
    location: string, 
    user: string
}