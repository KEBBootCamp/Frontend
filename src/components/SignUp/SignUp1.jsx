import React from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";
import { useNavigate } from "react-router-dom";

function SignUp1() {
    const navigate = useNavigate();

    // const handleClickNextBtn = () => {
    //     navigate("/sign-up-2");
    // };

    // const handleClickBackBtn = () => {
    //     navigate("/sign-up-usage");
    // };

    return (
        <SignUp1Wrapper>
            <BackHeader />
            <SignUp1Container>
                <SignUp1Question>
                    <SignUp1Text>이름과 연락처를 입력해주세요.</SignUp1Text>
                </SignUp1Question>
                <InputBox>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="이름" />
                    </TextBoxWrapper>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="연락처" />
                    </TextBoxWrapper>
                </InputBox>
                <SelectNextBtnWrapper>
                    <SelectNextBtn>다음</SelectNextBtn>
                </SelectNextBtnWrapper>
            </SignUp1Container>
        </SignUp1Wrapper>
    );
}

export default SignUp1;

const SignUp1Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const SignUp1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;
`;

const SignUp1Question = styled.div`
    margin-top: 3rem;

    font-size: 2rem;
    font-weight: 600;
`;

const SignUp1Text = styled.div``;

const SelectNextBtnWrapper = styled.div`
    width: 100%;

    margin-top: 4rem;
`;
const SelectNextBtn = styled.button`
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

const InputBox = styled.div`
    width: 70%;

    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const TextBoxWrapper = styled.div`
    height: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0.05rem solid #9e9e9e;
    border-radius: 0.5rem;
`;

const TextBox = styled.input`
    width: 90%;
    height: 4.3rem;

    border: none;
`;
