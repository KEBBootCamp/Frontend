import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Common/Header";

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

const BoxWrapper = styled.div`
    border-radius: 5px;
    margin-top: 3rem;
`;

const DropDownWrapper = styled.div`
    width: 100%;
    height: 10rem;

    font-size: 2rem;
    background-color: rgb(245, 245, 247);
`;

const LeftDropDown = styled.div`
    width: 10rem;
    height: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #bcbcbc;
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

    font-weight: 600;
    font-size: 1.8rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;

const LoginBox = styled.button`
    height: 2rem;

    color: rgb(158, 158, 158);
    text-decoration: underline;
    line-height: 150%;

    cursor: pointer;
`;
