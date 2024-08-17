import React, { useState } from "react";
import styled from "styled-components";
import MypageHeader from "../components/common/MypageHeader";
import { useLocation } from "react-router-dom";
import { api } from "../libs/api";

function ExpertMyMatchingHistory() {
    const location = useLocation();
    const inspections = location.state?.inspections || [];

    const [acceptedInspections, setAcceptedInspections] = useState({});

    const handleClickAcceptBtn = async (inspection) => {
        if (window.confirm("수락하시겠습니까?")) {
            const { matchingId } = inspection;
            try {
                const res = await api.post("/matching/accept", { matchingId });
                if (res.data.status === "accept") {
                    setAcceptedInspections((prev) => ({
                        ...prev,
                        [matchingId]: true,
                    }));
                    console.log("수락된 검수 내역:", inspection);
                    alert(`Matching ID ${matchingId} 수락되었습니다.`);
                } else {
                    alert("검수 수락에 실패했습니다. 다시 시도해 주세요.");
                }
            } catch (err) {
                console.error("검수 수락 요청 오류:", err);
                alert("검수 수락에 실패했습니다. 다시 시도해 주세요.");
            }
        }
    };

    const handleClickRejectBtn = (inspection) => {
        if (window.confirm("거절하시겠습니까?")) {
            console.log("거절된 검수 내역:", inspection);
            alert(`Matching ID ${inspection.matchingId} 거절되었습니다.`);
        }
    };

    const handleClickCompleteBtn = (inspection) => {
        if (window.confirm("검수 완료하시겠습니까?")) {
            console.log("검수 완료된 검수 내역:", inspection);
            alert(`Matching ID ${inspection.matchingId} 검수 완료되었습니다.`);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    return (
        <ExpertMyMatchingHistoryWrapper>
            <MypageHeader title="매칭 내역" />
            <MatchingHistoryList>
                {inspections.map((inspection) => (
                    <UserCarDetailWrapper key={inspection.matchingId}>
                        <UserDetail>
                            <UserCarManufacturer>브랜드: {inspection.brand}</UserCarManufacturer>
                            <UserCarModel>모델: {inspection.model}</UserCarModel>
                        </UserDetail>
                        <UserCarLocation>검수 장소: {inspection.place}</UserCarLocation>
                        <UserCarDate>검수 일정: {formatDate(inspection.inspectDate)}</UserCarDate>
                        <MatchingBtn>
                            {acceptedInspections[inspection.matchingId] ? (
                                <CompleteBtn onClick={() => handleClickCompleteBtn(inspection)}>검수 완료</CompleteBtn>
                            ) : (
                                <>
                                    <AcceptBtn onClick={() => handleClickAcceptBtn(inspection)}>수락</AcceptBtn>
                                    <RejectBtn onClick={() => handleClickRejectBtn(inspection)}>거절</RejectBtn>
                                </>
                            )}
                        </MatchingBtn>
                    </UserCarDetailWrapper>
                ))}
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
    flex-direction: column;
    gap: 1rem;

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
