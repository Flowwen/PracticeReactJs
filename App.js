import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *   Logo
 *   NavItems
 *
 * Body
 *  - Search
 *  - RestaurntContainer
 *    - Restaurnt Cards
 *
 * Footer
 *   -Copyright
 *   - Links
 *   -Address
 *   -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAeAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUBAgQGB//EADUQAAEDAwIEBAQFAwUAAAAAAAEAAgMEBRESMQYhQVETImFxkaGxwRQVM1KBNHJzFjJCYuH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QALxEBAAICAQIEBAUEAwAAAAAAAAECAxEEEjEFITJBE1FhcRSRobHwI1KBwRUiQv/aAAwDAQACEQMRAD8A+4oCBlAygZQMoGUDKBlAygZQMoGUBAQEEeUDKBlAygZQMoGUDKBlAygZQMoGUEgQEESAgICAgICAgICAgIMoJBsgIIkBAQEBAQEBAQEBAQZQSDZAQRICAgiqqqCjhdNVSsijbu5x5LW94pG7S3pjtkt00jcoLddaK5mQUU3ieHjV5SMZ239lpjzUyemdpM3Gy4dfEjW3apUDCAgINZZY4Wh0sjGAnGXOAWJmI7sxWbdobDBAIOQVlgQZQSDZAQRICAg8Dxfc4aq8xU0rZfw1I7ErW4BceWSOfbA+K5HMzVtlis9o7vR+G8e1MFslddVu30XNoutkpLbPX0lOaaLWI3Ddz3AZAAye6s4s2CmOclY1ChyOPysmauK9uqe/2aQcb0MkwbNTzQxuOBISCB6kBYr4hj3qY03v4Pmiu6zEz8lzdLxR2ylbUVD8tf8AptZzL/ZWcuemOvVKhg4uTPfopH3+ioouM6GedsU8MtMHnAe8gge+NlXpz6WnUxpcy+E5aVm1ZidLS83uks8TXVBc5786I2cy719lPm5FMUblV43Eycm0xT2eO4m4hgvNuigbTyQyRzB+HkEEaXD7rm8rk1zUiNadzg8C/GyzaZ3Exr9Ye+pP6OD/ABt+i69PTDzmT12+8pVs0ZQSDZAQRICAg8fxExv+sbSNIw7RqGN/Od1zeTEfiaO3wpn8Dln+dmOOo2xyW1zmYpNbvEDRgE5b88Apzo1Nd9jwm0zGSI9WvJ08U1lrlsBbFLA9ztPgNjIyOY27clvy74pwd/si8Px545UbifqoakGF3Dz7kCaUQjIcOWNeT8i1VMm6zjnJ2dDHq8Z4xera443qbfLa4mxSQyT6wYvDIJDeu3RWedbHOPUT5qfhVM1c0zaJiPfavmxTcRWp14/SFNFkv2B0nf2cobeWek5e2k9d34mWMPfc/kn49noZoqYQPikqQ4kujIOGY649cLfn2pMR092ng9M0WtM7iuv1eypP6SD/ABt+i6VPTDiZPXP3SrZoygkGyAgiQeM4thutPeIrjSiZ8LA3R4eSGEbggd1zOXXLXJGSvZ3PDrce+CcN9RM/P+ez09ruUFyphLDqa7A1xuGC09lexZYyV3Dk58FsNumzluNFb5btR1VXI9lQzAhy7DXEHOPfnstMmPHbJFrd0uHNmrhtSkbrPd31lJT11O6CqjEkbtwfqOxU16VvHTaPJXxZbYrdVJ1MKen4QtUE4lLJJcHIZI7Lf/f5VWvBw1tvS9fxXk3r070ta+30twpvAq4g9m46Fp7g9FYyYq5K9NlPDmyYbdVJ1KsoeE7XR1DZwx8rmnLRK7IB9lBj4WKk7W8vifIy16ZnX2WF0tdJdIRHWRatPNrgcOb7FTZcNMsasrYOTkwW6scqyLhWzUkMpla54c0gvlf/ALc9R2PqoK8PBTfktX8T5OSY8+y+jaGRsY3OlrQBnsrcRERqHPmdztsssMoJBsgIIkGsrnMie5rS9zQSGjqeyxM6jbMREz5qqw3GuuPjPqqMQxNdhjyHNLj/AGn6qvgy3yb6q6hb5WDFi10W3MoeIq2hlH5VJEaqom2ia4DR11F3/HG6xyMmOf6UxuZbcPFlr/XiemI9/n9Pq8tSXy522o/DUlWLhE0cgWFwON8Hf7Ln05GTHPTWep2b8LBmp15K9Erim46hPlqqKRjhuY3Bw+BwrFfEa/8AqFK/gt+9LRMfV2t4ytJHM1DfeLP0Uv4/Cgnwnk+2vzaycaWtoPhtqZD2EYH1KxPPxR821fCORPfUf5cJ4vra2TwbRbdUh6vJfj+BjHxUf42951iqm/4vHijqz3/L+f6WtqtNY+VtZfKgzzg5jgH6cR74HIlT4sN5nryzufkp5+Riivw+PXUe8+8rxW1AQZQSDZAQRICDivNb+XWyoquWY2eUH9x5D5kKLNk+HSbJ+Ni+NmrT5vmDKx7RVvc5zp6kaXSHfBOXfHAC4PxJ8595ettgr/0iPTX2/Z7TgS3MhoHVz2gyzkhp7MB+5XU4GKK06/eXC8XzzfL8KO0fuvqq20NZzqqSGU/ucwZ+O6t2xUv6oc3Hny4/RaYcD+FbK85/B4/tlePuoZ4eD+1ZjxLlf3fs3i4Zs0RBFCxx/wC5LvqVtXiYa9qtbeIcm3e6zihigYGQRsjYNmsaAFPFYr2VbWtad2nbdZaiAgygkGyAgiQZQVfE1HLcLJU08AzIQ1zW/uLXA4+Sr8nHOTFMQtcLLGHkVvbs+XFpEnhlrtYONOOee2FwemYnWnseqsxvfk+q2CmkpLPSQTDEjIxqHYnnheg49JpirWXjeXkjJntevaZd6mVhAQEBAQEGUEg2QEESAgINTHGX6yxuv92kZ+KxqN7Z6ra1vybLLAgICAgICAgygkGyAgiQEBAQEBAQEBAQEBBlBINkBBGgICAgICAgICAgICAgkCAgICAgICAgICAgICAgICAgIME4CCmmuVwjqnYtsj4Gv0EtJzjJ8w8vPl077Z3QRNu12DvPaSQQMAOeC3zP66efIN+O4QSSXS4xyY/LC5o1A6XPOSNOMHTsckbfIEgNoLlXObO+a3SMwzVEznzdjm3Onv1xz6ZQY/Nbj4mltoeWAuy4yEHA2wC3nn7j1wHTcKqog8IxxnDnPDtMLpSAGuLT5fUDl649UHI2suYDHujYQ7S3T+Gkzq0EnqSBnTzI7hBEK+8h7S6kYIjp8wieT6jGcjqcnbkNzyDenq7xMQfBiax2nS50D2nm7nlpPLABJ/jmc8gvRsgygICAgwdkGOhQOgQO/ugDqgIBQOqAUAoNggICD//Z"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About us </li>
          <li> Contact us </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "28789",
      name: "Domino's Pizza",
      cloudinaryImageId: "enrxsgw7dtly6y9tv85i",
      locality: "Capurbawdi, Ghodbandar Road",
      areaName: "Thane West",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "28789",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "2456",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-capurbawdi-ghodbandar-road-thane-west-mumbai-28789",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23740",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "Lake City Mall",
      areaName: "Thane West",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "23740",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-23 23:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-lake-city-mall-thane-west-mumbai-23740",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "221810",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Lake City Mall",
      areaName: "Thane West",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "221810",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-24 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-lake-city-mall-thane-west-mumbai-221810",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "369088",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Viviana Mall",
      areaName: "Thane",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "369088",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "547",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-viviana-mall-thane-mumbai-369088",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "710826",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "2e42bde2a2229b2f21bccfc4b64ef7ca",
      locality: "LAKE CITY MALL",
      areaName: "THANE KAPURBAWDI JUNTION",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "710826",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "2233",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-lake-city-mall-thane-kapurbawdi-juntion-mumbai-710826",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "31779",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality:
        "Eastern Express Highway, Near Jupiter Hospital, Majiwada, Thane West",
      areaName: "Thane West",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "31779",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "2",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-eastern-express-highway-near-jupiter-hospital-majiwada-thane-west-mumbai-31779",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "27414",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Thane West",
      areaName: "Thane West",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "27414",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "721",
      avgRatingString: "3.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-thane-west-mumbai-27414",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "450152",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "sqjtrlhnu79ob6ge1g7b",
      locality: "Thane",
      areaName: "Hiranandani Meadows",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "450152",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "4961",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-24 05:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-thane-hiranandani-meadows-mumbai-450152",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "694953",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "7e526a0c0ed3cd56eefac3d318c78977",
      locality: "Muktai Nagar",
      areaName: "Thane",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "694953",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3200,
      },
      parentId: "582",
      avgRatingString: "4.2",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
    },
    analytics: {
      context: "seo-data-3faeadd5-4e46-41f5-b8fc-b0fd010bbad4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-muktai-nagar-thane-mumbai-694953",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { slaString } = resData?.info?.sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

root.render(<AppLayout />);
