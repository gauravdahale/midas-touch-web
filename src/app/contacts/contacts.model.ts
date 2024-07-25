export interface FormData {
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  reference: string;
  event: string;
  significantDate: Date | null;
  gender: string;
  location: string;
  language: string;
  hobby: string;
  tags: string;
  notes: string;

  // Define nested interfaces for collections (optional)
  contacts: Contact[];  // Replace with your Contact interface if defined
  emails: Email[];     // Replace with your Email interface if defined
  groups: Group[];     // Replace with your Group interface if defined
  addresses: Address[]; // Replace with your Address interface if defined
  organisations: Organisation[]; // Replace with your Organisation interface if defined
  websites: Website[];   // Replace with your Website interface if defined

  individual: boolean;
  nonindividual: boolean;
  representative: boolean;
  staff: boolean;
  personal: boolean;
  office: boolean;

  agetnStatus?: string; // Optional field (can be null)
  status?: string;       // Optional field (can be null)
  mainDistributorName?: string; // Optional field (can be null)
  service?: string;       // Optional field (can be null)
  mainAgentCode?: string;  // Optional field (can be null)
  representativeNote?: string; // Optional field (can be null)
  activeStatus?: string;   // Optional field (can be null)
  euin?: string;          // Optional field (can be null)
  subAgentName?: string;   // Optional field (can be null)
  userId?: string;        // Optional field (can be null)
  password?: string;      // Optional field (can be null)
}
export interface Contact{
  mobile:string,
  type:string
}
export interface Email{
  email:string,
  type:string
}
export interface Website{
  website:string,
  type:string
}
export interface Address{
  address:string,
  city:string,
  state:string,
  country:string,
  pincode:string,
  type:string
}
export interface Organisation{
  organisation:string,
  type:string
}
export interface Group{
  mobile:string,
  type:string,
}
