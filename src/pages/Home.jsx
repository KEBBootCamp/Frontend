import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";

function Home() {
    return (
        <HomePageWrapper>
            <Header />
            <BoxWrapper>
                <DropDownWrapper>
                    <LeftDropDown>제조사</LeftDropDown>
                </DropDownWrapper>
                <DropDownWrapper>
                    <LeftDropDown>모델</LeftDropDown>
                </DropDownWrapper>
                <DropDownWrapper>
                    <LeftDropDown>검수 장소</LeftDropDown>
                </DropDownWrapper>
                <DropDownWrapper>
                    <LeftDropDown>검수 날짜</LeftDropDown>
                </DropDownWrapper>
            </BoxWrapper>
            <ButtonWrapper>
                <FindButton>찾기</FindButton>
                <LoginBox>로그인/회원가입</LoginBox>
            </ButtonWrapper>
        </HomePageWrapper>
    );
}

export default Home;

const HomePageWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const BoxWrapper = styled.div`
    border-radius: 5px;
    margin-top: 3rem;
`;

const DropDownWrapper = styled.div`
    width: 100%;
    height: 10rem;

    font-size: 1.5rem;
    background-color: #bcbcbc;
`;

const LeftDropDown = styled.div`
    width: 10rem;
    height: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: lightgray;
`;
const ButtonWrapper = styled.button`
    width: 100%;

    margin-top: 5rem;
`;
const FindButton = styled.button`
    width: 90%;
    height: 6rem;

    font-size: 1.5rem;

    border-radius: 5px;
    background-color: #4784ff;
    color: white;
    cursor: pointer;
`;

const LoginBox = styled.button`
    width: 50%;
    height: 2rem;

    color: #7a7a7a;
    cursor: pointer;
`;
