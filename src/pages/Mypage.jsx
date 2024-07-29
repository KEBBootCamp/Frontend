import React, { useState } from "react";
import styled from "styled-components";
import { IcUser } from "../assets/svg/icon";
import MypageHeader from "../components/common/MypageHeader";
import Toggle from "../components/common/Toggle";

function Mypage() {
    const [IsExpert, setIsExpert] = useState(false);
    const [IsUser, setIsUser] = useState(true);

    return (
        <MypageWrapper>
            <MypageHeader />
            <MypageBodyWrapper>
                <MypageBoxWrapper>
                    <MypageLeftBox>
                        <StyledIcUser />
                    </MypageLeftBox>
                    <MypageRightBox>
                        <MypageRightBoxName>홍길동</MypageRightBoxName>
                        <MypageRightBoxJob>
                            전문가
                            <LogoutButton>로그아웃</LogoutButton>
                        </MypageRightBoxJob>
                    </MypageRightBox>
                </MypageBoxWrapper>
                <MyInfoFixBox>
                    <MyInfoFix>내 정보 수정</MyInfoFix>
                </MyInfoFixBox>
                <ToggleBtnWrapper>
                    <Toggle />
                    <FixDoneButton>저장하기</FixDoneButton>
                </ToggleBtnWrapper>

                <ToggleBoxContainer>
                    {/* <ToggleUserBox>사용자</ToggleUserBox> */}
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
            </MypageBodyWrapper>
        </MypageWrapper>
    );
}

export default Mypage;

const MypageWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
`;

const MypageBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(245, 245, 247);
`;

const MypageBoxWrapper = styled.div`
    display: flex;
    align-items: center;

    border-bottom: 0.6rem solid rgb(231, 231, 231);
    font-size: 1.5rem;
`;

const MypageLeftBox = styled.div`
    width: 10rem;
    height: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* background-color: #bcbcbc; */
`;

const StyledIcUser = styled(IcUser)`
    width: 6rem;
    height: 6rem;
`;
const MypageRightBox = styled.div`
    width: calc(100% - 10rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: rgb(245, 245, 247);
`;

const MypageRightBoxName = styled.div`
    width: 20rem;
    margin-left: 0.8rem;
    font-size: 1.9rem;
`;

const MypageRightBoxJob = styled.div`
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5rem;
`;

const LogoutButton = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 0.7rem;

    font-size: 1.5rem;

    margin-left: 2rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;

const MyInfoFixBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.3rem;

    border-bottom: 0.6rem solid rgb(231, 231, 231);
`;

const MyInfoFix = styled.div`
    color: rgb(188, 188, 188);

    font-size: 1.5rem;

    margin-left: 1rem;
`;

const ToggleBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5rem;
`;

const FixDoneButton = styled.button`
    width: 8rem;
    height: 3rem;

    border-radius: 0.7rem;
    font-size: 1.5rem;

    margin-left: 3.3rem;
    background-color: rgb(4, 41, 63);
    color: white;
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
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    border-radius: 1rem;

    padding: 0 2.5rem;

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
`;

const ExpertPhoneNum = styled.input`
    width: 11rem;
`;

const ExpertIntro = styled.textarea`
    height: 5rem;
`;
