import {
    FacebookSvg,
    TwitterSvg,
    InstagramSvg,
    TiktokSvg,
    SnapchatSvg,
    AndroidSvg,
    AppleSvg,
  } from "../Utils/icons";

export const BASE_URL = 'https://dummyjson.com';
export const RATING_COUNT = [1,2,3,4,5];
export const FOOTER_CONTENT ={
    "COMPANY INFO":[
        {name:"About"},
        {name:"Social Responsibility"},
        {name:"Affiliate"},
        {name:"Fashion Blogger"},
    ],
    "HELP & SUPPORT":[
        {name:"Shipping Info"},
        {name:"Returns"},
        {name:"How to Order"},
        {name:"How to Track"},
        {name:"Size Chart"},
    ],
    "CUSTOMER CARE":[
        {name:"Contact us"},
        {name:"Payment"},
        {name:"Bonus Point"},
        {name:"Notices"},
    ]
}

export const SOCIAL_DATA = {
    "SOCIAL":[
        FacebookSvg, TwitterSvg, InstagramSvg, TiktokSvg, SnapchatSvg 
    ],
    "PLATFORMS":[
        AndroidSvg, AppleSvg
    ]
}

export const TERMS = [
    ["Privacy Center", "Privacy & Cookie Policy", "Manage Cookies"],
    ["Terms & Conditions", "Copyright Notice", "Imprint"]
]