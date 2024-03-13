'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function useChineseMap(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    //@ts-expect-error
    if (window.kakao && window.kakao.maps) {
      kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'),
          mapOption = {
            center: new kakao.maps.LatLng(35.14637162707166, 126.92806609511922),
            level: 4,
          };

        var map = new kakao.maps.Map(mapContainer, mapOption);

        const locations = [
          {
            name: '백두산',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14359797325633, 126.92482585917169),
            route: '/place/백두산',
          },

          {
            name: '일품',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14556586537565, 126.92969641170197),
            route: '/place/일품',
          },

          {
            name: '옌타이',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14524404050269, 126.93040998190367),
            route: '/place/옌타이',
          },

          {
            name: '탕화쿵푸마라탕',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.144405108979605, 126.92926120797044),
            route: '/place/탕화쿵푸마라탕',
          },

          {
            name: '마라클럽',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14647573716354, 126.92883417725054),
            route: '/place/마라클럽',
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
            router.push(location.route);
          });
        });
      });
    }
  }, []);

  return <></>;
}
