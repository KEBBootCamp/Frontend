import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Dropdown from "../components/common/Dropdown";
import Calendar from "../components/common/Calendar";

// 제조사 및 모델 데이터
const models = {
    현대: ["펠리세이드", "아반떼", "쏘나타", "그랜저", "아이오닉"],
    기아: ["레이", "모닝", "스포티지", "셀토스", "K5", "K7"],
    르노삼성: ["QM6", "SM6", "XM3", "마스터", "트위지"],
};

// 검수 장소 데이터
const locations = ["서울", "경기도", "강원도", "충청도", "전라도", "경상도"];

function Home() {
    const navigate = useNavigate();

    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [location, setLocation] = useState("");

    const handleManufacturerChange = (e) => {
        const selectedManufacturer = e.target.value;
        setManufacturer(selectedManufacturer);
        setModel(""); // 제조사 변경 시 모델 초기화
    };

    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

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
                        <Dropdown
                            type="manufacturer"
                            value={manufacturer}
                            onChange={handleManufacturerChange}
                            options={Object.keys(models)}
                        />
                    </RightBox>
                </SelectBoxWrapper>
                <SelectBoxWrapper>
                    <LeftBox>모델</LeftBox>
                    <RightBox>
                        <Dropdown
                            type="model"
                            value={model}
                            onChange={handleModelChange}
                            options={manufacturer ? models[manufacturer] : []}
                        />
                    </RightBox>
                </SelectBoxWrapper>
                <SelectBoxWrapper>
                    <LeftBox>검수 장소</LeftBox>
                    <RightBox>
                        <Dropdown
                            type="location"
                            value={location}
                            onChange={handleLocationChange}
                            options={locations}
                        />
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
