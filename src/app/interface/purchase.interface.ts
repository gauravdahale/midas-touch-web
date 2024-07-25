export interface IPurchase {
  transaction:string;
  submitDate: Date | null;
  majMinFolioBase:string;
  folioNoFolioBased:string;
  folioBasedRedem:string;
  folioNoFolioBasedRedem:string;
  selectCanBased:string;
  mainAgentCanBased:string;
  selCanBasedRedem:string;
  mainAgentCanBasedRedem:string;
  groupNo:number;
  investor:string;
  selectPan:string;
  selectMinor:string;


  // Define nested interfaces for collections (optional)
  canBasedPayment:CanPayment[];
  folioBasedPayment:FolioPayment[];
  canBasedRedemBank:CanbasedRedemBank[];
  folioBasedRedemBank:FoliobasedRedemBank[];
  scheme:Scheme[];

}


export interface CanPayment{
  bankCanBased:string;
  payDateCanBased:Date |null;
  paymentCanBased:null;
  payRefCanBased:string;
  amountCanBased:number
}
export interface FolioPayment{
  bankFolioBased:string;
  payDateFolioBased:Date |null;
  payTypeFolioBased:string;
  payRefFolioBased:string;
  amtFolioBased:number;
}
export interface CanbasedRedemBank{
  bankCanBasedRedem:string;
}
export interface FoliobasedRedemBank{
  bankFolioBasedRedem:string;
}
export interface Scheme{
  schemeName:string;
  FolioNo:number;
  specificUnit:string;
  schemeAmt:number;
  allUnits:boolean;
}
