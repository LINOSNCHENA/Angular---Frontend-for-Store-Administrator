export interface Order {
    id: number;
    clientName: string;
    address: any; 
    orderStatus: number; 
  
    purchaseDate: Date; 
    description: String; 
  
    totalUnits: number; 
    unitPrice: number; 
    totalBill: number; 
  
    dueDays: number;
  }
  