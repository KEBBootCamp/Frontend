import React from "react";
import { styled } from "styled-components";
import MypageHeader from "../components/common/MypageHeader";

function ExpertMyInfoFix() {
    return (
        <ExpertMyInfoFixWrapper>
            <MypageHeader title="내 정보 수정" />
            <ToggleBoxContainer>
                <ToggleExpertBox>
                    <ExpertWrapper>
                        <ExpertText>경력</ExpertText>
                        <ExpertCareer type="text" placeholder="00년" />
                    </ExpertWrapper>
                    <ExpertWrapper>
                        <ExpertText>연락처</ExpertText>
                        <ExpertPhoneNum type="text" placeholder="010-0000-0000" />
                    </ExpertWrapper>
                    <ExpertWrapper>
                        <ExpertText>한 줄 소개</ExpertText>
                        <ExpertIntro type="text" placeholder="현대차 검수에 특화된 전문가입니다. 연락 주세요!" />
                    </ExpertWrapper>
                </ToggleExpertBox>
            </ToggleBoxContainer>
            <ExpertMyinfoBox>
                <FixDoneButton>저장하기</FixDoneButton>
            </ExpertMyinfoBox>
        </ExpertMyInfoFixWrapper>
    );
}

export default ExpertMyInfoFix;

const ExpertMyInfoFixWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    background-color: rgb(245, 245, 247);
`;

const ExpertMyinfoBox = styled.div`
    display: flex;

    padding: 1.3rem;

    font-size: 2rem;
`;

const ToggleBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;

    background-color: rgb(245, 245, 247);
`;

const ToggleExpertBox = styled.div`
    width: 30rem;
    height: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    border-radius: 1rem;

    padding: 0 2rem;
    margin-top: 4rem;

    font-size: 2rem;
    background-color: white;
`;

const ExpertWrapper = styled.div`
    height: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ExpertText = styled.div``;

const ExpertCareer = styled.input`
    width: 11rem;
    height: 2rem;
`;

const ExpertPhoneNum = styled.input`
    width: 11rem;
    height: 2rem;
`;

const ExpertIntro = styled.textarea`
    height: 5rem;
`;

const FixDoneButton = styled.button`
    width: 8rem;
    height: 3rem;

    border-radius: 0.7rem;
    font-size: 1.5rem;

    margin-left: 25rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;
