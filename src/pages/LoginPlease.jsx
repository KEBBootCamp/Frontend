import React from "react";
import { styled } from "styled-components";
import { IcLoginWarning } from "../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function LoginPlease() {
    const navigate = useNavigate();

    const handleClickLoginButton = () => {
        navigate("/login");
    };
    return (
        <LoginPleaseWrapper>
            <LoginPleaseBoxWrapper>
                <StyledIcLoginWarning />
                <LoginPleaseText>로그인 후 이용해주세요.</LoginPleaseText>
                <LoginButton onClick={handleClickLoginButton}>로그인하기</LoginButton>
            </LoginPleaseBoxWrapper>
        </LoginPleaseWrapper>
    );
}

export default LoginPlease;

const LoginPleaseWrapper = styled.div`
    width: 100%;
`;

const LoginPleaseBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    margin-top: 22rem;
`;

const StyledIcLoginWarning = styled(IcLoginWarning)`
    width: 12rem;
    height: 12rem;
`;

const LoginPleaseText = styled.p`
    font-size: 2rem;
`;

const LoginButton = styled.button`
    width: 13rem;
    height: 3rem;

    font-size: 1.5rem;
    background-color: rgb(231, 231, 231);
    border-radius: 0.5rem;
`;
