import React from "react";
import styled from "styled-components";
import MypageHeader from "../components/common/MypageHeader";

function ExpertMyMatchingHistory() {
    return (
        <ExpertMyMatchingHistoryWrapper>
            <MypageHeader title="매칭 내역" />
        </ExpertMyMatchingHistoryWrapper>
    );
}

export default ExpertMyMatchingHistory;

const ExpertMyMatchingHistoryWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    background-color: rgb(245, 245, 247);
`;
