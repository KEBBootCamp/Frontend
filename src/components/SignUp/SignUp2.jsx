import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../libs/api";

function SignUp2() {
    const navigate = useNavigate();
    const location = useLocation();
    const tempUserData = location.state;

    console.log(tempUserData);

    const [isValid, setIsValid] = useState(false);
    const [idInput, setIdInput] = useState("");
    const [pwdInput, setPwdInput] = useState("");
    const [pwdCheck, setPwdCheck] = useState("");

    const handleClickNextBtn = () => {
        if (isValid) {
            if (tempUserData.userType === "user") {
                api.post("/users/join", {
                    userId: idInput,
                    userPwd: pwdInput,
                    userName: tempUserData.name,
                    userPhonenumber: tempUserData.phoneNum,
                    isExpert: false,
                })
                    .then((res) => {
                        navigate("/sign-up-done", { state: { ...tempUserData, idInput: idInput, pwdInput: pwdInput } });
                    })
                    .catch((err) => {
                        navigate("/error");
                    });
            } else {
                navigate("/sign-up-expert", { state: { ...tempUserData, idInput: idInput, pwdInput: pwdInput } });
            }
        }
    };

    const userIdInput = (e) => {
        setIdInput(e.target.value);
    };

    const userPwdInput = (e) => {
        setPwdInput(e.target.value);
    };

    const userPwdCheck = (e) => {
        setPwdCheck(e.target.value);
    };

    useEffect(() => {
        if (pwdInput === pwdCheck && pwdInput.length > 4) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [pwdInput, pwdCheck]);

    return (
        <SignUp2Wrapper>
            <BackHeader />
            <SignUp2Container>
                <SignUp2Question>
                    <SignUp2Text>아이디와 비밀번호 생성하기</SignUp2Text>
                </SignUp2Question>
                <InputBox>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="아이디" value={idInput} onChange={userIdInput} />
                    </TextBoxWrapper>
                    <TextBoxWrapper>
                        <TextBox type="password" placeholder="비밀번호" value={pwdInput} onChange={userPwdInput} />
                    </TextBoxWrapper>
                    <TextBoxWrapper>
                        <TextBox type="password" placeholder="비밀번호 확인" value={pwdCheck} onChange={userPwdCheck} />
                    </TextBoxWrapper>
                </InputBox>
                <SelectNextBtnWrapper>
                    <SelectNextBtn onClick={handleClickNextBtn} $isValid={isValid}>
                        완료
                    </SelectNextBtn>
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
    background-color: ${({ $isValid }) => ($isValid ? "#4784ff" : "#cde9f4")};
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
