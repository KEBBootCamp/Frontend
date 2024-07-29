import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Dropdown from "../components/common/Dropdown";
import Calendar from "../components/common/Calendar";

function Home() {
    const navigate = useNavigate();

    const handleClickFindButton = () => {
        navigate("/expert-list");
    };

    const handleClickLoginButton = () => {
        navigate("/login");
    };
    return (
        <HomePageWrapper>
            <Header />
            <SelectBodyWrapper>
                <SelectBoxWrapper>
                    <LeftBox>제조사</LeftBox>
                    <RightBox>
                        <Dropdown />
                    </RightBox>
                </SelectBoxWrapper>
                <SelectBoxWrapper>
                    <LeftBox>모델</LeftBox>
                    <RightBox>
                        <Dropdown />
                    </RightBox>
                </SelectBoxWrapper>
                <SelectBoxWrapper>
                    <LeftBox>검수 장소</LeftBox>
                    <RightBox>
                        <Dropdown />
                    </RightBox>
                </SelectBoxWrapper>
                <SelectBoxWrapper>
                    <LeftBox>검수 날짜</LeftBox>
                    <RightBox>
                        <Calendar />
                    </RightBox>
                </SelectBoxWrapper>
            </SelectBodyWrapper>
            <ButtonWrapper>
                <FindButton onClick={handleClickFindButton}>찾기</FindButton>
                <LoginBox onClick={handleClickLoginButton}>로그인/회원가입</LoginBox>
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

const SelectBodyWrapper = styled.div`
    border-radius: 5px;
    margin-top: 2rem;
`;

const SelectBoxWrapper = styled.div`
    width: 100%;
    height: 10rem;

    display: flex;

    font-size: 2rem;
    background-color: rgb(245, 245, 247);
`;

const LeftBox = styled.div`
    width: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #bcbcbc;
`;

const RightBox = styled.div`
    width: calc(100% - 10rem);
`;

const ButtonWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`;
const FindButton = styled.button`
    width: 100%;
    height: 6rem;

    font-size: 1.8rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;

const LoginBox = styled.button`
    height: 2rem;

    font-size: 1.4rem;
    color: rgb(158, 158, 158);
    text-decoration: underline;
    line-height: 150%;

    cursor: pointer;
`;
