import React, { useState } from "react";
import styled from "styled-components";
import MypageHeader from "../components/common/MypageHeader";

function ExpertMyMatchingHistory() {
    const [isAccepted, setIsAccepted] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleClickAcceptBtn = () => {
        if (window.confirm("수락하시겠습니까?")) {
            alert("수락되었습니다.");
            setIsAccepted(true);
        } else {
            alert("거절되었습니다.");
        }
    };
    const handleClickRejectBtn = () => {
        if (window.confirm("거절하시겠습니까?")) {
            alert("거절되었습니다.");
            setIsRejected(true);
        } else {
            alert("수락되었습니다.");
        }
    };
    const handleClickCompleteBtn = () => {
        if (window.confirm("검수 완료하시겠습니까?")) {
            alert("검수 완료되었습니다.");
            setIsCompleted(true);
        }
    };

    return (
        <ExpertMyMatchingHistoryWrapper>
            <MypageHeader title="매칭 내역" />
            <MatchingHistoryList>
                <UserCarDetailWrapper $isRejected={isRejected}>
                    <UserDetail>
                        <UserCarManufacturer>차종: 기아</UserCarManufacturer>
                        <UserCarModel>스포티지</UserCarModel>
                    </UserDetail>
                    <UserCarLocation>검수 장소: 서울</UserCarLocation>
                    <UserCarDate>검수 일정: 2024-08-05</UserCarDate>
                    <MatchingBtn>
                        {isAccepted ? (
                            <CompleteBtn onClick={handleClickCompleteBtn}>검수 완료</CompleteBtn>
                        ) : (
                            <>
                                <AcceptBtn onClick={handleClickAcceptBtn}>수락</AcceptBtn>
                                <RejectBtn onClick={handleClickRejectBtn}>거절</RejectBtn>
                            </>
                        )}
                    </MatchingBtn>
                </UserCarDetailWrapper>
            </MatchingHistoryList>
        </ExpertMyMatchingHistoryWrapper>
    );
}

export default ExpertMyMatchingHistory;

const ExpertMyMatchingHistoryWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(245, 245, 247);
`;

const MatchingHistoryList = styled.div`
    width: 100%;

    padding: 2rem;
`;

const UserCarDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserDetail = styled.div`
    display: flex;
    gap: 0.5rem;

    font-size: 1.5rem;
    font-weight: bold;
`;

const UserCarManufacturer = styled.div``;
const UserCarModel = styled.div``;
const UserCarLocation = styled.div`
    font-size: 1.5rem;
    color: #555;
`;
const UserCarDate = styled.div`
    font-size: 1.5rem;
    color: #555;
`;

const MatchingBtn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    margin-top: 1rem;
`;

const AcceptBtn = styled.button`
    flex: 1;

    padding: 0.75rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    background-color: #4784ff;
    color: white;
    cursor: pointer;
`;

const RejectBtn = styled.button`
    flex: 1;

    padding: 0.75rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    background-color: red;
    color: white;
    cursor: pointer;
`;

const CompleteBtn = styled.button`
    flex: 1;

    padding: 0.75rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    background-color: green;
    color: white;
    cursor: pointer;
`;
