import React from "react";
import styled from "styled-components";
import { IcChecked } from "../../assets/svg/icon";
import { useLocation, useNavigate } from "react-router-dom";

function SignUpDone() {
    const navigate = useNavigate();
    const location = useLocation();
    const { userType } = location.state || {};

    // 사용자 버튼을 누르고 회원가입 -> UserMypage
    // 전문가 버튼을 누르고 회원가입-> SignUpExpert=> ExpertMypage
    const handleClickDoneBtn = () => {
        if (userType === "user") {
            navigate("/user-my-page");
        } else {
            navigate("/expert-my-page");
        }
    };
    return (
        <SignUpDoneWrapper>
            <SignUpDoneContainer>
                <StyledIcChecked />
            </SignUpDoneContainer>
            <SignUpDoneTextWrapper>
                <SignUpDoneText>회원가입 성공!</SignUpDoneText>
            </SignUpDoneTextWrapper>
            <SelectDoneBtnWrapper>
                <SelectDoneBtn onClick={handleClickDoneBtn}>완료</SelectDoneBtn>
            </SelectDoneBtnWrapper>
        </SignUpDoneWrapper>
    );
}

export default SignUpDone;

const SignUpDoneWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const SignUpDoneContainer = styled.div`
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 15rem;
`;

const StyledIcChecked = styled(IcChecked)`
    width: 15rem;
    height: 15rem;
`;

const SignUpDoneTextWrapper = styled.div`
    width: 100%;
    height: 0rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
`;

const SignUpDoneText = styled.div`
    font-size: 2.5rem;
`;

const SelectDoneBtnWrapper = styled.div`
    width: 100%;

    margin-top: 4rem;
`;
const SelectDoneBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 500;
    font-size: 1.8rem;

    margin-top: 10rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;
