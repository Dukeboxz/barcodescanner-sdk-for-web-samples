export interface Delivery{
    
    DeliveryID: number; 
    BoxId: number; 
    LocationId: number; 
    TotalQty: number; 
    ItemCount: number; 
    PushedDate: Date; 
    AcceptedOn: Date; 
    AcceptedBy: string; 
    Complete: boolean; 
    Deleted: boolean; 

}