'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function useWesternMap(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    // 맵 만들기 ===================================
    //@ts-expect-error
    if (window.kakao && window.kakao.maps) {
      kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'), //지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(35.14637162707166, 126.92806609511922), //지도의 중심좌표
            level: 4, //지도의 확대 레벨
          };

        var map = new kakao.maps.Map(mapContainer, mapOption);

        const locations = [
          //양식

          {
            name: '피렌체',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.145592898249774, 126.92968267121469),
            route: '/place/피렌체',
          },
          {
            name: '헝그리브라더스',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14606589092191, 126.9293009228942),
            route: '/place/헝그리브라더스',
          },
          {
            name: '프랭크버거',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14575312478092, 126.93008856450622),
            route: '/place/프랭크버거',
          },
          {
            name: '노브랜드버거',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.145176528117496, 126.93056641511407),
            route: '/place/노브랜드버거',
          },
        ];
        locations.map((location, index) => {
          const markerImage = new kakao.maps.MarkerImage(location.imageSrc, new kakao.maps.Size(30, 30), {
            offset: new kakao.maps.Point(14, 0),
          });

          const marker = new kakao.maps.Marker({
            position: location.position,
            image: markerImage,
          });

          marker.setMap(map);

          const content =
            '<div class="customoverlay">' +
            `  <a href="#" id="navigateLink${index}"  style="display: block; background: #50627F; color: #fff; text-align: center; height: 20px; line-height: 22px; border-radius: 4px; padding: 0px 10px; font-size:12px; text-decoration:none;">` +
            `    <span class="title">${location.name}</span>` +
            '  </a>' +
            '</div>';

          const position = location.position;

          const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1,
          });
          const navigateLink = document.getElementById(`navigateLink${index}`);
          if (navigateLink) {
            navigateLink.addEventListener('click', function (e) {
              e.preventDefault();
              router.push(location.route);
            });
          }
          kakao.maps.event.addListener(marker, 'click', function () {
            //HTML 콘텐츠를 생성하고 스타일을 적용합니다
            router.push(location.route);
          });
        });
      });
    }
  }, []);

  return <></>;
}
