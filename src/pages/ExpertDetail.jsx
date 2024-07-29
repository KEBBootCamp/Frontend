import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

function ExpertDetail() {
    return (
        <ExpertDetailWrapper>
            <Header />
        </ExpertDetailWrapper>
    );
}

export default ExpertDetail;

const ExpertDetailWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;
