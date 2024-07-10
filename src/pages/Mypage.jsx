import React from "react";
import styled from "styled-components";
import { IcUser } from "../assets/svg/icon";
import MypageHeader from "../components/Common/MypageHeader";

function Mypage() {
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
                    <MypageFixDiv>
                        내 정보 수정
                        <FixFinishButton>완료</FixFinishButton>
                    </MypageFixDiv>
                    <SelectButtonDiv>
                        <SelectButton>전문가</SelectButton>
                        <SelectButton>사용자</SelectButton>
                    </SelectButtonDiv>
                    <FixExpertDiv>
                        <FixExpertBox>
                            경력
                            <FixExpertRightBox>3년</FixExpertRightBox>
                        </FixExpertBox>
                        <FixExpertBox>
                            한줄소개
                            <FixExpertRightBox>실망시키지 않겠습니다!</FixExpertRightBox>
                        </FixExpertBox>
                        <FixExpertBox>
                            분야
                            <FixExpertRightBox>현대</FixExpertRightBox>
                        </FixExpertBox>
                    </FixExpertDiv>
                </MyInfoFixBox>
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
    font-size: 1.9rem;
`;

const MypageRightBoxJob = styled.div`
    width: 20rem;

    display: flex;
    column-gap: 5rem;
    align-items: center;
`;

const LogoutButton = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 0.7rem;
    font-size: 1.5rem;

    background-color: rgb(4, 41, 63);
    color: white;
`;

const MyInfoFixBox = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    padding: 2rem 1.6rem 1rem;
`;

const MypageFixDiv = styled.div`
    display: flex;

    align-items: center;
    column-gap: 14rem;
    color: rgb(188, 188, 188);

    font-weight: 600;
    font-size: 1.5rem;
`;

const SelectButtonDiv = styled.div`
    width: 100%;
    height: 3.2rem;

    margin-left: 5rem;
    margin-top: 2rem;
    display: flex;
    gap: 5rem;
`;
const SelectButton = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 0.7rem;
    font-size: 1.5rem;

    background-color: rgb(4, 41, 63);
    color: white;
`;
const FixFinishButton = styled.button`
    width: 6rem;
    height: 3rem;
    border-radius: 0.7rem;
    font-size: 1.5rem;

    background-color: rgb(4, 41, 63);
    color: white;
`;

const FixExpertDiv = styled.div`
    width: 100%;

    margin-top: 3rem;

    font-size: 1.6rem;
    background-color: white;
`;

const FixExpertBox = styled.div`
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    column-gap: 7rem;
`;

const FixExpertRightBox = styled.div``;
