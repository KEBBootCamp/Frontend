import React, { useState } from "react";
import styled from "styled-components";
import { IcPhoneCall, IcUser } from "../assets/svg/icon";
import MypageHeader from "../components/common/MypageHeader";

function UserMypage() {
    return (
        <MypageWrapper>
            <MypageHeader />
            <MypageBodyWrapper>
                <MypageBoxWrapper>
                    <MypageLeftBox>
                        <StyledIcUser />
                    </MypageLeftBox>
                    <MypageRightBox>
                        <MypageRightBoxName>뽀로로</MypageRightBoxName>
                        <MypageRightBoxJob>
                            사용자
                            <LogoutButton>로그아웃</LogoutButton>
                        </MypageRightBoxJob>
                    </MypageRightBox>
                </MypageBoxWrapper>
                <MyInfoFixBox>
                    <MyInfoFix>나의 신청 내역</MyInfoFix>
                </MyInfoFixBox>
                <ApplyBoxContainer>
                    <ApplyUserBox>
                        <UserCarDetailWrapper>
                            <UserCarDetail>
                                <UserCarManufacturer>차종 : 기아</UserCarManufacturer>
                                <UserCarModel>스포티지</UserCarModel>
                            </UserCarDetail>
                            <UserCarLocation>검수 장소 : 서울</UserCarLocation>
                            <ExpertDetail>
                                <ExpertName>동행 전문가 : 홍길동</ExpertName>
                                <StyledIcPhoneCall />
                            </ExpertDetail>
                            <UserCarDate>검수 일정 : 2024-08-05</UserCarDate>
                        </UserCarDetailWrapper>
                    </ApplyUserBox>
                </ApplyBoxContainer>
            </MypageBodyWrapper>
        </MypageWrapper>
    );
}

export default UserMypage;

const MypageWrapper = styled.div`
    width: 100vw;
    height: 100dvh;

    background-color: rgb(245, 245, 247);
`;

const MypageBodyWrapper = styled.div``;

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
    margin-top: 1.2rem;
    /* border-bottom: 0.6rem solid rgb(231, 231, 231); */
`;

const MyInfoFix = styled.div`
    color: rgb(188, 188, 188);

    font-size: 1.8rem;
    margin-left: 1rem;
`;

const ApplyBoxContainer = styled.div`
    display: flex;
    justify-content: center;

    border-radius: 1rem;
`;

const ApplyUserBox = styled.div`
    width: 33rem;
    height: 25rem;

    padding: 1.3rem;
    margin-top: 1.5rem;

    font-size: 2rem;
    background-color: white;
`;

const UserCarDetail = styled.div`
    display: flex;
    column-gap: 1rem;
`;

const UserCarDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 2rem;
`;
const UserCarManufacturer = styled.div``;
const UserCarModel = styled.div``;
const UserCarLocation = styled.div``;
const UserCarDate = styled.div``;

const ExpertDetail = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

const ExpertName = styled.div``;

const StyledIcPhoneCall = styled(IcPhoneCall)`
    width: 2.6rem;
    height: 2.6rem;
`;
