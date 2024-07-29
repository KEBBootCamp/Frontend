import React from "react";
import { styled } from "styled-components";
import MatchingModalPortal from "./MatchingModalPortal";

function MatchingModal() {
    return (
        <MatchingModalPortal>
            <BlurryContainer>
                <ModalWrapper>
                    <ModalWarning>정말 삭제하시겠습니까?</ModalWarning>
                    <ModalWarningBtn>
                        <YesModalBtn>매칭하기</YesModalBtn>
                        <NoModalBtn>취소하기</NoModalBtn>
                    </ModalWarningBtn>
                </ModalWrapper>
            </BlurryContainer>
        </MatchingModalPortal>
    );
}

export default MatchingModal;

const BlurryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 3;

    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2.5rem;

    width: 20rem;
    height: 15rem;

    background-color: white;
    border-radius: 1rem;

    padding: 2rem;
`;

const ModalWarning = styled.div`
    font-size: 2rem;
    font-weight: 500;
    font-family: Pretendard;
`;

const ModalWarningBtn = styled.div`
    display: flex;
    column-gap: 5rem;
`;

const YesModalBtn = styled.button`
    width: 7rem;
    height: 3rem;

    font-size: 1.75rem;
    font-weight: 500;
    font-family: Pretendard;

    border-radius: 0.7rem;

    background-color: #04293f;
    color: white;
`;

const NoModalBtn = styled.button`
    width: 7rem;
    height: 3rem;

    font-size: 1.75rem;
    font-weight: 500;
    font-family: Pretendard;

    background-color: #ff0000;
    color: white;

    border-radius: 0.7rem;

    transition: 0.3s ease;

    &:hover {
        background-color: #b81414;
    }
`;
