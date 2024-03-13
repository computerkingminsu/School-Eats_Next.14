// components/KakaoScriptLoader.tsx
'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
declare global {
  interface Window {
    Kakao: any;
  }
  const kakao: any;
}

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
export const kakaoRestApiKey = process.env.NEXT_PUBLIC_KAKAO_RESTAPIKEY;
export const kakaoAdminKey = process.env.NEXT_PUBLIC_KAKAO_ADMINKEY;
export const firebaseapp = initializeApp(firebaseConfig);
export const authInstance = getAuth();
export const db = getFirestore(firebaseapp);
export const storage = getStorage(firebaseapp);

export default function ScriptLoader() {
  const kakaoInit = () => {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const sessionExpiry = localStorage.getItem('sessionExpiry');
      if (sessionExpiry) {
        const now = new Date().getTime();
        if (now > parseInt(sessionExpiry, 10)) {
          authInstance.signOut();
          alert('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.');
          localStorage.removeItem('sessionExpiry');
          localStorage.removeItem('recoil-persist');
          window.location.href = '/';
          // 필요한 로그아웃 처리
        }
      }
    }, 1000); // 매 1초마다 실행

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정지
  }, []);

  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services,clusterer,drawing`}
        strategy="beforeInteractive"
      />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit} />
    </>
  );
}
