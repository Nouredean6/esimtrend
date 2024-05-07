import easyicon from './assets/icons/easy-icon.svg'
import moneycon from './assets/icons/money-icon.svg'
import planeticon from './assets/icons/planet-icon.svg'
import travelicon from './assets/icons/travel-icon.svg'
import Carousel from './components/Carousel.jsx'
{/*IOS */}
import step1 from './assets/media/Step 1.png';
import step2 from './assets/media/Step 2.gif';
import step3 from './assets/media/Step 3.gif';
import step4 from './assets/media/Step 4.gif';
import step5 from './assets/media/Step 5.png';
import step6 from './assets/media/Step 6.gif';
import step7 from './assets/media/Step 7.gif';
import step8 from './assets/media/Step 8.gif';
import step9 from './assets/media/Step 9.gif';
import step10 from './assets/media/Step 10.gif';
import step11 from './assets/media/Step 11.gif';
import step12 from './assets/media/Step 12.png';
import step13 from './assets/media/Step 13.png';
import step14 from './assets/media/Step 14.gif';
import step15 from './assets/media/Step 15.gif';
import step16 from './assets/media/Step 16.gif';
import step17 from './assets/media/Step 17.gif';
import step18 from './assets/media/Step 18.gif';

{/*Android */}
import step1Android from './assets/media/android/Step 1.png';
import step2Android from './assets/media/android/Step 2.png';
import step3Android from './assets/media/android/Step 3.gif';
import step4Android from './assets/media/android/Step 4.gif';
import step5Android from './assets/media/android/Step 5.gif';
import step6Android from './assets/media/android/Step 6.gif';
import step7Android from './assets/media/android/Step 7.gif';
import step8Android from './assets/media/android/Step 8.png';
import step9Android from './assets/media/android/Step 9.gif';
import step10Android from './assets/media/android/Step 10.png';
import step11Android from './assets/media/android/Step 11.gif';
import step12Android from './assets/media/android/Step 12.png';
import step13Android from './assets/media/android/Step 13.png';
import step14Android from './assets/media/android/Step 14.gif';
import step15Android from './assets/media/android/Step 15.gif';
import step16Android from './assets/media/android/Step 16.gif';
import step17Android from './assets/media/android/Step 17.gif';
import step18Android from './assets/media/android/Step 18.gif';

///REGIONS IMAGES:
import africa from './assets/regions/Africa.svg'
import asia from './assets/regions/Asia.svg'
import europe from './assets/regions/Europe.svg'
import northamerica from './assets/regions/North America.svg'
import southamerica from './assets/regions/South America.svg'
import middleeast from './assets/regions/Middle East.svg'








// constants.js
export const countries = [
  {
    id: 1,
    country: 'Turkey',
    code: 'TUR',
    img: 'https://flagcdn.com/w2560/tr.png',
  },
  {
    id: 2,
    country: 'United Arab Emirates',
    code: 'ARE',
    img: 'https://flagcdn.com/w2560/ae.png',
  },
  {
    id: 3,
    country: 'France',
    code: 'FRA',
    img: 'https://flagcdn.com/w2560/fr.png',
  },
  {
    id: 4,
    country: 'United States',
    code: 'USA',
    img: 'https://flagcdn.com/w2560/us.png',
  },
  {
    id: 5,
    country: 'United Kingdom',
    code: 'GBR',
    img: 'https://flagcdn.com/w2560/gb.png',
  },
  {
    id: 6,
    country: 'Italy',
    code: 'ITA',
    img: 'https://flagcdn.com/w2560/it.png',
  },
  {
    id: 7,
    country: 'Switzerland',
    code: 'CHE',
    img: 'https://flagcdn.com/w2560/ch.png',
  },
  {
    id: 8,
    country: 'Saudi Arabia',
    code: 'SAU',
    img: 'https://flagcdn.com/w2560/sa.png',
  },
  {
    id: 9,
    country: 'Germany',
    code: 'DEU',
    img: 'https://flagcdn.com/w2560/de.png',
  },
  {
    id: 10,
    country: 'Spain',
    code: 'ESP',
    img: 'https://flagcdn.com/w2560/es.png',
  },
  {
    id: 11,
    country: 'Greece',
    code: 'GRC',
    img: 'https://flagcdn.com/w2560/gr.png',
  },
  {
    id: 12,
    country: 'Cyprus',
    code: 'CYP',
    img: 'https://flagcdn.com/w2560/cy.png',
  },
];


export const benifits= [
  {
    title: 'Easy to acquire',
    description: 'Acquiring an eSIM is often easier and faster than getting a traditional SIM card. Plus, the switch to eSIM can be done online, in minutes with only a few taps.',
    icon:easyicon,
  },
  {
    title: 'Travel hassle-free',
    description: 'You no longer have to worry about waiting in lines at airports or visiting a store to get your own sim card. The eSIM is a real time saver!',
    icon:moneycon,

  },
  {
    title: 'A money saver',
    description: 'In addition to making your trip easier, eSIM will spare you excessive data charges. With Monty eSIM, you get to browse the best bundles at the most affordable prices!',
    icon:planeticon,

  },
  {
    title: 'You get to save the planet',
    description: 'This virtual tool reduces CO2 emissions and plastic waste helping the planet breathe again.',
    icon:travelicon,

  },
]

export const questions = [
  { id: 1,
    title: 'How can I contact customer service?',
    info: 'If you need to contact us at any time, please use this WhatsApp number to chat or call us. https://wa.me/+447418375735',
  },
  {id: 2,
    title: 'Is my device eSIM compatible?',
    info: 'As more eSIM-compatible wearables, laptops, tablets, and smartphones are introduced, the list of products that accept eSIM continues to expand. The user of the eSIM must dial *#06# and confirm their phone(\')s eligibility before using it. Your device is compatible if "EID" appears under Device Info!'
  },
  {id: 3,
    title: 'Can I call and send SMS via My MontyeSIM?',
    info: 'No calls and SMS can be sent and received as Monty eSIM supports ONLY data at this stage.',
  },
  {   id: 4,
    title: 'Can the Monty eSIM profile be transferred to another device?',
    info: 'A profile can(\')t be transferred to another device. It is recommended to benefit from the purchased package till it expires since a new profile has to be activated and a new package has to be purchased after switching to another device.',
  },
  { id: 5,
    title: 'How do I activate an eSIM profile?',
    info: 'After purchasing the preferred data package, it is necessary to refer to and check the steps to be taken under the “User Guide” section to activate the ordered profile. Please feel free to check out our user guide at https://www.montyesim.com/user-guide ',
  },
  { id: 6,
    title: 'How do I get a Monty eSIM profile?',
    info: 'Once you buy an eSIM Profile from Shop Plans, youll receive a QR code via email to scan. Please follow the User Guide steps to download your eSIM Profile. https://montyesim.com/user-guide ',
  },{ id: 7,
    title: 'What is Monty eSIM exactly?',
    info: 'It is an international eSIM app that allows travelers to use data at the most competitive rates while abroad without inserting a physical SIM card. ',
  },
  { id: 8,
    title: 'What eSIM products will I find in the Shop Plans section?',
    info: 'Monty eSIM only features prepaid eSIM plans and packages. Prepaid eSIM plans are just like prepaid physical SIM card plans. Go to Shop Plans and explore our BUNDLES! Please go to https://www.montyesim.com/shop-plans/ ',
  },
  { id: 9,
    title: 'Does a prepaid eSIM expire?',
    info: 'If a user fails to top up their eSIM account within a period of three months from the last top-up date, their eSIM will be deactivated manually by MontyeSIM. Once deactivated, the eSIM cannot be used again unless the user takes specific steps to reactivate it. Upon eSIM deactivation, the user may lose any remaining data balance or credits associated with their account. MontyeSIM will not be responsible for any loss of data or balance resulting from eSIM deactivation. ',
  },
  { id: 10,
    title: 'Can QR codes be reused once they have been scanned?',
    info: 'Once the QR code is scanned, the Monty eSIM profile is downloaded to the device and can no longer be re-used. ',
  },
  
];

export const os = [
  {
    id:1,
    opSystem: 'IOS',
    title: 'How To Setup Your eSIM On IOS',
    icon:'',
    
  },
  {
    id:2,
    opSystem: 'Android',
    title: 'How To Setup Your eSIM On Android',
    icon:'',
    
  }
]
export const esimPlans = [
  {
    id:1,
    title: 'Expired Plans',
  },
  {
    id:2,
    title: 'Current Plans',
    
  }
]

export const planTabTitles = [
  {
    id:1,
    title: 'Countries',
  },
  {
    id:2,
    title: 'Regions',    
  },
  {
    id:3,
    title: 'Global',    
  },
]

export const longList = [
  {
    id: 1,
    image: step1,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Talk to your Team of Experts to set up your postpaid plan. You will need to provide your device EID to the Expert to update your account. A QR code is only needed if the auto-discovery notification is not received and will be delivered to you via email for activation. To learn how to access your QR code scanner and add your new line, follow these steps:"',
  },
  {
    id: 2,
    image: step2,
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Go to the Home screen. Choose Settings.',
  },
  {
    id: 3,
    image: step3,
    name: 'peter smith',
    title: 'product designer',
    quote:'Scroll down. Choose Cellular.'},
  {
    id: 4,
    image: step4,
    name: 'susan andersen',
    title: 'the boss',
    quote:'Choose Add Cellular Plan.'  },
  {
    id: 5,
    image: step5,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Scan the QR code sent to you via email by your Team of Experts.'  },
  {
    id: 6,
    image: step6,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Choose Add Cellular Plan.'  },
  {
    id: 7,
    image: step7,
    name: 'peter smith',
    title: 'product designer',
    quote:
'Choose Continue.'  },
  {
    id: 8,
    image: step8,
    name: 'susan andersen',
    title: 'the boss',
    quote:
'Choose an option, in this case, Secondary.'  },
  {
    id: 9,
    image: step9,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Choose Continue.'  },
  {
    id: 10,
    image: step10,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Choose an option, in this case, Secondary.'  },
  {
    id: 11,
    image: step11,
    name: 'peter smith',
    title: 'product designer',
    quote:
'Optional: Turn on Allow Cellular Data Switching. Choose Done.'  },
  {
    id: 12,
    image: step12,
    name: 'susan andersen',
    title: 'the boss',
    quote:
'You have scanned your QR code and added your postpaid plan. Return to the Home screen.'  },
  {
    id: 13,
    image: step13,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Your phone and apps may use data when you are not aware of it. You are responsible for any data charges on other wireless networks. To turn off data roaming when you are not on the network, follow these steps:'  },
  {
    id: 14,
    image: step14,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Go to the Home screen. Choose Settings.'  },
  {
    id: 15,
    image: step15,
    name: 'peter smith',
    title: 'product designer',
    quote:
'Scroll down. Choose Cellular.'  },
  {
    id: 16,
    image: step16,
    name: 'susan andersen',
    title: 'the boss',
    quote:
'Choose Cellular Data Options.'  },
  {
    id: 17,
    image: step17,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Turn on Data Roaming.'  },
  {
    id: 18,
    image: step18,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Data roaming has been turned on. Return to the Home screen.'  },
];

export const longList1 = [
  {
    id: 1,
    image: step1Android,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Talk to your Team of Experts to set up your postpaid plan. You will need to provide your device EID to the Expert to update your account. A QR code is only needed if the auto-discovery notification is not received and will be delivered to you via email for activation. To learn how to access your QR code scanner and add your new line, follow these steps:"',
  },
  {
    id: 2,
    image: step2Android,
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Go to the Home screen. To open the menu, swipe up on the screen.',
  },
  {
    id: 3,
    image: step3Android,
    name: 'peter smith',
    title: 'product designer',
    quote:'Scroll to the right. Choose Settings.'},
  {
    id: 4,
    image: step4Android,
    name: 'susan andersen',
    title: 'the boss',
    quote:'Scroll down. Choose Connections.'  },
  {
    id: 5,
    image: step5Android,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Choose SIM card manager.'  },
  {
    id: 6,
    image: step6Android,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Under eSIMs, choose Add mobile plan.'  },
  {
    id: 7,
    image: step7Android,
    name: 'peter smith',
    title: 'product designer',
    quote:
'Choose Scan carrier QR code.'  },
  {
    id: 8,
    image: step8Android,
    name: 'susan andersen',
    title: 'the boss',
    quote:
'To scan a QR code, point the camera at the code.'  },
  {
    id: 9,
    image: step9Android,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Choose Confirm.'  },
  {
    id: 10,
    image: step10Android,
    name: 'john doe',
    title: 'regular guy',
    quote:
'The eSIM profile is being downloaded. This can take up to 5 minutes.'  },
  {
    id: 11,
    image: step11Android,
    name: 'peter smith',
    title: 'product designer',
    quote:
'You have scanned your QR code and added your postpaid plan. Return to the Home screen.'  },
  {
    id: 12,
    image: step12Android,
    name: 'susan andersen',
    title: 'the boss',
    quote:
'Your phone and apps may use data when you are not aware of it. You are responsible for any data charges on other wireless networks. To turn off data roaming when you are not on the network, follow these steps:'  },
  {
    id: 13,
    image: step13Android,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Go to the Home screen. To open the menu, swipe up on the screen.'  },
  {
    id: 14,
    image: step14Android,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Scroll to the right. Choose Settings.'  },
  {
    id: 15,
    image: step15Android,
    name: 'peter smith',
    title: 'product designer',
    quote:
'Scroll down. Choose Connections.'  },
  {
    id: 16,
    image: step16Android,
    name: 'susan andersen',
    title: 'the boss',
    quote:
'Choose Mobile networks.'  },
  {
    id: 17,
    image: step17Android,
    name: 'maria ferguson',
    title: 'office manager',
    quote:
'Turn on Data roaming.'  },
  {
    id: 18,
    image: step18Android,
    name: 'john doe',
    title: 'regular guy',
    quote:
'Data roaming has been turned on. Return to the Home screen.'  },
];

/////REGIONS IMAGES:
export const regionImages = [africa, asia, europe, middleeast, northamerica,'' ,southamerica];

////////COUNTRIES FOR SEARCH:
export const countriesSearch= [
    {
      "label": "Afghanistan",
      "value": "AFG"
    },
    {
      "label": "Anguilla",
      "value": "AIA"
    },
    {
      "label": "Albania",
      "value": "ALB"
    },
    {
      "label": "Andorra",
      "value": "AND"
    },
    {
      "label": "United Arab Emirates",
      "value": "ARE"
    },
    {
      "label": "Argentina",
      "value": "ARG"
    },
    {
      "label": "Armenia",
      "value": "ARM"
    },
    {
      "label": "American Samoa",
      "value": "ASM"
    },
    {
      "label": "Antigua and Barbuda",
      "value": "ATG"
    },
    {
      "label": "Australia",
      "value": "AUS"
    },
    {
      "label": "Austria",
      "value": "AUT"
    },
    {
      "label": "Azerbaijan",
      "value": "AZE"
    },
    {
      "label": "Belgium",
      "value": "BEL"
    },
    {
      "label": "Bangladesh",
      "value": "BGD"
    },
    {
      "label": "Bulgaria",
      "value": "BGR"
    },
    {
      "label": "Bahrain",
      "value": "BHR"
    },
    {
      "label": "Bosnia and Herzegovina",
      "value": "BIH"
    },
    {
      "label": "Belarus",
      "value": "BLR"
    },
    {
      "label": "Bolivia",
      "value": "BOL"
    },
    {
      "label": "Brazil",
      "value": "BRA"
    },
    {
      "label": "Barbados",
      "value": "BRB"
    },
    {
      "label": "Brunei Darussalam",
      "value": "BRN"
    },
    {
      "label": "Botswana",
      "value": "BWA"
    },
    {
      "label": "Central African Republic",
      "value": "CAF"
    },
    {
      "label": "Canada",
      "value": "CAN"
    },
    {
      "label": "Switzerland",
      "value": "CHE"
    },
    {
      "label": "Chile",
      "value": "CHL"
    },
    {
      "label": "China",
      "value": "CHN"
    },
    {
      "label": "Côte d'Ivoire",
      "value": "CIV"
    },
    {
      "label": "Cameroon",
      "value": "CMR"
    },
    {
      "label": "The Democratic Republic of the Congo",
      "value": "COD"
    },
    {
      "label": "Congo",
      "value": "COG"
    },
    {
      "label": "Colombia",
      "value": "COL"
    },
    {
      "label": "Costa Rica",
      "value": "CRI"
    },
    {
      "label": "Cyprus",
      "value": "CYP"
    },
    {
      "label": "Czech Republic",
      "value": "CZE"
    },
    {
      "label": "Germany",
      "value": "DEU"
    },
    {
      "label": "Dominica",
      "value": "DMA"
    },
    {
      "label": "Denmark",
      "value": "DNK"
    },
    {
      "label": "Dominican Republic",
      "value": "DOM"
    },
    {
      "label": "Algeria",
      "value": "DZA"
    },
    {
      "label": "Ecuador",
      "value": "ECU"
    },
    {
      "label": "Egypt",
      "value": "EGY"
    },
    {
      "label": "Spain",
      "value": "ESP"
    },
    {
      "label": "Estonia",
      "value": "EST"
    },
    {
      "label": "Finland",
      "value": "FIN"
    },
    {
      "label": "France",
      "value": "FRA"
    },
    {
      "label": "Faroe Islands",
      "value": "FRO"
    },
    {
      "label": "Gabon",
      "value": "GAB"
    },
    {
      "label": "United Kingdom",
      "value": "GBR"
    },
    {
      "label": "Georgia",
      "value": "GEO"
    },
    {
      "label": "Guernsey",
      "value": "GGY"
    },
    {
      "label": "Ghana",
      "value": "GHA"
    },
    {
      "label": "Gibraltar",
      "value": "GIB"
    },
    {
      "label": "Guadeloupe",
      "value": "GLP"
    },
    {
      "label": "Gambia",
      "value": "GMB"
    },
    {
      "label": "Guinea-Bissau",
      "value": "GNB"
    },
    {
      "label": "Greece",
      "value": "GRC"
    },
    {
      "label": "Greenland",
      "value": "GRL"
    },
    {
      "label": "Guatemala",
      "value": "GTM"
    },
    {
      "label": "French Guiana",
      "value": "GUF"
    },
    {
      "label": "Guam",
      "value": "GUM"
    },
    {
      "label": "Hong Kong",
      "value": "HKG"
    },
    {
      "label": "Croatia",
      "value": "HRV"
    },
    {
      "label": "Hungary",
      "value": "HUN"
    },
    {
      "label": "Indonesia",
      "value": "IDN"
    },
    {
      "label": "Isle of Man",
      "value": "IMN"
    },
    {
      "label": "India",
      "value": "IND"
    },
    {
      "label": "Ireland",
      "value": "IRL"
    },
    {
      "label": "Iraq",
      "value": "IRQ"
    },
    {
      "label": "Iceland",
      "value": "ISL"
    },
    {
      "label": "Italy",
      "value": "ITA"
    },
    {
      "label": "Jamaica",
      "value": "JAM"
    },
    {
      "label": "Jersey",
      "value": "JEY"


    },
    {
      "label": "Jordan",
      "value": "JOR"
    },
    {
      "label": "Japan",
      "value": "JPN"
    },
    {
      "label": "Kazakhstan",
      "value": "KAZ"
    },
    {
      "label": "Kenya",
      "value": "KEN"
    },
    {
      "label": "Kyrgyzstan",
      "value": "KGZ"
    },
    {
      "label": "Cambodia",
      "value": "KHM"
    },
    {
      "label": "South Korea",
      "value": "KOR"
    },
    {
      "label": "Kuwait",
      "value": "KWT"
    },
    {
      "label": "Lao People's Democratic Republic",
      "value": "LAO"
    },
    {
      "label": "Liberia",
      "value": "LBR"
    },
    {
      "label": "Saint Lucia",
      "value": "LCA"
    },
    {
      "label": "Liechtenstein",
      "value": "LIE"
    },
    {
      "label": "Sri Lanka",
      "value": "LKA"
    },
    {
      "label": "Lesotho",
      "value": "LSO"
    },
    {
      "label": "Lithuania",
      "value": "LTU"
    },
    {
      "label": "Luxembourg",
      "value": "LUX"
    },
    {
      "label": "Latvia",
      "value": "LVA"
    },
    {
      "label": "Macao",
      "value": "MAC"
    },
    {
      "label": "Morocco",
      "value": "MAR"
    },
    {
      "label": "Monaco",
      "value": "MCO"
    },
    {
      "label": "Moldova",
      "value": "MDA"
    },
    {
      "label": "Madagascar",
      "value": "MDG"
    },
    {
      "label": "Mexico",
      "value": "MEX"
    },
    {
      "label": "Macedonia",
      "value": "MKD"
    },
    {
      "label": "Mali",
      "value": "MLI"
    },
    {
      "label": "Malta",
      "value": "MLT"
    },
    {
      "label": "Myanmar",
      "value": "MMR"
    },
    {
      "label": "Montenegro",
      "value": "MNE"
    },
    {
      "label": "Mongolia",
      "value": "MNG"
    },
    {
      "label": "Mozambique",
      "value": "MOZ"
    },
    {
      "label": "Martinique",
      "value": "MTQ"
    },
    {
      "label": "Malawi",
      "value": "MWI"
    },
    {
      "label": "Malaysia",
      "value": "MYS"
    },
    {
      "label": "Niger",
      "value": "NER"
    },
    {
      "label": "Nigeria",
      "value": "NGA"
    },
    {
      "label": "Nicaragua",
      "value": "NIC"
    },
    {
      "label": "Netherlands",
      "value": "NLD"
    },
    {
      "label": "Norway",
      "value": "NOR"
    },
    {
      "label": "New Zealand",
      "value": "NZL"
    },
    {
      "label": "Oman",
      "value": "OMN"
    },
    {
      "label": "Pakistan",
      "value": "PAK"
    },
    {
      "label": "Panama",
      "value": "PAN"
    },
    {
      "label": "Peru",
      "value": "PER"
    },
    {
      "label": "Philippines",
      "value": "PHL"
    },
    {
      "label": "Papua New Guinea",
      "value": "PNG"
    },
    {
      "label": "Poland",
      "value": "POL"
    },
    {
      "label": "Portugal",
      "value": "PRT"
    },
    {
      "label": "Paraguay",
      "value": "PRY"
    },
    {
      "label": "Qatar",
      "value": "QAT"
    },
    {
      "label": "Réunion",
      "value": "REU"
    },
    {
      "label": "Romania",
      "value": "ROU"
    },
    {
      "label": "Russian Federation",
      "value": "RUS"
    },
    {
      "label": "Saudi Arabia",
      "value": "SAU"
    },
    {
      "label": "Senegal",
      "value": "SEN"
    },
    {
      "label": "Singapore",
      "value": "SGP"
    },
    {
      "label": "El Salvador",
      "value": "SLV"
    },
    {
      "label": "Serbia",
      "value": "SRB"
    },
    {
      "label": "Slovakia",
      "value": "SVK"
    },
    {
      "label": "Slovenia",
      "value": "SVN"
    },
    {
      "label": "Sweden",
      "value": "SWE"
    },
    {
      "label": "Swaziland",
      "value": "SWZ"
    },
    {
      "label": "Seychelles",
      "value": "SYC"
    },
    {
      "label": "Turks and Caicos Islands",
      "value": "TCA"
    },
    {
      "label": "Chad",
      "value": "TCD"
    },
    {
      "label": "Thailand",
      "value": "THA"
    },
    {
      "label": "Tajikistan",
      "value": "TJK"
    },
    {
      "label": "Tonga",
      "value": "TON"
    },
    {
      "label": "Tunisia",
      "value": "TUN"
    },
    {
      "label": "Turkey",
      "value": "TUR"
    },
    {
      "label": "Taiwan",
      "value": "TWN"
    },
    {
      "label": "Tanzania",
      "value": "TZA"
    },
    {
      "label": "Uganda",
      "value": "UGA"
    },
    {
      "label": "Ukraine",
      "value": "UKR"
    },
    {
      "label": "Uruguay",
     

 "value": "URY"
    },
    {
      "label": "United States",
      "value": "USA"
    },
    {
      "label": "Uzbekistan",
      "value": "UZB"
    },
    {
      "label": "Holy See (Vatican City State)",
      "value": "VAT"
    },
    {
      "label": "Vietnam",
      "value": "VNM"
    },
    {
      "label": "Vanuatu",
      "value": "VUT"
    },
    {
      "label": "Kosovo",
      "value": "XKX"
    },
    {
      "label": "Yemen",
      "value": "YEM"
    },
    {
      "label": "South Africa",
      "value": "ZAF"
    },
    {
      "label": "Zambia",
      "value": "ZMB"
    }
  ]