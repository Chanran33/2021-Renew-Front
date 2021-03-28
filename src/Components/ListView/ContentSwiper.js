// import { defaultLoadScriptProps } from '@react-google-maps/api/dist/LoadScript';
import { useState, useEffect } from "react";
import React from "react";
import Coverflow from "react-coverflow";
import styled from "styled-components";

const fn = function () {
  /* do your action */
};

const ContentSwiper = (props) => {
  const [youtube, setYoutube] = useState([
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

  return (
    <ContentSwiperStyle>
      <Coverflow
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={true}
        active={0}
        media={{
          "@media (max-width: 900px)": {
            width: "700px",
            height: "800px",
          },
          "@media (min-width: 900px)": {
            width: "1570px",
            height: "400px",
          },
        }}
      >
        {youtube.map((youtube) => {
          console.log(youtube);
          return (
            <img
              src={youtube.snippet.thumbnails.medium.url}
              alt={youtube.snippet.channelTitle}
              data-action={youtube.snippet.description}
            />
          );
        })}
      </Coverflow>
    </ContentSwiperStyle>
  );
};

const ContentSwiperStyle = styled.div`
  display: inline-block;
`;

export default ContentSwiper;
