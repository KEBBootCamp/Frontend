import React from "react";
import styled from "styled-components";
import gifLoading from "../assets/gif/rocket.gif";

function Loading() {
    return (
        <LoadingWrapper>
            <LoadingBox>
                <LoadingGIF src={gifLoading} alt="로딩중" />
            </LoadingBox>
        </LoadingWrapper>
    );
}

export default Loading;

const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const LoadingBox = styled.div`
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20rem;
`;

const LoadingGIF = styled.img`
    width: 40%;
`;
