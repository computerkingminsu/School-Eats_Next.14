'use client';

import Link from 'next/link';
import { useLogin } from '../../../hooks/useLogin';
import * as S from './LoginPage.styles';
import { useKakaoLogin } from '../../../hooks/useKakoLogin';
import { useRouter } from 'next/navigation';
import { Checkbox, CheckboxProps } from 'antd';
import { useRecoilState } from 'recoil';
import { autoLogin } from '../../../globalstate/globalstate';
import { useEffect, useState } from 'react';

export default function LoginPage(): JSX.Element {
  const { register, handleSubmit, errors }= useLogin();
  const [, setCheck] = useRecoilState(autoLogin);
  const { kakaoLogin } = useKakaoLogin();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    setCheck(e.target.checked);
  };

      const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
      }, []);

  return (
    <>
    {mounted &&
    <S.Wrapper>
      <S.HomeButtonWrapper>
        <S.BackButton onClick={goBack} />
        <Link href="/">
          <S.HomeButton />
        </Link>
      </S.HomeButtonWrapper>
      <S.Title>만나서 반가워요!</S.Title>

      <S.KakaoButtonWrapper onClick={kakaoLogin}>
        <S.KakaoLogo src="/kakao.png" />
        카카오로 간편 로그인
      </S.KakaoButtonWrapper>
      <S.Line>
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
        &nbsp;&nbsp;&nbsp;&nbsp;또는 &nbsp;&nbsp;&nbsp;&nbsp;
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
      </S.Line>
      <S.form onSubmit={handleSubmit}>
        <S.IdInput {...register('email')} type="email" placeholder="아이디" />
        {errors.email && <S.error>{errors.email.message}</S.error>}
        <S.PwInput {...register('password')} type="password" placeholder="비밀번호" />
        {errors.password && <S.error>{errors.password.message}</S.error>}
        <Checkbox onChange={onChange}>자동로그인</Checkbox>

        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.form>
      <Link href="/signup">
        <S.SignUpText>회원가입</S.SignUpText>
      </Link>
      <Link href="/resetpassword">
        <S.FindPassword>비밀번호 찾기</S.FindPassword>
      </Link>
      <S.CouponDiv>
        <S.CouponImg>🤸</S.CouponImg>
        회원 가입하고 <S.ColorText>&nbsp;&nbsp;School Eats&nbsp;</S.ColorText>를 마음껏 즐겨보세요!
      </S.CouponDiv>
    </S.Wrapper>}
    </>
  );
}
