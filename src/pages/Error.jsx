import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { IcError } from "../assets/svg/icon";

function Error() {
    const navigate = useNavigate();

    const handleClickHomeButton = () => {
        navigate("/");
    };

    return (
        <ErrorWrapper>
            <ErrorBoxWrapper>
                <StyledIcError />
                <ErrorText>올바르지 않은 접근 경로입니다.</ErrorText>
                <HomeButton onClick={handleClickHomeButton}>홈 화면으로</HomeButton>
            </ErrorBoxWrapper>
        </ErrorWrapper>
    );
}

export default Error;

const ErrorWrapper = styled.div`
    width: 100%;
`;

const ErrorBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.5rem;
    margin-top: 22rem;
`;

const StyledIcError = styled(IcError)`
    width: 13rem;
    height: 13rem;
`;

const ErrorText = styled.p`
    font-size: 1.8rem;
`;

const HomeButton = styled.button`
    width: 13rem;
    height: 3rem;

    font-size: 1.5rem;
    background-color: rgb(231, 231, 231);
    border-radius: 0.5rem;
`;
