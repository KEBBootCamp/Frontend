import React from "react";
import styled from "styled-components";
import MypageHeader from "../components/common/MypageHeader";

function ExpertMyMatchingHistory() {
    return (
        <ExpertMyMatchingHistoryWrapper>
            <MypageHeader title="매칭 내역" />
            <MatchingHistoryList>
                <UserCarDetailWrapper>
                    <UserDetail>
                        <UserCarManufacturer>차종 : 기아</UserCarManufacturer>
                        <UserCarModel>스포티지</UserCarModel>
                    </UserDetail>
                    <UserCarLocation>검수 장소 : 서울</UserCarLocation>
                    <UserCarDate>검수 일정 : 2024-08-05</UserCarDate>

                    <MatchingBtn>
                        <AcceptBtn>수락</AcceptBtn>
                        <RejectBtn>거절</RejectBtn>
                    </MatchingBtn>
                </UserCarDetailWrapper>
            </MatchingHistoryList>
        </ExpertMyMatchingHistoryWrapper>
    );
}

export default ExpertMyMatchingHistory;

const ExpertMyMatchingHistoryWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    background-color: rgb(245, 245, 247);
`;

const MatchingHistoryList = styled.div`
    font-size: 1.5rem;
    background-color: rgb(245, 245, 247);

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
    cursor: pointer;
`;

const UserCarDetailWrapper = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    gap: 2rem;
    padding: 1.5rem;

    background-color: white;
`;

const UserDetail = styled.div`
    display: flex;
    column-gap: 1rem;
`;
const UserCarManufacturer = styled.div``;
const UserCarModel = styled.div``;
const UserCarLocation = styled.div``;
const UserCarDate = styled.div``;

const MatchingBtn = styled.div`
    width: 20rem;

    display: flex;
    justify-content: center;

    margin-top: 2rem;
    font-size: 1.8rem;
    border-radius: 1rem;

    cursor: pointer;
`;

const AcceptBtn = styled.button`
    width: 20rem;
    height: 6rem;

    background-color: #4784ff;
    color: white;
`;
const RejectBtn = styled.button`
    width: 20rem;
    height: 6rem;

    background-color: red;
    color: white;
`;
