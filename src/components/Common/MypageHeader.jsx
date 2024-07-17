import React from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";

function MypageHeader() {
    return (
        <MypageHeaderWrapper>
            <BackHeader />
            <MypageHeaderBox>마이페이지</MypageHeaderBox>
        </MypageHeaderWrapper>
    );
}

export default MypageHeader;

const MypageHeaderWrapper = styled.div`
    width: 100%;

    display: flex;

    border-bottom: 0.1rem solid rgb(25, 25, 25);
`;

const MypageHeaderBox = styled.div`
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    margin-right: 6rem;

    font-size: 2rem;
`;
