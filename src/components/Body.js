import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() { 

    const resData=[
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "31809",
                    "name": "Hatari - Golf green",
                    "uuid": "14978512-58e0-4d34-ba71-5eb187d3a645",
                    "city": "7",
                    "area": "Jadavpur",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "scgeihd7bk6qkxtvslj0",
                    "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Seafood"
                    ],
                    "tags": [],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 34,
                    "minDeliveryTime": 34,
                    "maxDeliveryTime": 34,
                    "slaString": "34 MINS",
                    "lastMileTravel": 1.2000000476837158,
                    "slugs": {
                        "restaurant": "hatari-golf-green-south-kolkata",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "1/16, Arabindo Nagar, Golf Green, Kolkata",
                    "locality": "Opp bijoygarh College",
                    "parentId": 4024,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=7295883~p=13~eid=00000189-532c-12e8-0652-b69100e90d1a~srvts=1689317544680",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "1.2 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "31809",
                        "deliveryTime": 34,
                        "minDeliveryTime": 34,
                        "maxDeliveryTime": 34,
                        "lastMileTravel": 1.2000000476837158,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.5",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "378437",
                    "name": "Bhupen Cabin",
                    "uuid": "f3b7c58a-c2cf-4acb-9736-f95f89cb8d23",
                    "city": "7",
                    "area": "Netaji Nagar",
                    "totalRatingsString": "5000+ ratings",
                    "cloudinaryImageId": "ce4hz8tmjpmxxc7adisf",
                    "cuisines": [
                        "Bengali",
                        "Indian"
                    ],
                    "tags": [],
                    "costForTwo": 10000,
                    "costForTwoString": "₹100 FOR TWO",
                    "deliveryTime": 13,
                    "minDeliveryTime": 13,
                    "maxDeliveryTime": 13,
                    "slaString": "13 MINS",
                    "lastMileTravel": 0.8999999761581421,
                    "slugs": {
                        "restaurant": "bhupen-cabin-jadavpur-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "4/31, Netaji Nagar, Kolkata, West Bengal- 700040",
                    "locality": "Jadavpur",
                    "parentId": 45343,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.8 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "378437",
                        "deliveryTime": 13,
                        "minDeliveryTime": 13,
                        "maxDeliveryTime": 13,
                        "lastMileTravel": 0.8999999761581421,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.2",
                    "totalRatings": 5000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "3817",
                    "name": "Aminia Restaurant",
                    "uuid": "61e930f2-6721-4ccf-84c5-d15e740f759e",
                    "city": "7",
                    "area": "Regent Park",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "559b19709d2dd20c65bdb0ee3778c6af",
                    "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "North Indian",
                        "Indian",
                        "Kebabs",
                        "Tandoor",
                        "Chinese"
                    ],
                    "tags": [],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 15,
                    "minDeliveryTime": 15,
                    "maxDeliveryTime": 15,
                    "slaString": "15 MINS",
                    "lastMileTravel": 0.10000000149011612,
                    "slugs": {
                        "restaurant": "aminia-tollygunge-area",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "140/35 NSC Bose Road, Tollygunge, Kolkata, 700040",
                    "locality": "Tollygunge",
                    "parentId": 47,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.1 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "3817",
                        "deliveryTime": 15,
                        "minDeliveryTime": 15,
                        "maxDeliveryTime": 15,
                        "lastMileTravel": 0.10000000149011612,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.4",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "142960",
                    "name": "Ratan Biryani Centre",
                    "uuid": "5fd8e652-48e8-4c33-864b-6a800054ad72",
                    "city": "7",
                    "area": "Tollygaunge",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "9dc062dd1c21be8af191118839ee218c",
                    "cuisines": [
                        "Biryani",
                        "Afghani",
                        "North Indian"
                    ],
                    "tags": [],
                    "costForTwo": 30000,
                    "costForTwoString": "₹300 FOR TWO",
                    "deliveryTime": 12,
                    "minDeliveryTime": 12,
                    "maxDeliveryTime": 12,
                    "slaString": "12 MINS",
                    "lastMileTravel": 0.6000000238418579,
                    "slugs": {
                        "restaurant": "ratan-biryani-centre-tollygunge-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "24a tilok nagar ranikuthi tollygunge kol 700040",
                    "locality": "Manik Bandyopadhyay Sara, Tollygunge",
                    "parentId": 167440,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.6 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "ABOVE ₹159",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "142960",
                        "deliveryTime": 12,
                        "minDeliveryTime": 12,
                        "maxDeliveryTime": 12,
                        "lastMileTravel": 0.6000000238418579,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.1",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "222422",
                    "name": "Azad Hind Dhaba",
                    "uuid": "593cd9d3-ab9f-4888-b27f-9e32e43767a1",
                    "city": "7",
                    "area": "Tollygunge",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "5af6a9b8069daeb459b9b4f971ac3b0c",
                    "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Tandoor"
                    ],
                    "tags": [],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "slaString": "26 MINS",
                    "lastMileTravel": 1.2000000476837158,
                    "slugs": {
                        "restaurant": "azad-hind-dhaba-jadavpur-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "185/1Q, N.S.C. BOSE ROAD, GACHHTALA, Kolkata, West Bengal, 700040",
                    "locality": "Tollygunge",
                    "parentId": 6275,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "1.2 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "222422",
                        "deliveryTime": 26,
                        "minDeliveryTime": 26,
                        "maxDeliveryTime": 26,
                        "lastMileTravel": 1.2000000476837158,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.0",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "321229",
                    "name": "Oudh 1590",
                    "uuid": "587f0069-ea5f-4755-8c31-37991b65e4a2",
                    "city": "7",
                    "area": "Naktala",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "sgliuzqtoy4whm0rrght",
                    "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "North Indian",
                        "Awadhi",
                        "Kebabs",
                        "Lucknowi"
                    ],
                    "tags": [],
                    "costForTwo": 100000,
                    "costForTwoString": "₹1000 FOR TWO",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "slaString": "30 MINS",
                    "lastMileTravel": 2.700000047683716,
                    "slugs": {
                        "restaurant": "oudh-1590-naktala-naktala",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "356/3/1, N.S.C Bose Road, Naktala,      kolkata - 700047",
                    "locality": "Naktala",
                    "parentId": 686,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=7336721~p=7~eid=00000189-532c-12e8-0652-b68f00e90721~srvts=1689317544680",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.7 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹599",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "321229",
                        "deliveryTime": 30,
                        "minDeliveryTime": 30,
                        "maxDeliveryTime": 30,
                        "lastMileTravel": 2.700000047683716,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.3",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "10369",
                    "name": "Pizza Hut",
                    "uuid": "1cbd32f9-8f1f-43ba-911b-b7c563cf864c",
                    "city": "7",
                    "area": "Netaji Nagar",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                    "cuisines": [
                        "Fast Food",
                        "Pizzas"
                    ],
                    "tags": [],
                    "costForTwo": 35000,
                    "costForTwoString": "₹350 FOR TWO",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "slaString": "23 MINS",
                    "lastMileTravel": 0.8999999761581421,
                    "slugs": {
                        "restaurant": "pizza-hut-tollygunge-241-south-kolkata",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "123/3, NSC Bose Road, Netaji Nagar, Tollygunj, Kolkata-700033",
                    "locality": "Tollygunge (241)",
                    "parentId": 721,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.8 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "10369",
                        "deliveryTime": 23,
                        "minDeliveryTime": 23,
                        "maxDeliveryTime": 23,
                        "lastMileTravel": 0.8999999761581421,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.1",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "33713",
                    "name": "Ajooba Biryani Centre",
                    "uuid": "dd80ef2a-bcb0-4472-b06d-e11de3df18d8",
                    "city": "7",
                    "area": "Jadavpur",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "62b4d3e13dc1ee0218ebded576597573",
                    "cuisines": [
                        "Biryani",
                        "Mughlai"
                    ],
                    "tags": [],
                    "costForTwo": 25000,
                    "costForTwoString": "₹250 FOR TWO",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "slaString": "19 MINS",
                    "lastMileTravel": 2.5999999046325684,
                    "slugs": {
                        "restaurant": "ajooba-biryani-junction-jadavpur-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "75 Ibrahimpur road, kolkata 32",
                    "locality": "Ibrahimpur Road",
                    "parentId": 28375,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.5 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "33713",
                        "deliveryTime": 19,
                        "minDeliveryTime": 19,
                        "maxDeliveryTime": 19,
                        "lastMileTravel": 2.5999999046325684,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.7",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "533748",
                    "name": "Chopstick",
                    "uuid": "020bb48f-c9c9-4f21-b798-e09352bd445b",
                    "city": "7",
                    "area": "South Kolkata",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "jeyvicf1rcsw8mkyzl08",
                    "cuisines": [
                        "Chinese"
                    ],
                    "tags": [],
                    "costForTwo": 20000,
                    "costForTwoString": "₹200 FOR TWO",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "slaString": "18 MINS",
                    "lastMileTravel": 0.4000000059604645,
                    "slugs": {
                        "restaurant": "chapstick-south-kolkata-south-kolkata",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "56/75 N.S.C BOSE ROAD, WARD NO-097, KOLKATA MUNICIPAL CORPORATION, KOLKATA, WEST BENGA-700040",
                    "locality": "Nsc Bose Road",
                    "parentId": 1783,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.4 kms",
                    "hasSurge": false,
                    "sla": {
                        "restaurantId": "533748",
                        "deliveryTime": 18,
                        "minDeliveryTime": 18,
                        "maxDeliveryTime": 18,
                        "lastMileTravel": 0.4000000059604645,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.9",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "175151",
                    "name": "Snacks & Grill",
                    "uuid": "eda15653-f570-48bc-a77f-4cb81883b4ec",
                    "city": "7",
                    "area": "Netaji Nagar",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "0835e55bb897050b4037b1e8ae3872c4",
                    "cuisines": [
                        "Chinese",
                        "Kebabs",
                        "North Indian",
                        "Bengali"
                    ],
                    "tags": [],
                    "costForTwo": 10000,
                    "costForTwoString": "₹100 FOR TWO",
                    "deliveryTime": 21,
                    "minDeliveryTime": 21,
                    "maxDeliveryTime": 21,
                    "slaString": "21 MINS",
                    "lastMileTravel": 0.8999999761581421,
                    "slugs": {
                        "restaurant": "snacks-grill-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "170/159A NETAJI SUBHAS CHANDRA BOSE ROAD, 4/3A, NETAJI NAGAR, BOROUGH-X, KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal - 700040",
                    "locality": "Bose Road",
                    "parentId": 190216,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.8 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "175151",
                        "deliveryTime": 21,
                        "minDeliveryTime": 21,
                        "maxDeliveryTime": 21,
                        "lastMileTravel": 0.8999999761581421,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.2",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "454110",
                    "name": "A-One Taj Biryani House",
                    "uuid": "29bc738f-b1e7-46f2-b8f5-79a555398263",
                    "city": "7",
                    "area": "Jadavpur",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "idr22aa4spqi0mdrt9te",
                    "cuisines": [
                        "Biryani",
                        "Snacks"
                    ],
                    "tags": [],
                    "costForTwo": 20000,
                    "costForTwoString": "₹200 FOR TWO",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "slaString": "18 MINS",
                    "lastMileTravel": 1,
                    "slugs": {
                        "restaurant": "a-one-taj-biryani-tollygunge---suruchi-sangha-tollygunge---suruchi-sangha",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "4/70 bijoygarh kolkata 700032",
                    "locality": "Tollygunge - Suruchi Sangha",
                    "parentId": 277674,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "1 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "454110",
                        "deliveryTime": 18,
                        "minDeliveryTime": 18,
                        "maxDeliveryTime": 18,
                        "lastMileTravel": 1,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.9",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "296827",
                    "name": "Dilnawaz biryani centre",
                    "uuid": "02ee1de4-6f9a-4990-9e90-4c5d4ae58023",
                    "city": "7",
                    "area": "Tollygunge",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "ywgffa9wiql1gjusqadv",
                    "cuisines": [
                        "Biryani"
                    ],
                    "tags": [],
                    "costForTwo": 20000,
                    "costForTwoString": "₹200 FOR TWO",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "slaString": "20 MINS",
                    "lastMileTravel": 2.700000047683716,
                    "slugs": {
                        "restaurant": "dilnawaz-biryani-centre-jadavpur-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "28, Deshapran Sasmal Rd, Tollygunge Phari, Tollygunge, Kolkata, West Bengal 700033, India",
                    "locality": "Tollygunge Phari",
                    "parentId": 72964,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.7 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "296827",
                        "deliveryTime": 20,
                        "minDeliveryTime": 20,
                        "maxDeliveryTime": 20,
                        "lastMileTravel": 2.700000047683716,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.9",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "83504",
                    "name": "Aahar-e-kolkata",
                    "uuid": "5cc34fec-fc72-48b9-b329-bbc937b0e450",
                    "city": "7",
                    "area": "Jadavpur",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "i3el344gywei6uphalti",
                    "cuisines": [
                        "Bengali",
                        "Chinese"
                    ],
                    "tags": [],
                    "costForTwo": 23000,
                    "costForTwoString": "₹230 FOR TWO",
                    "deliveryTime": 38,
                    "minDeliveryTime": 38,
                    "maxDeliveryTime": 38,
                    "slaString": "38 MINS",
                    "lastMileTravel": 2.5999999046325684,
                    "slugs": {
                        "restaurant": "aahar-e-kolkata-baghajatin-garia",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "D/26, Bapuji Nagar, Near Ekta Heights Building, Baghajatin, Kolkata",
                    "locality": "Near Ekta Heights Building",
                    "parentId": 25593,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "ribbon": [
                        {
                            "type": "PROMOTED"
                        }
                    ],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=7362197~p=16~eid=00000189-532c-12e8-0652-b69200e91054~srvts=1689317544680",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "2.5 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "83504",
                        "deliveryTime": 38,
                        "minDeliveryTime": 38,
                        "maxDeliveryTime": 38,
                        "lastMileTravel": 2.5999999046325684,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "4.3",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "86832",
                    "name": "Simla Arsolan Biriyani",
                    "uuid": "0b29b976-5363-46cf-ba80-44a6e78a1ba6",
                    "city": "7",
                    "area": "Tollygunge",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "Swiggy-Dash/defftctymr9hsbx4gqoh",
                    "cuisines": [
                        "Biryani",
                        "Beverages",
                        "Indian"
                    ],
                    "tags": [],
                    "costForTwo": 30000,
                    "costForTwoString": "₹300 FOR TWO",
                    "deliveryTime": 15,
                    "minDeliveryTime": 15,
                    "maxDeliveryTime": 15,
                    "slaString": "15 MINS",
                    "lastMileTravel": 1.2999999523162842,
                    "slugs": {
                        "restaurant": "simla-arsolan-biriyani-kudghat-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "32/1, CHANDI GHOSH ROAD, GROUD FLOOR, WD-97, BR-X, KOLKATA, West Bengal - 700040",
                    "locality": "Near Netaji Metro Station",
                    "parentId": 188102,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "1.2 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "ABOVE ₹800",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "86832",
                        "deliveryTime": 15,
                        "minDeliveryTime": 15,
                        "maxDeliveryTime": 15,
                        "lastMileTravel": 1.2999999523162842,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.5",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "464644",
                    "name": "Foodies Point",
                    "uuid": "64cb7d1e-f304-48db-97ff-31e30a6f429f",
                    "city": "7",
                    "area": "Malancha Cinema hall",
                    "totalRatingsString": "100+ ratings",
                    "cloudinaryImageId": "oi8h04o8k2u1rts7mplq",
                    "cuisines": [
                        "Indian"
                    ],
                    "tags": [],
                    "costForTwo": 25000,
                    "costForTwoString": "₹250 FOR TWO",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "slaString": "28 MINS",
                    "lastMileTravel": 0.10000000149011612,
                    "slugs": {
                        "restaurant": "foodies'-point-jadavpur-jadavpur",
                        "city": "kolkata"
                    },
                    "cityState": "7",
                    "address": "57/4N Netaji Subhash Chandra Bose Road",
                    "locality": "Nsc Bose Road",
                    "parentId": 82647,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [],
                    "chain": [],
                    "feeDetails": {
                        "fees": [
                            {
                                "name": "distance",
                                "fee": 2900,
                                "message": ""
                            },
                            {
                                "name": "time",
                                "fee": 0,
                                "message": ""
                            },
                            {
                                "name": "special",
                                "fee": 0,
                                "message": ""
                            }
                        ],
                        "totalFees": 2900,
                        "message": "",
                        "title": "Delivery Charge",
                        "amount": "2900",
                        "icon": ""
                    },
                    "availability": {
                        "opened": true,
                        "nextOpenMessage": "",
                        "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                        "imageBased": [],
                        "textBased": [],
                        "textExtendedBadges": []
                    },
                    "lastMileTravelString": "0.1 kms",
                    "hasSurge": false,
                    "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "discountTag": "",
                        "headerTypeV2": 0
                    },
                    "sla": {
                        "restaurantId": "464644",
                        "deliveryTime": 28,
                        "minDeliveryTime": 28,
                        "maxDeliveryTime": 28,
                        "lastMileTravel": 0.10000000149011612,
                        "lastMileDistance": 0,
                        "serviceability": "SERVICEABLE",
                        "rainMode": "NONE",
                        "longDistance": "NOT_LONG_DISTANCE",
                        "preferentialService": false,
                        "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.8",
                    "totalRatings": 100,
                    "new": false
                },
                "subtype": "basic"
            }
        
    ]

  return (
    <div className='container-fluid'>

        <div className="row">
        <div className="col-md-12 my-3">
               <h3>Search</h3>
            </div>
            <div className="col-md-12">
                <div>
                    <input type="text" class="form-control" placeholder="Search Reastaurant"/>
               </div>
            </div>
            <div className="row my-4">
             
                {
                    resData.map((result,index)=>{
                        console.log(result.data.cloudinaryImageId)
                       return <RestaurantCard imgsrc={result.data.cloudinaryImageId} response={result} key={result.data.id}/>
                    })
                }
             
           
              
                
            </div>
            </div>
           
     </div>

   
  )
}

export default Body