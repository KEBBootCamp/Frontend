import React, { useState } from "react";
import styled from "styled-components";
import { IcPhoneCall, IcUser } from "../assets/svg/icon";
import MypageHeader from "../components/common/MypageHeader";
import { useNavigate } from "react-router-dom";

function UserMypage() {
    const navigate = useNavigate();
    const [isAccepted, setIsAccepted] = useState(true);

    const handleClickPhoneCall = () => {
        navigate("/expert-detail");
    };

    return (
        <MypageWrapper>
            <MypageHeader title="마이페이지" />
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
                <MatchingHistoryList>
                    <MatchingCarDetailWrapper>
                        <MatchingExpertInfo>
                            <MatchingExpertBox>
                                <MatchingExpert>동행 전문가 : 홍길동</MatchingExpert>
                                <StyledIcPhoneCall onClick={handleClickPhoneCall} />
                            </MatchingExpertBox>
                            <AcceptORRejectDiv $isAccepted={isAccepted}>
                                {isAccepted ? "수락됨" : "거절됨"}
                            </AcceptORRejectDiv>
                        </MatchingExpertInfo>
                        <CarDetail>
                            <MatchingCarManufacturer>차종: 기아</MatchingCarManufacturer>
                            <MatchingCarModel>스포티지</MatchingCarModel>
                        </CarDetail>
                        <MatchingCarLocation>검수 장소: 서울</MatchingCarLocation>
                        <MatchingCarDate>검수 일정: 2024-08-05</MatchingCarDate>
                    </MatchingCarDetailWrapper>
                </MatchingHistoryList>
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

    margin-left: 2rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;

const MyInfoFixBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    margin-top: 1.2rem;
`;

const MyInfoFix = styled.div`
    color: rgb(188, 188, 188);

    font-size: 1.8rem;
    margin-left: 1rem;
`;

const MatchingHistoryList = styled.div`
    width: 100%;

    padding: 2rem;
`;

const MatchingCarDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ $isRejected }) => ($isRejected ? "transparent" : "white")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CarDetail = styled.div`
    display: flex;
    gap: 0.5rem;

    font-size: 1.8rem;
    font-weight: bold;
`;

const MatchingCarManufacturer = styled.div``;
const MatchingCarModel = styled.div``;
const MatchingCarLocation = styled.div`
    font-size: 1.8rem;
    color: #555;
`;
const MatchingCarDate = styled.div`
    font-size: 1.8rem;
    color: #555;
`;

const MatchingExpertInfo = styled.div`
    display: flex;
    align-items: center;

    column-gap: 7rem;
`;

const MatchingExpertBox = styled.div`
    width: 25rem;

    display: flex;
    align-items: center;
`;

const AcceptORRejectDiv = styled.div`
    width: 8rem;

    text-align: center;
    padding: 0.75rem;
    font-size: 1.5rem;

    border-radius: 0.5rem;
    background-color: ${({ $isAccepted }) => ($isAccepted ? "#4784ff" : "darkred")};
    color: white;
    cursor: pointer;
`;
const MatchingExpert = styled.div`
    font-size: 1.8rem;
`;

const StyledIcPhoneCall = styled(IcPhoneCall)`
    width: 2rem;
    height: 2rem;

    margin-left: 1rem;
`;
