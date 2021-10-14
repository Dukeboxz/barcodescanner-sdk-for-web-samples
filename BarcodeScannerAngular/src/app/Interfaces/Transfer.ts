import { Sample } from "./Sample";

export interface Transfer {

    TransferId: number
    ScannerGeneratedId: string; 
    FromLocationId: number; 
    ToLocationId: number; 
    CreatedBy: string; 
    Samples: Sample[]

}