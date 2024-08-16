import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "../components/common/Dropdown";
import MypageHeader from "../components/common/MypageHeader";
import { useNavigate } from "react-router-dom";
import { api } from "../libs/api";

const manufacturers = ["현대", "기아", "르노삼성"];
// 1 ~ 30 (년)까지의 경력 선택 가능
const years = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

function ExpertMyInfoFix() {
    const navigate = useNavigate();
    const [mainManufacturer, setMainManufacturer] = useState("");
    const [experience, setExperience] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [expertIntro, setExpertIntro] = useState("");

    useEffect(() => {
        api.get("/mypage/edit")
            .then((res) => {
                const userData = res.data.user || {}; // userData가 없으면 빈 객체를 사용
                const expertData = userData.expert || {};

                console.log("API Response Data:", res.data);

                setMainManufacturer(expertData.engineerBrand || "");
                setExperience(expertData.engineerCareer?.parseInt() || "");
                setPhoneNum(userData.userPhonenumber || "");
                setExpertIntro(expertData.engineerProfile || "");
            })
            .catch((err) => {
                console.error("정보 불러오기 실패:", err);
                navigate("/error");
            });
    }, [navigate]);

    const handleMainManufacturer = (e) => {
        setMainManufacturer(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const handleIntroChange = (e) => {
        setExpertIntro(e.target.value);
    };

    const handleClickSaveBtn = () => {
        const fixInfo = {
            engineerCareer: parseInt(experience),
            engineerBrand: mainManufacturer,
            engineerProfile: expertIntro,
            userPhonenumber: phoneNum,
        };
        api.put("/mypage/update", fixInfo)
            .then(
                (res) => {
                    navigate("/expert-my-page");
                },
                { withCredentials: true }
            )
            .catch((err) => {
                console.error("업데이트 실패:", err);
                navigate("error");
            });
    };

    // 전화번호 입력(number_ex. 01011112222) 시 010-1111-2222 로 포맷팅하는 로직
    const formatPhoneNum = (value) => {
        if (!value) {
            return value;
        }
        const phoneNum = value.replace(/[^\d]/g, "");
        const phoneNumLength = phoneNum.length;
        if (phoneNumLength < 4) return phoneNum;
        if (phoneNumLength < 8) {
            return `${phoneNum.slice(0, 3)}-${phoneNum.slice(3)}`;
        }
        return `${phoneNum.slice(0, 3)}-${phoneNum.slice(3, 7)}-${phoneNum.slice(7, 11)}`;
    };

    const handlePhoneNumChange = (e) => {
        const formattedPhoneNum = formatPhoneNum(e.target.value);
        setPhoneNum(formattedPhoneNum);
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
                        <ExpertPhoneNum
                            type="text"
                            placeholder="010-0000-0000"
                            value={phoneNum}
                            onChange={handlePhoneNumChange}
                        />
                    </ExpertWrapper>
                    <ExpertWrapper>
                        <ExpertText>한 줄 소개</ExpertText>
                        <ExpertIntro
                            placeholder="현대차 검수에 특화된 전문가입니다. 연락 주세요!"
                            value={expertIntro}
                            onChange={handleIntroChange}
                        />
                    </ExpertWrapper>
                </ToggleExpertBox>
                <ExpertMyinfoBox>
                    <FixDoneButton onClick={handleClickSaveBtn}>저장하기</FixDoneButton>
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
