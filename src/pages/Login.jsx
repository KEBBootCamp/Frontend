import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleClickLoginButton = () => {
        navigate("/");
    };
    return (
        <LoginWrapper>
            <Header />
            <BoxContainer>
                <LoginTextWrapper>
                    <LoginText>로그인</LoginText>
                </LoginTextWrapper>
                <LoginBox>
                    <LoginBoxId>
                        <LoginInput type="text" placeholder="아이디" />
                    </LoginBoxId>
                    <LoginBoxPwd>
                        <LoginInput type="text" placeholder="비밀번호" />
                    </LoginBoxPwd>
                </LoginBox>
            </BoxContainer>
            <LoginContainer>
                <LoginButton onClick={handleClickLoginButton}>로그인</LoginButton>
                <NotMember>회원이 아닙니다.</NotMember>
            </LoginContainer>
        </LoginWrapper>
    );
}

export default Login;

const LoginWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const BoxContainer = styled.div`
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;

    background-color: rgb(245, 245, 247);
`;

const LoginTextWrapper = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: 400;
    font-size: 4rem;
`;

const LoginBox = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LoginBoxId = styled.div``;

const LoginBoxPwd = styled.div``;

const LoginInput = styled.input`
    width: 100%;
    height: 4.5rem;

    border: none;
    border: 0.05rem solid #9e9e9e;
    border-radius: 0.5rem;
`;

const LoginText = styled.div``;

const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
`;

const LoginButton = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 600;
    font-size: 1.8rem;

    margin-top: 4rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;

const NotMember = styled.button`
    color: rgb(158, 158, 158);

    font-weight: 400;
    font-size: 1.4rem;
    text-decoration: underline;
    line-height: 150%;

    cursor: pointer;
`;
