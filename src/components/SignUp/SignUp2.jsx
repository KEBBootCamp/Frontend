import React from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";
import { useNavigate } from "react-router-dom";

function SignUp2() {
    const navigate = useNavigate();

    const handleClickNextBtn = () => {
        navigate("/sign-up-done");
    };

    const handleClickBackBtn = () => {
        navigate("/sign-up-1");
    };

    return (
        <SignUp2Wrapper>
            <BackHeader onClick={handleClickBackBtn} />
            <SignUp2Container>
                <SignUp2Question>
                    <SignUp2Text>아이디와 비밀번호 생성하기</SignUp2Text>
                </SignUp2Question>
                <InputBox>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="아이디" />
                    </TextBoxWrapper>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="비밀번호" />
                    </TextBoxWrapper>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="비밀번호 확인" />
                    </TextBoxWrapper>
                </InputBox>
                <SelectNextBtnWrapper>
                    <SelectNextBtn onClick={handleClickNextBtn}>완료</SelectNextBtn>
                </SelectNextBtnWrapper>
            </SignUp2Container>
        </SignUp2Wrapper>
    );
}

export default SignUp2;

const SignUp2Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const SignUp2Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;
`;

const SignUp2Question = styled.div`
    margin-top: 3rem;

    font-size: 2rem;
`;

const SignUp2Text = styled.div``;

const SelectNextBtnWrapper = styled.div`
    width: 100%;

    margin-top: 3rem;
`;
const SelectNextBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 500;
    font-size: 1.8rem;

    margin-top: 5rem;

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
