import React from "react";
import { styled } from "styled-components";
import BackHeader from "../common/BackHeader";
import Dropdown from "../common/Dropdown";
import { useNavigate } from "react-router-dom";

function SignUpExpert() {
    const navigate = useNavigate();

    const handleClickNextBtn = () => {
        navigate("/sign-up-done", { state: { userType: "expert" } });
    };

    return (
        <SignUpExpertWrapper>
            <BackHeader />
            <SignUpExpertContainer>
                <SignUpExpertQuestion>
                    <SignUpExpertText>전문가 필수 입력란</SignUpExpertText>
                </SignUpExpertQuestion>
                <SelectExpertBoxWrapper>
                    <SelectExpertBox>
                        <LeftBox>경력</LeftBox>
                        <RightBox>
                            <ExpertYear type="text" placeholder="3"></ExpertYear>
                        </RightBox>
                    </SelectExpertBox>
                    <SelectExpertBox>
                        <LeftBox>주력 제조사</LeftBox>
                        <RightBox></RightBox>
                    </SelectExpertBox>
                    <SelectExpertBox>
                        <LeftBox>한줄소개</LeftBox>
                        <RightBox>
                            <ExpertIntro type="text" placeholder="현대차 검수에 특화된 전문가입니다. 연락 주세요!" />
                        </RightBox>
                    </SelectExpertBox>
                </SelectExpertBoxWrapper>
                <SelectNextBtnWrapper>
                    <SelectNextBtn onClick={handleClickNextBtn}>완료</SelectNextBtn>
                </SelectNextBtnWrapper>
            </SignUpExpertContainer>
        </SignUpExpertWrapper>
    );
}

export default SignUpExpert;

const SignUpExpertWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const SelectExpertBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const SignUpExpertQuestion = styled.div`
    font-size: 2rem;
`;

const SignUpExpertContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
`;
const SignUpExpertText = styled.div``;

const SelectExpertBox = styled.div`
    width: 100%;
    height: 10rem;

    display: flex;

    font-size: 2rem;
    background-color: rgb(245, 245, 247);
`;

const LeftBox = styled.div`
    width: 12rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #bcbcbc;
`;

const RightBox = styled.div`
    width: calc(100% - 10rem);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ExpertIntro = styled.textarea`
    height: 5rem;
`;

const ExpertYear = styled.textarea`
    width: 3rem;
    height: 2rem;
`;
const ExpertYearText = styled.textarea`
    height: 2rem;
`;
const SelectNextBtnWrapper = styled.div`
    width: 100%;

    margin-top: 3rem;
`;
const SelectNextBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 500;
    font-size: 1.8rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;
