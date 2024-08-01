import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../components/common/Dropdown";
import MypageHeader from "../components/common/MypageHeader";

const manufacturers = ["현대", "기아", "르노삼성"];
const years = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

function ExpertMyInfoFix() {
    const [mainManufacturer, setMainManufacturer] = useState("");
    const [experience, setExperience] = useState("");

    const handleMainManufacturer = (e) => {
        setMainManufacturer(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    return (
        <ExpertMyInfoFixWrapper>
            <MypageHeader title="내 정보 수정" />
            <ToggleBoxContainer>
                <ToggleExpertBox>
                    <ExpertWrapper>
                        <ExpertText>경력</ExpertText>
                        <Dropdown value={experience} onChange={handleExperienceChange} options={years} width="8rem" />
                        <YearText>년</YearText>
                    </ExpertWrapper>
                    <ExpertWrapper>
                        <ExpertText>주력 제조사</ExpertText>
                        <Dropdown value={mainManufacturer} onChange={handleMainManufacturer} options={manufacturers} />
                    </ExpertWrapper>
                    <ExpertWrapper>
                        <ExpertText>연락처</ExpertText>
                        <ExpertPhoneNum type="text" placeholder="010-1234-5678" />
                    </ExpertWrapper>
                    <ExpertWrapper>
                        <ExpertText>한 줄 소개</ExpertText>
                        <ExpertIntro placeholder="현대차 검수에 특화된 전문가입니다. 연락 주세요!" />
                    </ExpertWrapper>
                </ToggleExpertBox>
                <ExpertMyinfoBox>
                    <FixDoneButton>저장하기</FixDoneButton>
                </ExpertMyinfoBox>
            </ToggleBoxContainer>
        </ExpertMyInfoFixWrapper>
    );
}

export default ExpertMyInfoFix;

const ExpertMyInfoFixWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(245, 245, 247);
`;

const ToggleBoxContainer = styled.div`
    width: 100%;
    padding: 2rem;

    background-color: rgb(245, 245, 247);
`;

const ToggleExpertBox = styled.div`
    height: 30rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1.5rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ExpertWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;
`;

const ExpertText = styled.label`
    width: 10rem;

    font-size: 1.7rem;
    /* font-weight: bold; */
`;
const YearText = styled.span`
    font-size: 1.5rem;
`;

const ExpertPhoneNum = styled.input`
    width: 50%;
    padding: 0.5rem;

    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
`;

const ExpertIntro = styled.textarea`
    width: 50%;
    height: 6rem;

    padding: 0.5rem;

    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
`;

const ExpertMyinfoBox = styled.div``;

const FixDoneButton = styled.button`
    width: 8rem;
    height: 3rem;

    border-radius: 0.7rem;
    font-size: 1.5rem;

    margin-top: 2rem;
    margin-left: 25.5rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;
