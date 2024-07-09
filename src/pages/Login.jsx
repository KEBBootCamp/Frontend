import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";

function Login() {
    return (
        <LoginWrapper>
            <Header />
            <BoxContainer>
                <BoxItem>
                    <LoginTextWrapper>
                        <LoginText>로그인</LoginText>
                    </LoginTextWrapper>
                    <IdBox />
                    <PwdBox />
                </BoxItem>
                <NotMember>회원이 아닙니다.</NotMember>
            </BoxContainer>
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
    display: flex;
    flex-direction: column;

    border-radius: 1rem;
    margin-top: 3rem;

    background-color: rgb(245, 245, 247);
`;

const LoginTextWrapper = styled.div`
    width: 70%;
    height: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-weight: 400;
    font-size: 4rem;

    background-color: lightblue;
`;

const LoginText = styled.div``;
const BoxItem = styled.div`
    width: 100%;
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    background-color: #bcbcbc;
`;

const IdBox = styled.div`
    width: 70%;
    height: 5rem;

    background-color: white;
`;

const PwdBox = styled.div`
    width: 70%;
    height: 5rem;

    background-color: whitesmoke;
`;

const NotMember = styled.button`
    color: rgb(158, 158, 158);

    font-weight: 400;
    font-size: 1.4rem;
    text-decoration: underline;
    line-height: 150%;

    cursor: pointer;
`;
