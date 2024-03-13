'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function useJapaneseMap(): JSX.Element {
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
            name: '소보쿠',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14720714131704, 126.92723133525503),
            route: '/place/소보쿠',
          },
          {
            name: '통큰돈까스',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14523238403192, 126.92973510658162),
            route: '/place/통큰돈까스',
          },
          {
            name: '돈까스틱',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14480684564143, 126.93034999876991),
            route: '/place/돈까스틱',
          },
          {
            name: '라멘티스트',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14516003902124, 126.92932914059989),
            route: '/place/라멘티스트',
          },

          {
            name: '교다이',
            imageSrc: '/logo.png',

            position: new kakao.maps.LatLng(35.14502759073875, 126.93019617867957),
            route: '/place/교다이',
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
