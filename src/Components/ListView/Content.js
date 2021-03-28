import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../Cards/BlogCard";
import InstaCard from "../Cards/InstaCard";
import YoutubeCard from "../Cards/YoutubeCard";
import ContentSwiper from "./ContentSwiper";
import trending from "./svg/trending.svg";
import youtubesvg from "./svg/youtube.svg";
import blog from "./svg/chrome.svg";
import insta from "./svg/instagram.svg";
import axios from "axios";

function Content() {
  const [loading, setLoading] = useState(false);
  const [youtube, setYoutube] = useState([
    {
      kind: "youtube#searchResult",
      etag: "1P03b0lK5JlV0lxZHPMcqzGJeiA",
      id: {
        kind: "youtube#video",
        videoId: "8E9fmr85yQ8",
      },
      snippet: {
        publishedAt: "2020-08-04T10:00:02Z",
        channelId: "UCFQ_CWYmt-ScWaPX4YfnBrQ",
        title:
          "40 REUSABLE ALTERNATIVES TO DISPOSABLES // zero waste swaps to use again and again",
        description:
          "Find out more about the 40 reusables here: 20 Zero Waste Beauty Hacks (minimaki stick, nail stone etc) ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/8E9fmr85yQ8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/8E9fmr85yQ8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/8E9fmr85yQ8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Gittemary Johansen",
        liveBroadcastContent: "none",
        publishTime: "2020-08-04T10:00:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "0Ovw3l_YkflttJAxseL-muGTOeM",
      id: {
        kind: "youtube#video",
        videoId: "JLS6nGrsZqo",
      },
      snippet: {
        publishedAt: "2019-09-27T13:17:47Z",
        channelId: "UCNXvxXpDJXp-mZu3pFMzYHQ",
        title: "Why we should rethink Zero Waste.",
        description:
          "In this Our Changing Climate environmental video essay, I look at the difficulties surrounding the Zero Waste lifestyle, especially for beginners. Specifically, I look ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JLS6nGrsZqo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JLS6nGrsZqo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JLS6nGrsZqo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Our Changing Climate",
        liveBroadcastContent: "none",
        publishTime: "2019-09-27T13:17:47Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "sWEyPSYIyAGRgYI4qznkvIyvhHg",
      id: {
        kind: "youtube#video",
        videoId: "npPR95sVh8Y",
      },
      snippet: {
        publishedAt: "2019-09-12T16:00:09Z",
        channelId: "UCZqVfLvSXSGnVT_awp9WBMw",
        title: "Zero waste for beginners",
        description:
          "* Please note that my videos and blog contain affiliate links which allow me to market products that I currently use or recommend. At no additional cost to you, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/npPR95sVh8Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/npPR95sVh8Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/npPR95sVh8Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "simply by christine",
        liveBroadcastContent: "none",
        publishTime: "2019-09-12T16:00:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "g6wSrE1z6HP1N5ymi5OFdz-t-S0",
      id: {
        kind: "youtube#video",
        videoId: "xd30z19ZijI",
      },
      snippet: {
        publishedAt: "2020-07-31T15:30:02Z",
        channelId: "UCZqVfLvSXSGnVT_awp9WBMw",
        title: "Starting a zero waste store",
        description:
          "* Please note that my videos and blog contain affiliate links which allow me to market products that I currently use or recommend. At no additional cost to you, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/xd30z19ZijI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/xd30z19ZijI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/xd30z19ZijI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "simply by christine",
        liveBroadcastContent: "none",
        publishTime: "2020-07-31T15:30:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "C-g2a42E_zTNYKhPSDATsnZsdj4",
      id: {
        kind: "youtube#video",
        videoId: "OagTXWfaXEo",
      },
      snippet: {
        publishedAt: "2017-10-18T13:00:03Z",
        channelId: "UC-ga3onzHSJFAGsIebtVeBg",
        title: "10 Ways to Reduce Waste | Zero Waste for Beginners",
        description:
          "The 5 R's of Waste Management • REFUSE what you don't need • REDUCE what you do need • REUSE what you already have • RECYCLE what you cannot ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/OagTXWfaXEo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/OagTXWfaXEo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/OagTXWfaXEo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lavendaire",
        liveBroadcastContent: "none",
        publishTime: "2017-10-18T13:00:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "8C7_MlKN0E_G7M-i5Njls5xiMGI",
      id: {
        kind: "youtube#video",
        videoId: "xkG4jSbfReQ",
      },
      snippet: {
        publishedAt: "2020-03-17T17:34:41Z",
        channelId: "UCkq2gEWE-i647M71bh7zDxA",
        title: "100 ZERO WASTE SWAPS YOU HAVE TO TRY",
        description:
          "These swaps could make a huge difference to the amount of waste you produce. Take what is relevant and applicable for you and your lifestyle. Let me know in ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/xkG4jSbfReQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/xkG4jSbfReQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/xkG4jSbfReQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Sustainably Vegan",
        liveBroadcastContent: "none",
        publishTime: "2020-03-17T17:34:41Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "37iRm1HqJ1cgGnt8mvi630A8qUg",
      id: {
        kind: "youtube#video",
        videoId: "W8Ux3doMzMs",
      },
      snippet: {
        publishedAt: "2020-09-30T23:00:08Z",
        channelId: "UCM6cN45p-QTDRwVPVPRpfYQ",
        title: "going zero waste kinda ruined my life (an update)",
        description:
          "Head to squarespace.com/SEDONA to save 10% off your first purchase of a website or domain using code SEDONA *Subscribe for more!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/W8Ux3doMzMs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/W8Ux3doMzMs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/W8Ux3doMzMs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Sedona Christina",
        liveBroadcastContent: "none",
        publishTime: "2020-09-30T23:00:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "keGHrNMqR3D5cFPaam_QuG1XygM",
      id: {
        kind: "youtube#video",
        videoId: "HZsJxMDR8uw",
      },
      snippet: {
        publishedAt: "2020-11-13T15:46:46Z",
        channelId: "UCiyAxuDj-Y47PJzpHqfO_cg",
        title: "SUB) 제로웨이스트 초보의 분리배출 Zero waste beginner in Korea",
        description:
          "zerowaste #koreanaestheticvlog Even though I am not perfect for zero waste, I try to do my best. One of the things I can do is throw away trash in the right way.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/HZsJxMDR8uw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/HZsJxMDR8uw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/HZsJxMDR8uw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "어느덧오늘Onul",
        liveBroadcastContent: "none",
        publishTime: "2020-11-13T15:46:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Afr8HYJGnYKM8VxeVE7z4RQQ8J8",
      id: {
        kind: "youtube#video",
        videoId: "ZyAlwaA3lv0",
      },
      snippet: {
        publishedAt: "2019-08-16T00:00:02Z",
        channelId: "UC56_hOqEtBqHwnVNBzOWj-A",
        title: "ZERO WASTE FOR BEGINNERS || 28 ECO HACKS",
        description:
          "Timestamps: 0:01 - eco-friendly alternatives to plastics 2:43 - DIY toothpaste 5:32 - candle holder 7:43 - pencil holders 12:42 - sunglasses case ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ZyAlwaA3lv0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ZyAlwaA3lv0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ZyAlwaA3lv0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "5-Minute Crafts VS",
        liveBroadcastContent: "none",
        publishTime: "2019-08-16T00:00:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "d6_mgVG1WNh3T-opocWS0UULcgg",
      id: {
        kind: "youtube#video",
        videoId: "w7F1YxPYjSM",
      },
      snippet: {
        publishedAt: "2021-01-17T14:00:31Z",
        channelId: "UCv2LNRhF34_v1VNC08ZuooA",
        title:
          "my ✨FAVORITE✨  zero waste &amp; sustainable swaps for 2021 (that are not water bottles &amp; straws)",
        description:
          '"You cannot do all the good that the world needs, but the world needs all the good that you can do." © -------- Get More by Signing Up for my SECRET Video List ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/w7F1YxPYjSM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/w7F1YxPYjSM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/w7F1YxPYjSM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Shelbizleee",
        liveBroadcastContent: "none",
        publishTime: "2021-01-17T14:00:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FX5Y5-UTJI7PfUXQItVSfb6zzv8",
      id: {
        kind: "youtube#video",
        videoId: "M7ikhWfHQc8",
      },
      snippet: {
        publishedAt: "2020-07-25T15:00:06Z",
        channelId: "UCEMArgthHuEtX-04qL_8puQ",
        title: "This Zero-Waste Grocery Store Should Be Everywhere",
        description:
          "This grocery store is completely plastic-free and package-free to help you shop zero waste! Check out tare at @taregrocery on Instagram or at their website ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/M7ikhWfHQc8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/M7ikhWfHQc8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/M7ikhWfHQc8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Goodful",
        liveBroadcastContent: "none",
        publishTime: "2020-07-25T15:00:06Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "XwjfAs70-Uflayz68CwLKYgcn4o",
      id: {
        kind: "youtube#video",
        videoId: "DFpiqGBXNSE",
      },
      snippet: {
        publishedAt: "2020-06-14T11:00:04Z",
        channelId: "UCOOoeFFt641fiLUghzE9CHg",
        title: "A Zero Waste Morning Routine",
        description:
          "--------------------Some DIY videos-------------------- *Door Draft Stopper: https://youtu.be/1kauhWv5fEg *Clay Decorations: https://youtu.be/YIeWXGYTBkI ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/DFpiqGBXNSE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/DFpiqGBXNSE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/DFpiqGBXNSE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Fairyland Cottage",
        liveBroadcastContent: "none",
        publishTime: "2020-06-14T11:00:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FXdoxGr16VZ1dQOBAb5yP3HyB_Y",
      id: {
        kind: "youtube#video",
        videoId: "Rw4HQSS-lB0",
      },
      snippet: {
        publishedAt: "2018-10-26T17:30:00Z",
        channelId: "UCfQDD-pbllOCXHYwiXxjJxA",
        title: "A Day in My Life with Zero Waste",
        description:
          "How hard can it be to sustain a zero-waste lifestyle? Host Simone Sullivan visited Stevie Van Horn, a woman who manages to keep down years of her landfill ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Rw4HQSS-lB0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Rw4HQSS-lB0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Rw4HQSS-lB0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "VICE Life",
        liveBroadcastContent: "none",
        publishTime: "2018-10-26T17:30:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qErL0W1ELqNFWXHvyOcds5ci8H0",
      id: {
        kind: "youtube#video",
        videoId: "qqskZVg65K8",
      },
      snippet: {
        publishedAt: "2020-02-19T14:00:18Z",
        channelId: "UCv2LNRhF34_v1VNC08ZuooA",
        title:
          "zero waste swaps for EVERYONE // Swaps for Beginners &amp; Advanced",
        description:
          "You cannot do all the good that the world needs, but the world needs all the good that you can do.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qqskZVg65K8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qqskZVg65K8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qqskZVg65K8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Shelbizleee",
        liveBroadcastContent: "none",
        publishTime: "2020-02-19T14:00:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "jDWARSDnSikYAE-bEDRI5G_ADgs",
      id: {
        kind: "youtube#video",
        videoId: "--f8hjw9Uiw",
      },
      snippet: {
        publishedAt: "2019-11-20T20:00:00Z",
        channelId: "UCzsF1ghKHeif7AmTNlRYAzQ",
        title:
          "Everything Zero Waste Expert Lauren Singer Eats in a Day | Food Diaries | Harper&#39;s BAZAAR",
        description:
          "Activist and Founder of Package Free Shop, Lauren Singer has been living a zero waste lifestyle for eight years and is “on a mission to make the world less ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/--f8hjw9Uiw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/--f8hjw9Uiw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/--f8hjw9Uiw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Harper's BAZAAR",
        liveBroadcastContent: "none",
        publishTime: "2019-11-20T20:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "2fZpp2zRPfEVJllytBfjiOFt3Tg",
      id: {
        kind: "youtube#video",
        videoId: "Z-A6RwQCl6o",
      },
      snippet: {
        publishedAt: "2021-02-20T16:37:44Z",
        channelId: "UCLSh2s2hsYnyhgn_al4B2bw",
        title: "Watch This Before Going Zero Waste!",
        description:
          "Being perfectly \"zero waste\" isn't the most important thing we can do to help save the planet. Here's a few other things you can try though! Check Out Bill's ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Z-A6RwQCl6o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Z-A6RwQCl6o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Z-A6RwQCl6o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Levi Hildebrand",
        liveBroadcastContent: "none",
        publishTime: "2021-02-20T16:37:44Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "xHWnVpo6IqhG2X-fEh4BG8GD-2M",
      id: {
        kind: "youtube#video",
        videoId: "ojON67Ww-RU",
      },
      snippet: {
        publishedAt: "2020-05-07T10:00:30Z",
        channelId: "UCFQ_CWYmt-ScWaPX4YfnBrQ",
        title: "50 OF MY DAILY ZERO WASTE HABITS IN 24 HOURS",
        description:
          "SUPPORT MY WORK AND FIND MY EBOOK AT https://www.patreon.com/Gittemary ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ojON67Ww-RU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ojON67Ww-RU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ojON67Ww-RU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Gittemary Johansen",
        liveBroadcastContent: "none",
        publishTime: "2020-05-07T10:00:30Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "GZ9ZvqCfnjfPE1qUeU0UCWC93lQ",
      id: {
        kind: "youtube#video",
        videoId: "SZH9HQR3uRw",
      },
      snippet: {
        publishedAt: "2019-05-15T20:49:51Z",
        channelId: "UCtFNxIYKroHC97NUEjMHbeA",
        title:
          "(sub) 포장 없는 물건 구입이 가능한 제로 웨이스트 장터 | Zero Waste Shopping",
        description:
          "각종 친환경 제품, 식재료, 치약, 비누, 세제 등 다양한 품목을 미리 준비한 용기에 담아 구입할 수 있는 제로 웨이스트 장터 '채우장'. 좋은 식재료와 음식, 그리고 친환경 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/SZH9HQR3uRw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/SZH9HQR3uRw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/SZH9HQR3uRw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "단순한일상",
        liveBroadcastContent: "none",
        publishTime: "2019-05-15T20:49:51Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "og5SfBLK5TatKa9gb1ig9o7DDTk",
      id: {
        kind: "youtube#video",
        videoId: "cd48LW3qeNE",
      },
      snippet: {
        publishedAt: "2019-09-08T04:30:02Z",
        channelId: "UC8ZyfGD_qP-v75DGCzYQw6g",
        title: "What It’s Like to Live with Zero Waste",
        description:
          "How hard can it be to sustain a zero waste lifestyle? Host Simone Sullivan visited Stevie Van Horn, a woman who manages to keep down years of her landfill ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/cd48LW3qeNE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/cd48LW3qeNE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/cd48LW3qeNE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "VICE Asia",
        liveBroadcastContent: "none",
        publishTime: "2019-09-08T04:30:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "R5c-WTk_bPF77PG4EQjD1aDsSIY",
      id: {
        kind: "youtube#video",
        videoId: "pF72px2R3Hg",
      },
      snippet: {
        publishedAt: "2015-05-27T14:32:45Z",
        channelId: "UCsT0YIqwnpJCM-mx7-gSA4Q",
        title: "Why I live a zero waste life | Lauren Singer | TEDxTeen",
        description:
          "Lauren is an Environmental Studies graduate from NYU and former Sustainability Manager at the NYC Department of Environmental Protection, and the amount ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/pF72px2R3Hg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/pF72px2R3Hg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/pF72px2R3Hg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "TEDx Talks",
        liveBroadcastContent: "none",
        publishTime: "2015-05-27T14:32:45Z",
      },
    },
  ]);

  const [instagram, setInstagram] = useState([
    {
      kind: "insta",
      by: "ecochronicles",
      keyword: "zerowaste",
      description:
        "What is greenwashing and how to avoid it? \
      Repost @easyecotips \
      “Greenwashing” is the practice of marketing a product or a brand as being greener or more environmentally friendly than they really are. \
      As people are increasingly aware of their impact on the planet, many companies have seen this as a great business potential. Unfortunately many of them just try to appear eco-friendly through their image and marketing rather than through real changes. It is called “greenwashing” \
      Learn how to identify greenwashing and how to avoid it. Here are a few tips: \
      1️⃣ Be cautious of products making generic claims like “100% natural” or “environmentally friendly” without information as to how or why. \
      2️⃣ Avoid products that make irrelevant claims, like “CFC-free” (CFCs were banned more than 20 years ago). \
      3️⃣Look for a seal or certification mark from a recognized, independent third party specializing in green claims. \
      4️⃣Look for the packaging: while a product may be green, is the packaging green as well? \
      5️⃣Don’t be misled by pretty pictures or use of earth-friendly colors on product labels. MacDonalds or Coca-Cola might have green color on their logo, that doesn’t make them eco-friendly! \
      6️⃣ Question percentage claims, such as “This product contains 50% more recycled content.” Fifty percent more than what? \
      For more ideas on how to be more eco-friendly, visit our profile and find all our @easyecotips 🌿",
      hashtags:
        "#eco #easyecotips #recycled #tips #ecofriendly #ecotips #greentips #zerowaste #zerowasteliving #zerowastelifestyle #zerowastelife #climatechange #globalwarming #reuse #reducereuserecycle #zerowastetips #savetheearth #ecofriendlyproducts #ecofriendlyliving #noplanetb #greenwashing #didyouknow #ecohacks #lowimpact",
      like: 2266,
      link: "https://www.instagram.com/p/CM45gkPni0l/",
      img: "card_img/1.png",
    },
    {
      kind: "insta",
      by: "earth_vol2",
      keyword: "zerowaste",
      description:
        "We can't all relocate to Mars folks, why don't we try live live a more earth conscious life instead? It's way easier than you think 🌿 \
      Follow @earth_vol2 for daily eco news and tips 🌎💚",
      hashtags:
        "#easyecotips #recycled #ecofriendly #ecotips #ecology #zerowaste #zerowasteliving #zerowastelifestyle #zerowastelife #greenliving #zerowasteliving #climatechange #globalwarming #reuse #mars #reducereuserecycle #zerowastetips #savetheplanet #savethebees #savetheearth #greenideas #ecoideas #ecofriendlyproducts #ecofriendlyliving #environment #environmentallyfriendly",
      like: 1434,
      link: "https://www.instagram.com/p/CM4oUURnvHV/",
      img: "card_img/2.png",
    },
    {
      kind: "insta",
      by: "tante_emma_unverpack",
      keyword: "zerowaste",
      description:
        "Test: Sind die Neuruppiner wieder und noch bereit für plastikfreie Lebensmittel? Einige beliebte Produkte sind wieder im Sortiment und ich gestehe, dass mir ein wenig die Knie schlottern. Zu groß war der Verlust in den letzten Monaten, als säckeweise Lebensmittel verdorben sind. \
      Jedoch ist die Nachfrage nach ein paar Sorten in letzter Zeit gestiegen, und die Enttäuschung war groß, als ich immer wieder mit Gläsern ausgestattete Einkäufer mit leeren Gefäßen wieder losschicken musste. Ich glaube immer noch: Wäre doch gelacht, wenn wir es nicht hinkriegen würden, etwas weniger Plastik zu verbrauchen! Wenn wir weniger davon abhängig wären und offen sind für nachhaltigere Lösungen. Ein kleines bisschen für das Große Ganze. Oder? \
      Wir befinden uns also noch ein wenig auf der Suche, in der Test-Phase und mit einer großen Portion Vorsicht und Zuversicht. \
      Danke jedenfalls für euer Verständnis, die aufbauenden Kommentare und an jeden Vorreiter, Nich-unterkriegen-lasser und Einen-kleinen-Unterschied-Macher!",
      hashtags:
        "#unverpacktladen #plastikfreieinkaufen #nowaste #zerowaste #ecofriendly #brandenburg #neuruppin #bulkshopping #bulkshop",
      like: 131,
      link: "https://www.instagram.com/p/CM1mvq4lMaE/",
      img: "card_img/3.png",
    },
    {
      kind: "insta",
      by: "candicemtay",
      keyword: "zerowaste",
      description:
        "With April (Earth Month) coming up, I’ve been thinking more about my low waste lifestyle and how I can continue to learn and incorporate different things to be more zerowaste. I love experimenting with low waste DIYs because it can be so creative and fun making things from scratch. Lately I’ve been exploring different DIYs and repurposing projects like the toilet cleaning bombs (recipe in reels!) and homemade oat milk. Pictured here are two ways to repurpose food scraps. \
      🍃 Regrow your green onions in water! Simply save about an inch and a half of the bottom of your onions and put it in water. \
      🍃 Infuse vinegar with old citrus peels for a homemade all-purpose cleaner. These peels have been sitting here for two weeks and I can’t wait to finish making my vinegar spray this weekend! \
      What are some fun ways you’ve been repurposing or incorporating low waste routines into your life?",
      hashtags:
        "#zerowaste #zerowasteliving #lowwasteliving #lowwaste #ecofriendly #ecolife #zerowaste #sustainability #zerowastetips #realmoments #reallife #minimaliststyle #thehappynow #postthepeople #peoplescreatives #consciousliving #slowliving #littlestoriesofmylife #alifeofintention #posttheordinary #zerowastecollective #zerowasteperiod #lowwasteperiod #zerowastehabits #realmoments #everysquareastory #zerowastecollective #minimalist #minimaliststyle #zerowasteswaps ",
      like: 682,
      link: "https://www.instagram.com/p/CM4ehGEnFPh/",
      img: "card_img/4.png",
    },
    {
      kind: "insta",
      by: "jessica_rosestitch",
      keyword: "zerowaste",
      description:
        "Mini Spring Mandala Online Workshop - stitch up your own embellished design! - April 9th 6:30PM start time. Link is in my bio or DM for more info!",
      hashtags:
        "#colourpop #textiles #embroidery #textileartist #textileoftheday #springisintheair #onlineworkshop #handembroidery #embellished #zerowaste #mandalaart #embroiderydesign #britishcrafts #colourandpattern #3Dembroidery #contemporaryembroidery #modernmakersmovement #societyofembroideredwork",
      like: 225,
      link: "https://www.instagram.com/p/CM5JX30rsBO/",
      img: "card_img/5.png",
    },
    {
      kind: "insta",
      by: "sandandlove",
      keyword: "zerowaste",
      description: "",
      hashtags:
        "#ecofriendly #sustainable #ecofriendlyhome #vegan #nontoxic #handmade #madeinla #zerowaste #zerowastelife #nontoxichome #ecofriendlystore #ecofriendlylife #sustainablefashion #plasticfree #malibu #malibubeach #beigeaesthetic #homeinspo #interiordesign",
      like: 0,
      link: "https://www.instagram.com/p/CM5zrEBjaTS/",
      img: "card_img/6.png",
    },
    {
      kind: "insta",
      by: "studio_minti",
      keyword: "upcycle",
      description:
        "It’s Transformation Thursday beauties! 👚 Thought we’d keep on theme and do a pink shirt upcycle for you this week! 💕",
      hashtags:
        "#upcycle #prelovedfashion #sustainablefashion #sustainability #secondhandfashion #upcycled #refashion #studiominti",
      like: 567,
      link: "https://www.instagram.com/p/CM2t08hH36P/",
      img: "card_img/7.png",
    },
    {
      kind: "insta",
      by: "rxchicago",
      keyword: "upcycle",
      description:
        "This little piece of seating has potential! We can totally picture it in somebody's mud room or breakfast nook 😍 (update:sold)",
      hashtags:
        "#reclaimed #reuse #sustainabledesign #sustainableliving #sustainablehome #architecturalsalvage #reclaimedfurniture #deconstruction #upcycle #nonprofit",
      like: 287,
      link: "https://www.instagram.com/p/CM7L68sLLdp/",
      img: "card_img/8.png",
    },
    {
      kind: "insta",
      by: "ruthwatkincostumes",
      keyword: "upcycle",
      description:
        "Have you ever done a skills swap? The vague idea for this shirt has been in my head for years but I don't have the patience to sit and embroider. My sister had a pile of ill-fitting clothes she didn't have the skills to fix - but, she loves an embroidery project...",
      hashtags:
        "#skillswap #embroidery #handembroidered #upcycle #thrifted #makeclotheslast #flowerembroidery #earthtones #cottagecore",
      like: 1142,
      link: "https://www.instagram.com/p/CM4T8nnhuvs/",
      img: "card_img/9.png",
    },
    {
      kind: "insta",
      by: "fayenewmandesigns",
      keyword: "upcycle",
      description:
        "Thank you to ALL of my followers for your support. To show my gratitude I’m giving away this piece of sea glass in the picture which I will make into a ring of your size.",
      hashtags:
        "#giveaway #goodluck #handmade #seaglass #seaglassjewellery #seahamseaglass #rareseaglass #pinkseaglass #redseaglass #blueseaglass #seaglasslove #seaglassaddict #beachfinds #beachglass #recycle #upcycle #rainbow #turquoiseseaglass #orangeseaglass #vintage #vintageseaglass #seaglasscollector #seahammulti #purpleseaglass",
      like: 168,
      link: "https://www.instagram.com/p/CM2GJ2hBJky/",
      img: "card_img/10.png",
    },
    {
      kind: "insta",
      by: "bluehillcustom",
      keyword: "upcycle",
      description:
        "This long white piece is a match with the green end table we posted the other day. This piece had some really unique hardware and detail that looked especially good in white with dark accents.",
      hashtags:
        "#refurbishedfurniture #furnituredesign #paintedfurnitureshop #shabbychic #decor #vintagefurniture #paintedfurnitureraleigh #paintedfurnitureforsale #paintedfurniturelove #chalkpaintedfurniture #upcycle #refinishedfurnituretour #upcycledfurniture #furnitureartist #furniturerestoration",
      like: 110,
      link: "https://www.instagram.com/p/CM4iwHrFvQ9/",
      img: "card_img/11.png",
    },
  ]);

  const [blogPosts, setBlogPosts] = useState([
    {
      kind: "google",
      keyword: "sustainable",
      title: "What is meant by sustainable living?",
      link:
        "https://www.thegoodtrade.com/features/sustainable-living-definition",
      img: "event_image/1.jpg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What is sustainable living and why is it important?",
      link:
        "http://www.greenewit.com/inmedia/blog/why-it-is-important-to-live-sustainably.html",
      img: "event_image/2.jpg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are some examples of sustainable living?",
      link:
        "https://www.conserve-energy-future.com/sustainable-living-principles-benefits-and-examples.php",
      img: "event_image/3.jpg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "How can we live a sustainable life?",
      link: "https://kiwienergy.us/10-ways-to-live-a-sustainable-life/",
      img: "event_image/4.jpg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What is the importance of sustainable living?",
      link:
        "https://www.unthsc.edu/operations/wp-content/uploads/sites/24/Sustainability_Summary_Half_Page_better_pic_1_.pdf",
      img: "event_image/5.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are the benefits of sustainable living?",
      link:
        "https://www.goldcoast.qld.gov.au/environment/benefits-of-sustainable-living-12014.html",
      img: "event_image/6.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are the 3 pillars of sustainability?",
      link:
        "https://www.futurelearn.com/info/courses/sustainability-society-and-you/0/steps/4618",
      img: "event_image/7.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "How can I practice sustainability at home?",
      link:
        "https://blog.arcadia.com/10-sustainability-practices-can-follow-home/",
      img: "event_image/8.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are the 3 principle of sustainability?",
      link:
        "https://youmatter.world/en/definition/definitions-sustainability-definition-examples-principles/",
      img: "event_image/9.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are examples of sustainable design?",
      link:
        "https://resource.temarry.com/blog/examples-of-sustainable-development-in-the-u.s",
      img: "event_image/10.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are sustainable design strategies?",
      link:
        "https://hmcarchitects.com/news/the-top-6-sustainable-architecture-strategies-for-public-building-design-2018-10-03/",
      img: "event_image/11.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "How do you become a sustainable design?",
      link:
        "https://sustain.wisconsin.edu/blog/6-ways-get-sustainability-job-experience/",
      img: "event_image/12.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What are the 3 principle of sustainability?",
      link:
        "https://youmatter.world/en/definition/definitions-sustainability-definition-examples-principles/",
      img: "event_image/13.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "What brands are sustainable?",
      link:
        "https://www.theguardian.com/fashion/gallery/2020/apr/21/planet-fashion-the-10-coolest-ethical-fashion-brands",
      img: "event_image/14.jpeg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "Is Zara sustainable?",
      link: "https://www.eco-stylist.com/how-sustainable-is-zara/",
      img: "event_image/15.jpg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "Why is sustainable fashion important?",
      link:
        "https://www.goodwear.com/blogs/news/the-top-benefits-of-sustainable-clothing",
      img: "event_image/16.jpg",
    },
    {
      kind: "google",
      keyword: "sustainable",
      title: "How can clothes be sustainable?",
      link: "https://www.whowhatwear.com/easy-sustainable-fashion-tips",
      img: "event_image/17.jpg",
    },
  ]);

  // useEffect (()=> {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try{
  //       const response = await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=zerowaste&key=[APIKEY]&maxResults=10');
  //       console.log(response.data.items)
  //       setYoutube(response.data.items);
  //     } catch(e){
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  //   },[]);

  //   if(loading){
  //     return <div>대기 중...</div>
  //   }
  //   if(!youtube){
  //     return null;
  //   }

  return (
    <ContentStyle>
      <div class="platform">
        <img class="svg" src={trending} />
        <h1>Trending Contents</h1>
      </div>
      <br></br>
      <ContentSwiper></ContentSwiper>
      <div style={{ height: "20px" }}></div>
      <hr></hr>
      <div id="filtering">
        <div>
          <h4>Filter</h4>
          <div>
            <p>most popular</p>
            <p> &nbsp; | &nbsp; </p>
            <p>most recent</p>
            <br></br>
          </div>
        </div>
      </div>
      <div id="thisistags">
        <h4>Tag</h4>
        <table>
          <tr>
            <td>
              <button class="tag_button" id="button1" onClick={colorChange1}>
                zerowaste
              </button>
            </td>
            <td>
              <button class="tag_button" id="button2">
                ecochronicles
              </button>
            </td>
            <td>
              <button class="tag_button" id="tag_button3">
                sandandlove
              </button>
            </td>
            <td>
              <button class="tag_button" id="button4">
                dailylife
              </button>
            </td>
            <td>
              <button class="tag_button" id="button5">
                Recycledgoods
              </button>
            </td>
            <td>
              <button class="tag_button" id="button6">
                HowtoMake
              </button>
            </td>
            <td>
              <button class="tag_button" id="button7">
                sustainable
              </button>
            </td>
            <td>
              <button class="tag_button" id="button8">
                supporter
              </button>
            </td>
            <td>
              <button class="tag_button" id="button9">
                Service
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="scrollcontent">
        <div class="platform">
          <img class="svg" src={youtubesvg} />
          <h1>Youtube Videos</h1>
        </div>
        <div style={{ overflow: "auto", display: "flex", width: "1570px" }}>
          {youtube.map((youtube, i) => {
            console.log(youtube);
            return (
              <YoutubeCard
                key={i}
                img={youtube.snippet.thumbnails.medium.url}
                title={youtube.snippet.channelTitle}
                description={youtube.snippet.description}
              />
            );
          })}
        </div>
        <div style={{ height: "30px" }}></div>
        <div class="platfrom" style={{ display: "flex" }}>
          <img class="svg" src={insta} />
          <h1>Instagram Posts</h1>
        </div>
        <div
          style={{
            overflow: "auto",
            display: "flex",
            width: "1570px",
          }}
        >
          {instagram.map((insta, i) => {
            console.log(insta);
            return (
              <InstaCard
                key={i}
                img={insta.img}
                author={insta.by}
                description={insta.description.slice(0, 200) + "..."}
              />
            );
          })}
        </div>
        <br></br>
        <div class="platfrom" style={{ display: "flex" }}>
          <img class="svg" src={blog} />
          <h1>Blog Posts</h1>
        </div>
        <div style={{ overflow: "auto", display: "flex", width: "1570px" }}>
          {blogPosts.map((blog, i) => {
            console.log(blog);
            return (
              <BlogCard
                key={i}
                img={blog.img}
                title={blog.title}
                link={blog.link.slice(0, 200) + "..."}
              />
            );
          })}
          <BlogCard
            img="https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg"
            title="hi"
            author="jiyeon"
          ></BlogCard>
        </div>
      </div>
    </ContentStyle>
  );
}

export default Content;

function colorChange1() {
  var button = document.getElementById("button1");
  button.style.backgroundColor = "#735d78";
  button.style.color = "white";
}

// Style
const ContentStyle = styled.div`
  position: relative;
  height: 100%;
  background-color: #edebe6;
  left: 80px;
  padding: 20px;

  h1 {
    font-weight: bold;
    font-size: 30px;
    padding-top: 10px;
  }
  .platform {
    display: flex;
  }
  .svg {
    align-self: center;
    height: 50px;
    margin-right: 15px;
  }

  #filtering {
    display: inline-flex;
  }

  #filtering > div {
    display: inline-flex;
  }

  #filtering p {
    display: inline-flex;
    margin-left: 25px;
    margin-top: 3px;
  }

  #thisistags {
    display: inline-flex;
  }

  #thisistags > h4 {
    margin-left: 100px;
  }

  #thisistags > table {
    margin-left: 25px;
  }

  td {
    padding-right: 5px;
  }

  td > button {
    color: #735d78;
    background-color: #cccccc;
    border: 0px;
    margin-top: 3px;
    border-radius: 8px;
    padding-left: 15px;
    padding-right: 15px;
    transition: all 0.3s ease 0s;
  }

  td > button:hover {
    background-color: #735d78;
    color: white;
  }
`;
