import React from "react";
import styled from "styled-components";
import { IcChecked } from "../../assets/svg/icon";

function SignUpDone() {
    return (
        <SignUpDoneWrapper>
            <SignUpDoneContainer>
                <StyledIcChecked />
            </SignUpDoneContainer>
            <SignUpDoneTextWrapper>
                <SignUpDoneText>회원가입 성공!</SignUpDoneText>
            </SignUpDoneTextWrapper>
            <SelectDoneBtnWrapper>
                <SelectDoneBtn>완료</SelectDoneBtn>
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
    font-weight: 600;
    font-size: 2.5rem;
`;

const SelectDoneBtnWrapper = styled.div`
    width: 100%;

    margin-top: 4rem;
`;
const SelectDoneBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 600;
    font-size: 1.8rem;

    margin-top: 10rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;
