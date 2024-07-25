import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EditReferenceComponent} from '../edit-reference/edit-reference.component';
import {EditLanguangeComponent} from 'src/app/edit-languange/edit-languange.component';
import {EditLocationComponent} from 'src/app/edit-location/edit-location.component';
import {EditTagComponent} from 'src/app/edit-tag/edit-tag.component';
import {FormBuilder, FormArray, FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {TitleCasePipe} from "@angular/common";
import {ContactsService} from "../contacts.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
    organisationControl = new FormControl('')
    organisationTypeControl = new FormControl('')
    websiteControl = new FormControl('')
    websiteTypeControl = new FormControl('')
    formGroup: FormGroup
    Prefix: string[] = ['Advocate', 'CA', 'Dr', 'M/S', 'Master', 'Miss', 'Mr', 'Mrs', 'Shri', 'Smt', 'Master', 'Solicitor'];

    Occupation: string[] = ['Bussiness', 'Goverment Service', 'House wife', 'Others', 'Private Sector Service', 'Professional Service', 'Professional', 'Public Sector Service', 'Retired', 'Self Employed', 'Student']

    Organization: string[] = ['Home', 'Office', 'Other', 'Overseas', 'Work'];

    Mobile: string[] = ['Home', 'Landline', 'Office', 'Other', 'Overseas', 'TollFree', 'Work'];
    Email: string[] = ['Home', 'Office', 'Other', 'Overseas', 'Work'];

    Reference: string[] = [
        '360 One AIF Service', '9 Bussiness Bay', 'A K Capitak RM', 'Aawaass', 'Aawaass Scociety Gsndhi Nagar', 'Abhijeet Patil', 'Abhishek Bhatt', 'Abhiskek Kasalkar', 'Abhishek Securities  Unlisted Shares', 'ABSL MF Ex RM', 'ABSL MF Head', 'ABSL MF RM', 'Achalgauth Jain Sangh', 'Aditi Mayur shah', 'Aditya Birla Capital General Insurance', 'Aditya birla Insurance Brokers', 'Aditya Timber', 'Advocate Gandhinagar Manjula Fui', 'Agreement With Registration', 'Airtel', 'Airtel Complaints', 'Ajay Suresh Jadhav', 'AJJAS GPS System Installation', 'AJJS GPS Tracker System for two wheelers', 'Akshay Sallian', 'Alpa',
        'Alpesh Rathod', 'Ambition', 'Amee Joshi', 'Amey Gautam Shah', 'Amit Bhagwe Yogesh Muley', 'Amita', 'Amol Thor', 'Ananda Sharma', "Anil Bhatia's Friend", 'Anil Kapoor', 'Anil Sharma Jitendra Chablani', 'Ankit Maru', "Ankit Marus's Friend", "Ankit Parekh", "Ankit's Brotherinlaw", "Ankit's Fatherinlaw", "Anupama Stationary Met in Cairns Australia", "Arham Travels", "Arundhati Patil", "Arunkumar Rai", "Asclepius Wellness P.L. Ashok Bamugade", "Ashish Dedia's Brother", "Ashok Bamugade", "Ashok Chheda Daughter", "Ashok Mayekar", "Assistant Manaeger Axis Bank", "Atharva College", "Atharva College ECS", "Atharva College ELEC", "Atharva College EXTC",
        "Atharva College HAS", "Axis MF Back Office", "Axis MF Channel Head", "Axis MF RM", "Badshah Masala", "Bajinath Kumar Patel", "Bajaj Ex MF RM", "Bajaj FD Document Pickup", "Bajaj FD Related Queries", "Bajaj FD Service Related Queries", "Bajaj MF RM", "Bandhan MF Ex RM", "Bandhan MF RM", "Bandhan RM - Retail Sales", "Baroda", "Bhajiwala", "Bhajiwala Opp.Raj Manor", "Bhajiwala Station", "Bhakti Pratik Maru's Sister", "Bharat Kanakia", "Bharat Tank", "Bharti Praful Gada's Brother", "Bhavesh Parmar", "Bhavna", "Bijal Vadhani NIIT", "Bijal Vadhani's Husband NIIT", "Bindu Decor", "Biren Bheda's Sister", "Blood donation Camp Malad", "BNP MF Ex RM",
        "BNP MF RM", "BOI MF AVP Sales", "Brijesh Mehta", "Byomasi", "C/508 Jaswanti Allied", "C509", "CA", "CA Dhimant Chheda", "CA Harakchand Gada", "Cake", "Canara MF Back Office", "Canara MF Ex RM", "Canara MF Head", "Canara MF Head Sales", "Canara MF RM", "Canara Robeco Backoffice", "Car Mechanic Near Raj  Manor", "Carpenter Vinay Sagar", "CEO Finance Peer", "CFP", "Chair Repair", "Chaitali Ganjawala", "Champion Biscuit Jigar Vaid", "Chaandra Prabh", "Chandrashekhar Ghag", "Checkmate Challengers", "Checkmate Computers", "Chetan Mahesh Parmar", "Chetan Meheta Gurukul", "Child Specialist", "Chirag Haria", "Chirag Joshi", "Chittranjan Waikul", "Client KP", "Client SS", "Client SS Bawre Dubai", "Clive Aranha", "Club Mahindra", "Club Mahindra Gir", "Club Mehendra Membership Bookings", "Club Mahindra Tropicana Alibaug", "Cnergyis", "Cooconut Seller Raj Manor", "Codestrela Technologies.Pvt.Ltd.Devlopement Team", "Codestrela Technologies Pvt.Ltd.Ref Nitin Shetty Sudhir Bafna",
        "Computer", "CTL Backoffice", "Customer Care", "Customer ID:16178533", "D.J.Properties Nitin Dedhai's Brother", "Darshana Ishwar (Changdai)", "Darshana's Husband Piyush Shah's Sister", "Datacom Backoffice Technical", "Datacom Insurance Software", "Datacomp Backoffice", "Datacomp Ex RM", "Deepa Bharat Shah", "Deepak Desai For Dholera", "Deepak Nair", "Dehydrated Food Products M/s. Khushi Foods BNI Ref Jayesh", "Dentist", "Deolali", "Deraser KVO Malad", "Devang Desai", "Dharmesh Nagar", "Dharna", "Dhiraj Gala", "Dhiren Jagani", "Dhiren Vallabhji Shah", "Dhirubhai Ambani", "Dhirubhai Desai", "Dholera", "Dholera Ref Dipak Desai", "Diana Dsouza", "Dinesh Champaneria", "Dinesh Gogri", "Dinesh Goshar", "Dinesh Ratanji Champaneria", "Dipti Kokate", "Divya Devyani", "DM Cardiologist", "Dr Bharat Gala", "Dr Lai Sangoi Clinic", "Driver PJSHAH", "Driving scholl", "DryFruits", "DSP MF Back Office Client Service", "DSP MF Ex RM", "DSP MF Facebook", "DSP MF Social Media MArketing", "DSP MF Vice President Sales", "Dubai PJ Shah Relative", "Dudhwala", "Dudhwala Paneer", "Duke Creek Jignesh Sanghani", "E/403,Aawaas Gandhinagar", "Edelweiss MF Ex RM",
        "Edelweiss MF Senior Bussiness Manager", "Edwin Mecwan", "Edwin Mecwan Care Health Insurance Branch Manager", "Elaisha Kotian", "Elley Switches", "Emkay Backoffice", "Emkay Global", "Emkay Global DP", "EMudhra Digital Signature", "Endocrinenologists", "ENT Specialist", "EPABX OFFICE", "Estate Agent Ghatkopar", "Ex CBI Office Ref Piyush Shah", "Ex RM ICICI Prulife", "Ex RM Prinicipal", "Ex Staff", "Eye Surgen,Borivali", "Falguni Chitali", "Fayyaz Ahemd", "FD", "FD Backoffice", "Fixed Deposit", "Flags", "Food in Train", "For Stamp Paper Requirement Ref Manohar Petkar", "Forum Bhatt", "Forum's Husband", "FPSB", "Franklin MF Ex RM", "Franklin MF RM", "Franklin Templeton", "Fruitwala", "Fruitwala Station", "Fundexpert RM", "Gada Maternity Hospital", "Gala Batteries Malad", "Gandhinagar Aawass Neighnour", "Ganesh Amraj", "Ganesh Badguraj", "Ganesh Kumar", "Ganesh Nathun Kumar", "Garden View", "Gas Mechanic", "Geeta Pai", "Gem Tours", "Ghatkapor", "Girish Keshavji Dedhia", "Girnar Junagadh", "Godhra", "Godrej FD Backoffice", "Groww MF RM", "Guruji", "Gurukul", "Hansaben USA", "Hardik Shah Backoffice", "Hardik Shah's Sons", "Hardik Sodhan Shah", "Harsh Mehta", "HDFC Brancj Bank Manager", "HDFC Bank Credit Card", "HDFC Bank Ex RM", "HDFC Bank Head", "HDFC Bank Imperia RM", "HDFC Bank Imperia Head", "HDFC Bank Salary account", "HDFC Bank Supervisor to RM",
        "HDFC Ergo RM Landmark", "HDFC Ex Branch Manager", "HDFC FD Back Office", "HDFC MF RM", "Heena Kalpesh Dedhai's Father", "Hemal", "Herpes Cure", "Hiral Desai's Brother", "Hiral Gohil", "Hiral Joshi", "Hiring Drivers", "Hiten's Sister", "Hitesh Stores", "HKSavla Gandhinagar Autowala", "Homiopathy", "HSBC Bank", "HSBC Cheif Minister Distribution Officer", "HSBC MF Reginal Head Mumbai & Maharashtar1", "HSBC MF RM", "Hyderabad", "ICI MF", "ICICI MF Ex RM", "ICICI MF RM", "ICICI Prudential LIC Ex Regional Manager", "ICICI Prulife Associate Vice President", "ICICI Prulife Branch Manager", "ICICI Prulife Ex Associate Regional Manager", "ICICI Prulife Ex Head", "ICICI Prulife Ex RM", "ICICI Prulife Investment Specialist", "ICICI Prulife Manager", "ICICI Prulife RM", "Idliwala", "Idris Jariwala", "IFA", "IFA B2B Aceinvest.in", "IFA Bhavesh Cousin Raj Manor", "IFA DSP MF", "IFA FIFA", "IFa Jaswanti Allied C415", "IFa Kotak Life", "IFA Kotak Life Goregaon sports Club", "IFA L&T Malad Sernet", "IFA Mahindra", "IFA Mahindra MF", "IFA Naik Wealth", "IFA Nippon Macau", "IFA Planet", "IFA SOFP", "IFA Stategic Alliance", "IFANOW", "Ignite Mosaic Bada Bussiness", "IIFL Accountant", "IIFL Backoffice", "IIFL Head", "IIFL Manager", "IIFL RM", "IIFL Securities Pickup Boy",
        "Innovative Technlogies Backoffice", "Innovative Agent Baroda", "Interior Ref Bharat Tank", "International Infovom Technologies Pvt.Ltd Founder Ref", "International Infocom Technologies Pvt.Ltd.GM Ref", "Internet Hosting Ref Pinnacle", "Internet Websight", "Invesco MF Ex RM", "Invesco MF RM", "Investwell", "Iron Cloths", "Ishwar Punjwani", "ISO", "ITI MF AVP Retail RM", "J C Optician", "Jabalpur", "Janvi Patel", "Jasmin Sawal", "Jaswani Allied", "Jaswanti allied Society Office", "Jati Navin Vora", "Jayant Gandhi Office", "Jayant Gandhi Daughter NKSHAH MEdiclaim", "Jayant Laxmichand Shah's Cousine", "Jayesh Kantilal Shah", "Jaywant Keny", "Jeet Parekh", "Jeevan Kalekar Cnergyis", "Jesal Mehta's Uncle", "Jigar Vaid", "Jigna's Father Deolali Meghchhaya", "Jignesh Chitnis", "Jignesh Sanghani", "Jinesh Dholakia", "Jinesh Enterprises Tally", "Jitendra Chablani", "JM Financial Assistant Vice President", "JM Financial Backoffice", "JM Fianancial Head", "JM Financial MF Cluster Head Partner Solution Group", "Jogeshwari", "Jogeshwari Acchalgatch Head Partner Solution Group", "Jogeshwari", "Jogeshwari Acchalgatch Jain Bhavan", "Juliana Dsouza", "Kalpesh Makwana", "Kalyan", "Karvy", "Karvy Back Office", "Karvy Office", "Kaushik Ghatalia", "Kaushik Ghatalia Back Office",
        "Kaushik Ghatalia Ex Back Office", "Kaushik Ghatalia Office Boy", "Kaushik Ghatalia Wall Sheets", "Kaustubh Gawankar Office", "Kavita Kapure", "Kavita Parmar", "Ketan Mauwala", "Keval Dedhia", "Keval Dedhia's Father", "Kfintech Backoffice", "Kfintech Borivali", "Khakra", "Khakra Aata", "Khambhat", "Kirti Bhatt", "Kirti Rahul Patil", "Kolkata Minature Sheets", "Kotak Life", "Kotak Life Ex Head", "Kotak Life Ex RM", "Kotak Life Manager", "Kotak Life R & d Manager Sales Tied Agency", "Kotak MF Ex RM", "Krutika Gala Friend", "Kulvindersingh Gabadia", "Kunal Turakhla", "Kunthu Ratna Auto Jupiter", "Kutch Mandvi", "Kutch Yuvak Sangh Blood Requirement", "Kuvindesingh N Gabadia", "L & T Ex RM", "Ladderup Estate Planning", "Lakshmi Patil", "Landmark Claim Team RM", "Landmark Ex RM policyboss.com", "Landmark Forum", "Landmark Manager", "Landmark Mananger policyboss.com", "Landmark Motor RM", "Landmark President policyboss.com", "Landmark Renewal RM", "Landmark RM", "Landmark Secretary to President", "Landmark Support policyboss.com", "Laser Toner Cartidges & Refilling", "Laxmi Stores Next to Rambharose Bhajiwala", "LG Washing Machine Mechanic", "Liberty General Head Landmark", "Liberty General RM Landmark", "LIC MF Ex RM", "Link Road", "Linkway Estate Society Manager", "Liquiloans AVP Financial Strategic Alliances & Partnerships", "Liquiloans Backoffice", "Liquiloans Founder Member", "Liquiloans Office Growth", "Liquiloans Product Manager",
        "Liquiloans RM", "Liquiloans Senior Manager Strategic Alliance & Partnerships", "Liquiloans Strategic Alliance & Partnerships", "Lonavala", "Maharaja Apartment", "Mahavir Steel Natraj S.V.Road", "Mahavir Xerox", "Mahindra MF Back Office", "Mahindra MF CMO", "Mahindra MF Compliance", "Mahindra MF Head", "Mahindra MF Other RM", "Mahindra MF Other RM", "Mahindra MF Regional Head Mumbai", "Mahindra MF RM", "Maid Ghatkopar", "Mailback Service", "Mailback Services", "Mamlatdarwadi", "Mandar Bhosale", "Mandeshi Mahila Bank", "Manikant Mama", "Manohar Panhalkar", "Marve Road Khakhera", "Mayur Hemchand Shah", "Mayur Rupani", "Mayur Shah", "Mayur Shah ShivjiBhai", "Mayur's Cousine Nagpur", "MD", "Meenal Momaya", "Mehul Chitalia", "MFU", "MFU Backoffice", "MFU CEO", "MFU CTO", "MFU ECAN POS Cams KArvy", "MFU Ex CEO", "MFU Head", "MFU IT", "MFU Manager", "MFU OPeration Head", "MFU Operations", "MMFU RM", "Microsoft", "Microsoft Windows Trainer", "Milan Mehta", "Milind Chopdekar", "Milk Man", "Minority Card", "Mirae MF Ex RM",
        "Mirae MF Head", "Mirae MF RM", "Mitesh Sanghrajka", "Mittal College", "Mitul Shah", "MLA Alibagh Ref Ashok Bamugade", "MMFSL Ex RM", "MMFSL Mumbai Head", "Mobile Indraprast Sonal", "Mochi", "Mohan Hair Saloon", "Mohan lyre", "Money Mart", "Money Mart Backoffice", "Mota Chips", "Motilal Ex RM", "Motilal FS Ex RM", "Motilal MF Ex RM", "Motilal MF Head", "Motilal MF Head Sales Distribution", "Motilal MF RM", "Motilal MF RM Debt", "Motilal MF Senior Group Vice President Sales & Distribution", "Motilal PMS Ex RM", "Mumbai Grain", "Mumbai Grain BackOffice", "Mumbai Grain Dealers", "Mundra", "Nagpur", "Nagpur Nova Travels Ref Mayur H Shah", "Name Plate Ref Rajesh Chitalia", "Naren Gupta", "Narendra Gupta", "Natraj Market", "Navneet Pachigar", "NAvrang Innovations Acrylic Sheets", "NDML Back Office", "NDML Back Office Senior", "New Corporate Plaza", "Network Dineshbhai's Cousin", "Network FP", "Neurologist", "News Paper Vendor", "Nexgen AAFM", "NGEN Market Ressearch", "NGEN Research", "NIIT", "NIIT Coordinator", "Nikhil Mehta", "Nilesh Lakhani Office", "Nippon MF Backoffice", "Nippon MF Ex RM", "Nippon MF Ex Senior Regional Head IFA & ND", "Nippon MF RM", "Nippon MF Senior Regional Manager", "Nirav Kuber", "Nirmala Shah", "Nitin Kadam", "Niva Bupu RM Landmark", "NKSHAH Property given on Rent", "Notary Advocate High Court", "Office 39 Solutions", "Office Stationary", "Old Car Sale Ref Nirav Mota", "Old Computer Buyer ref Naresh Popat Checkmate Computers",
        "ONEX Air Conditioner Services AC", "Online Legal For Class 35", "Online Legal India Trademark Copyrights", "Online Legal Trademart Copyrights Hearing", "Orlem Service Center", "Orthopedic", "Orthopedic surgen", "OTA", "OTA Delhi", "OTA Sharekhan", "OTA XLT Instructor", "Owner Gem Tours", "P J Shah's Friend", "P.D.Jain & Co.Mayur Shah", "Painter Vinay Sagar", "Pankaj Kagathra", "Pankil Matalia's Brother", "Parag Tarpe", "Parag Tiles Kalpesh Unadkat", "Paresh's Jijaji Deolali", "Pathology Laboratory", "Paul Shetty", "Person to take care of old People", "Pesticide", "Pfizer", "PGIM MF Back Office", "PGIM MF CEO", "PGIM MF Director & Head Sales", "PGIM MF Heading Retail", "PGIM MF Retail Sales Product & Natinal Alliances", "PGIM MF RM", "Physiotherepiast Client SS", "Pinnace Sysytems IT Solutions Computer", "Piper Serica Advisor Pvt.Ltd.Head", "Piper Serica Advisor Pvt.Ltd.RM", "Piper Serica Advisor Pvt.Ltd.Head.Nikhil Mehta", "Piyush Bhupendra Mehta", "Piyush M. Shah's Advocate", "Piyush Shah", "Piyush Shah's College Friend", "Piyush Shah's Friend", "Piyush Shah's Mami", "Piyush Shah's Sister", "PJ Shah Partner", "PJ Shah's CA", "Plumber", "Plumber Vinay", "PNB Housing Finance", "Pooja Velapirkar", "Poonam Gala Poonam's Friend", "Poonam's Friend Ghatkopar", "POP Roof Vinay Sagar", "Popatlal Shah", "PPFAS MF Back Office", "PPFAS MF Back Office (Andheri)", "PPFAS MF Back Office (Nariman Point)", "PPFAS MF Front Office Team RM", "PPFAS MF RM",
        "Prachi Mehta", "Prakash Gada", "Prakash Jain", "Prakash Mistry", "Prakash Sawant", "Prakash Singh", "Prasad Rajappan's Partner", "Prashant Mewada", "Pratik Maru", "Pratik Maru's Cousin", "Pratiksha Tondwalkar", "Pravin Maru", "Pravin Vora", "Pravinbhai Cousin", "PravinBhai's Jijaji", "Pravinbhai's Sister", "Premal Mehta", "Prince Group", "Priti Chawda", "Pyramid Certification ISO Backoffice", "Quantam", "Radiogolist", "Rahul Patil", "Railway Ticket Mulund", "Railway Ticket Sonal Jayesh Shah", "Raj Computers", "Raj Kava Office", "Raj Manor", "Raj Manor Society Manager", "Rajabhau Kalsait", "Rajen Gala", "Rajesh Desai", "Rajkumar Doshi's Brother", "Rajmanor", "Ram Ice Cream", "Ramchandra Humane", "Ranka Digital,Jayesh Rathod", "Rasoiwalaben", "Ravi Nichani", "Ravi Sharma", "Red Moments", "Ref: Manish Saiya", "Ref Arvind Visaria For Accupuncher", "Ref Jignya Jiger Vaid", "Ref Netra Uday Subhedar", "Ref Piyush Shah Immitation 9 Bussiness Bay", "Regency Plaza", "Registration Of Will", "Reliance Energy", "Repairs Washing Machine", "Rhythm Vaishali Shopping Center", "Ripesh Computer", "RM National Insurance Co.Ltd", "Rock Band Cloths", "Rock Brand Clothing Ref Shaileshbhai", "Ronak lyre", "Roshni", "Ruchita Gupta's Husband", "Scahin Shirodkar", "Salat Technologies CRM Software", "Samco Back Office", "Samco MF Ex RM", "Sameer Ghoshar", "Sameer More Cnergyis", "Samiksha Laboratory", "Sandeep Dhruva", "Sangai Foundation Trust Shri Shyam Sunder Sangai",
        "Sanjay Colurwala", "Sanjay Gupta Driver", "Sanjay Gupta Servent", "Sanjay Shah", "Sanket Savla", "Sanket Sawla", "Sapna Chopra", "Sapphire", "Satush Bhanse", "Satish Shirodkar", "SBI MF Back Office", "SBI MF Head", "SBI MF RM", "Sejal Vichare", "Shailesh P Shah's CA", "Shailesh Prataprai Shah", "Shailesh Kumar Sheth", "Shalini Desai's BrotherInLAw Ahemdabad Wipro", "Shantilal Haria", "Sharda", "Sharekhan Ex RM", "Sharekhan RM", "Sharvari Shitkar", "Shirish Bade", "Shivangs Father", "Shobana Poonam's Friend", "Shobhawat", "Shree Adeshwar Forex Pvt.Ltd", "Shree Dattaguru Restaurant Onthe way to Alibaug", "Shree KVO Malad Kutchi Jain Yuvak Samaj", "Shree Yantra", "Shreenath Hyundai Service Center", "Shriram MF RM", "Shruti Abhijeet Patil", "Silicon India Magzine", "Shital Gala's Father", "Siya Karia", "SMS <eter Reading", "Snacks & Tea Jaswanti Allied", "Snehal Shah Chandraprabh", "Sofawala", "Software", "Sohil Gogri", "Sonal Jayesh Shah", "Sonal Jayesh Shah's Father", "Spicejet Airlines Khajuraho", "Stamp Duty Registration", "Steel Mumbai Sonal Jayesh Shah", "Sujay Savla", "Sumitra Gupta", "Sumitra Revale Cnergyis", "Sundaram MF Ex RM", "Sundaram MF RM", "Sunidhi Securities & Finance Ltd", "Sunidhi securities Jigar Vaid BackOffice", "SunilKumar Gupta", "Sunita Shelly", "Suprita Kottiyan", "Suraj Santosh Rao", "Suraj Vikas Mankar", "Suresh Bhaiya", "Suresh Malekar", "Suresh Shah", "SV Road", "Tail Bone Cushion", "Tailor BNI JAyesh Shah", "Talakshibhai Son In Law Computer",
        "Talathi Godra Village", "Tanashka Dsouza", "Tanuj Mehta", "Rata MF Ex RM", "Tata MF Head", "Tata MF RM", "Tea,Coffee", "Tejas Cleaning Services Office Cleaning", "Testing", "Tiffin Malad Shopping Center", "Toll Free", "Toll Free For KYC", "TRademark Copyrights", "Translator English to Gujrati", "Travel", "Travel Factor", "Trupti Kunal Kapadia", "Turtlemint Associate Director Sales", "Turtlemint Senior Department", "Tushar Bhatt", "Tushar's Brother", "Twisha Atul Shah", "Uchita Bhatt", "Uday Subhedar", "Ujwala Kanekar", "UK", "Umargaon", "Umed Karia", "Unifi Capital Vice President PMS AIF", "Union MF Ex AVP Area Manager", "Union MF RM", "Unlisted Shares", "Urmish Desai", "Urologist For PJSHAH Namaha Health Care", "Urvi", "USA", "UTI MF Ex Head", "UTI MF Ex RM", "UTI MF Executive Vice Prrsident Regional Head", "UTI MF RM", "UTI MF Senior Vice Prrsident Regional Head", "UTI MF  Vice President Cheif Manager", "UTI MF Zonal Head", "Vandan", "Vantage", "Vardhaman Travels", "VDIS School Dr A V Mehta", "Veena HO Bullrun IPO", "Veena World Head Office", "Veena World Malad Office", "Veena World Tour Manager", "Venkataraman Balan", "Ventage Academy Trainer", "Vicky's Cousin", "Vijay Mehta Brother", "Vijya Shirke", "Vijay Shirke BackOffice", "Vinay Sagar", "Vinnet Property Consultant & SCK", "Vinod Redekar", "Vipul Mandavia", "Viral Dedhi Back Office", "Viral Rupani", "Virtual RM HDFC Bank Classice NKSHAH", "Vishwa Cheta Shah", "Vishva Chetan Shah's Friend", "Water Dispencer", "Water Proof",
        "Water Supply Office", "Website Designer", "Whatsapp", "WhiteOak MF RM", "Windows Panel", "Works India", "Xray Clinic Maharaja Appatment", "Yash Pathology", "YAsh Pathology Laboratory Ref:Dr Pradip", "Yogesh Muley", "Yogesh Patel", "Zing HR", "Zojwalla Group"
    ];
    Events: string[] = ['Anniversary', "Birthday", "Death Anniversary", "Other"];
    Gender: string[] = ['Male', 'Female', "Other"];
    Location: string[] = ['Ahemdabad', "Ahemadnagar", "Airoli", "Alibaug", "Allahabad", "Amethi", "Amravati", "Andheri East", "Andheri West", "Antop Hill", "Badlapur East", "Baleswar", "Bandra East", "Bandra West", "Banglore", "Baroda", "Betul", "Bhagalpur", "Bhandup West", "Bhayander", "Bhayander East", "Bhyanader West", "Bhiwandi", "Bhopal", "Bhuleshwar", "Bhyander West", "Borivali East", "Borivali West", "Brisbane", "Byculla East", "Canada", "Charni Road", "Chembur", "Chennai", "Chhattarpur", "Chinchbunder", "Chinchpokli", "Churni Road", "Colaba", "Cumballa Hill", "Dadar-East", "Dadar-West", "Dadar & Nagar Haveli", "Dahis", "Dahisar East", "Dahisar West", "Dapoli", "Delhi", "Dellas", "Deolali", "Deonar", "Dharavi", "Dholera", "Dombivali East", "Dombivali West", "Dubai", "Ernakulam", "Ethiopia", "Fort", "Ghatkopar West", "Gamdevi Road", "Gandhi Nagar", "Ghatkopar East", "Ghazibad", "Ghazipur", "Girgaon", "Girnar", "Goa", "Godhra", "Goregaon East", "Goregaon West", "Grant Road West", "Gujrat", "Hojai", "Hoshangabad", "Howrah", "Hugli", "Hyderabad", "Indore", "Jabalpur", "Jharkhand", "Jogeshwari East", "Jogeshwari West", "Kalbadevi", "Kalwa", "Kalyan", "Kalyan East", "Kalyan West", "Kandivali East", "Kandivali West", "Kanpur", "Kansas", "Karnataka", "Kashid", "Katni", "Khambhat", "Khar East", "Khar West", "Kharghar", "Koderma", "Kolhapur", "Kolkata", "Kota", "Kurla West", "Kutch", "Lonavala", "London", "Lower Parel East", "Lucknow", "Madhupur", "Madhya Pradesh", "Mahim West", "Malad East", "Malad West", "Malegaon", "Mangalore", "Matunga", "Matunga Center", "Mira Road East",
        "Mubra", "Mulund", "Mulund East", "Mulund West", "Mumbai", "Murud", "Nagpur", "Nalasopara", "Nallasopara West", "Nallasopara West", "Nampally", "Nariman Point", "Nashik", "Navi Mumbai", "Napean Sea Road", "New Jersey", "New York", "Osmanabad", "Palamu", "Palghar", "Pali", "Parali", "Parel", "Pashane", "Powai", "Prabhadevi", "Pune", "Raigarh", "Rajkot", "Ratlam", "Ratnagiri", "San Diago", "San Diego", "Sangli", "Santacruz East", "Seoni", "Sewri East", "Shahpur", "Simulpur", "Sindhudurg", "Singapore", "Sion East", "Songhad", "Sudhagad", "Surat", "Surendranagar", "Sweden", "Sydney", "Tardeo", "Thane", "Thane West",
        "Tilak Nagar", "Tilaknagar", "Tirumalagiri", "Udaipur", "Udupi", "Ulhasnagar", "Umargaon", "United Arab Emirates", "United Kingdom", "United States Of America", "USA", "Vadala", "Vadodara", "Valsad", "Vapi", "Vasai", "Vasai Road East", "Vasai Road West", "Vasai West", "Veluk", "Vidhisha", "Vidhyavihar", "Vidhyavihar East", "Vidhyavihar East", "Vikhroli", "Vikhroli West", "Vileparle East", "Vileparle West", "Virar East", "Virar West", "Wada", "Wadala", "Eadala East", "Wadala West", "Walkeshwar", "Warangal", "Warden Road", "Worli", "XXX"
    ];
    Languange: string[] = ['English', "Gujrati", "Hindi", "Kannada", "Marathi", "XXX"];
    Tag: string[] = ["9 BussinessBay", "Advocate", "AIF PMS", "AMC", "Bank", "CA", "Carpenter", "CFP", "Client AM", "Client AP", "Client JS", "Client KD", "Client KI", "Client KP", "Client NM", "Client PM", "Client RG", "Client SG", "Client SK", "Client SS", "Client SU", "Client TM", "Client VM", "Consultant", "Diagnostic", "Doctor", "Education", "Electrician", "Employed", "Family", "Forex", "Friend", "IFA", "Interior Decorator", "Jaswanti Allied", "Liquiloans", "Midas Touch Investments", "Multimedia", "Mumbai Grain", "NIIT", "Optician", "Plumber", "Professor", "Property Boker", "Pros AP", "PRos RG", "Pros SG", "Pros SS", "Raj Manor", "Retired", "RM", "SA", "Securities", "Services", "Software", "Staff", "Tours & Travels"];
    Group: string[] = ['Birthday Anniversary Greetings', "General", "Greeting File No.", "Gujrati", "Liquiloans", "Other Greeting & Blogs", "Other Greeting & Only", "Shamapana"]
    AddressType: string[] = ['Home', 'Office', 'Other', 'Overseas', 'Work'];
    Websitetype: string[] = ['Home', 'Office', 'Other', 'Overseas', 'Work'];

    organizationUrl = false;
    websiteUrl = false;
    prefixes$: Observable<string[]>
    references$: Observable<string[]>
    fb: FormBuilder
    mobileOptions: any[] = []

    constructor(private dialogref: MatDialog,
                private fbApi: FormBuilder,
                private readonly mService:ContactsService,
                private titlecasePipe: TitleCasePipe,
                private  mDialogRef:MatDialogRef<CreateFormComponent>,
                private  mSnackBar:MatSnackBar,
                private readonly mDatabase: AngularFireDatabase) {
        this.prefixes$ = this.mDatabase.list<string>('subCategory/Prefix').valueChanges()
        this.references$ = this.mDatabase.list<string>('subCategory/References').valueChanges()
        this.fb = fbApi

        this.formGroup = this.fb.group({
            prefix: new FormControl('', Validators.required),
            firstName: new FormControl('', Validators.required),
            middleName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            reference: new FormControl('', Validators.required),
            event: new FormControl('', Validators.required),
            significantDate: new FormControl(null, Validators.required),
            gender: new FormControl('', Validators.required),
            location: new FormControl('', Validators.required),
            language: new FormControl('', Validators.required),
            hobby: new FormControl('', Validators.required),
            tags: new FormControl('', Validators.required),
            notes: new FormControl('', Validators.required),

            contacts: this.fb.array([]),
            emails: this.fb.array([]),
            groups: this.fb.array([]),
            addresses: this.fb.array([]),
            organisations: this.fb.array([]),
            websites: this.fb.array([]),
            individual: new FormControl(false),
            nonindividual: new FormControl(false),
            representative: new FormControl(false),
            staff: new FormControl(false),
            personal: new FormControl(false),
            office: new FormControl(false),
            agetnStatus: new FormControl(''),
            status: new FormControl(''),
            mainDistributorName: new FormControl(''),
            service: new FormControl(''),
            mainAgentCode: new FormControl(''),
            representativeNote: new FormControl(''),
            activeStatus: new FormControl(''),
            euin: new FormControl(''),
            subAgentName: new FormControl(''),
            userId: new FormControl(''),
            password: new FormControl(''),

        })
        this.addContact()
        this.addGroup()
        this.addEmail()
        this.addAddress()
    }

    mobileChange() {
        this.mobileOptions = []
        const contacts: any[] = this.contactsArray.value
        contacts.forEach(it => {
            this.mobileOptions.push(it.mobile)
        })
        console.log('contacts', this.contactsArray.value)

    }

    get contactsArray(): FormArray {
        return this.formGroup.get('contacts') as FormArray;
    }

    get addressArray(): FormArray {
        return this.formGroup.get('addresses') as FormArray;
    }

    get emailArray(): FormArray {
        return this.formGroup.get('emails') as FormArray;
    }

    get groupArray(): FormArray {
        return this.formGroup.get('groups') as FormArray;
    }

    get organisationsArray(): FormArray {
        return this.formGroup.get('organisations') as FormArray;
    }

    get websiteArray(): FormArray {
        return this.formGroup.get('websites') as FormArray;
    }

    addContact() {
        this.contactsArray.push(this.contactGroup())
    }

    addAddress() {
        this.addressArray.push(this.addressGroup())
    }

    addEmail() {
        this.emailArray.push(this.emailGroup())
    }

    addGroup() {
        this.groupArray.push(this.groupControls())
    }

    addressGroup() {
        return this.fb.group({
            address: this.fb.control('', Validators.required),
            city: this.fb.control('', Validators.required),
            state: this.fb.control('', Validators.required),
            country: this.fb.control('', Validators.required),
            pincode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{6}$')]),
            type: this.fb.control('', Validators.required),
        })
    }

    contactGroup() {
        return this.fb.group({
            mobile: this.fb.control('', Validators.required),
            type: this.fb.control('', Validators.required)
        })

    }

    emailGroup() {
        return this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            type: this.fb.control('', Validators.required)
        })
    }

    groupControls() {
        return this.fb.group({
            group: this.fb.control('', Validators.required),
            type: this.fb.control('', Validators.required)
        })

    }


    orgform = this.fbApi.group({
        itemsorg: this.fbApi.array([])

    });

    get itemsorg() {
        return this.orgform.get('itemsorg') as FormArray
    }

    organizationadd() {
        if (this.organisationControl.valid && this.organisationTypeControl.valid) {
            this.organisationsArray.push(this.fb.group({
                organisation: this.organisationControl.value,
                type: this.organisationTypeControl.value
            }))
            console.log('organisaiontarray', this.organisationsArray)
        }
    }

    websiteAdd() {
        if (this.websiteTypeControl.valid && this.websiteControl.valid) {
            this.websiteArray.push(this.fb.group({
                website: this.websiteControl.value,
                type: this.websiteTypeControl.value
            }))
            console.log('website', this.websiteArray)
        }
    }

    deleteorgItems(index: number) {
        this.itemsorg.removeAt(index);

    }




    websiteadd() {
        this.websiteArray.push(
            this.fb.group({
                name1: [''],
                age1: ['']
            })
        )
        this.websiteUrl = true;

    }


    deleteOrganisationItem(index1: number) {
        this.organisationsArray.removeAt(index1);

    }

    deleteWebsiteItem(index1: number) {
        this.websiteArray.removeAt(index1);

    }


    editRef() {
        this.dialogref.open(EditReferenceComponent);
    }

    editLocation() {
        this.dialogref.open(EditLocationComponent)
    }

    editLanguange() {
        this.dialogref.open(EditLanguangeComponent)
    }

    editTag() {
        this.dialogref.open(EditTagComponent)

    }

    get firstName() {
        return this.formGroup.get('firstName')
    }

    get middleName() {
        return this.formGroup.get('middleName')
    }

    get lastName() {
        return this.formGroup.get('lastName')
    }

    get notes() {
        return this.formGroup.get('notes')
    }

    get address() {
        return this.formGroup.get('address')
    }

    get city() {
        return this.formGroup.get('city')
    }

    get state() {
        return this.formGroup.get('state')
    }

    get country() {
        return this.formGroup.get('country')
    }

    //
    onBlur(formControl: any) {
        if (formControl.value !== null) {
            formControl.setValue(this.titlecasePipe.transform(formControl.value.toString().trim().toUpperCase()))
        }
    }


    onSubmit() {
    this.mService.addContactToDb(this.formGroup.value).then(res=>{
        this.mSnackBar.open('Contact added successfully','',{duration:3000})
this.mDialogRef.close()
    })
    }
}
