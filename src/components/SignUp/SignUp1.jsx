import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";
import { useLocation, useNavigate } from "react-router-dom";

function SignUp1() {
    const navigate = useNavigate();
    const location = useLocation();
    const userType = location.state.userType;

    const [isRight, setIsRight] = useState(false);
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const userName = (e) => {
        setName(e.target.value);
    };

    const formatPhoneNum = (value) => {
        if (!value) {
            return value;
        }
        // 전화번호 입력(number_ex. 01011112222) 시 010-1111-2222 로 포맷팅하는 로직
        const phoneNum = value.replace(/[^\d]/g, "");
        const phoneNumLength = phoneNum.length;
        if (phoneNumLength < 4) return phoneNum;
        if (phoneNumLength < 8) {
            return `${phoneNum.slice(0, 3)}-${phoneNum.slice(3)}`;
        }
        return `${phoneNum.slice(0, 3)}-${phoneNum.slice(3, 7)}-${phoneNum.slice(7, 11)}`;
    };

    const userPhoneNum = (e) => {
        const formattedPhoneNum = formatPhoneNum(e.target.value);
        setPhoneNum(formattedPhoneNum);
    };

    useEffect(() => {
        if (name.length >= 2 && phoneNum.replace(/[^0-9]/g, "").length === 11) {
            setIsRight(true);
        } else {
            setIsRight(false);
        }
    }, [name, phoneNum]);

    const handleClickNextBtn = () => {
        if (isRight) {
            navigate("/sign-up-2", { state: { userType: userType, name: name, phoneNum: phoneNum } });
        }
    };

    return (
        <SignUp1Wrapper>
            <BackHeader />
            <SignUp1Container>
                <SignUp1Question>
                    <SignUp1Text>이름과 연락처를 입력해주세요.</SignUp1Text>
                </SignUp1Question>
                <InputBox>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="이름" value={name} onChange={userName} />
                    </TextBoxWrapper>
                    <TextBoxWrapper>
                        <TextBox type="text" placeholder="연락처" value={phoneNum} onChange={userPhoneNum} />
                    </TextBoxWrapper>
                </InputBox>
                <SelectNextBtnWrapper>
                    <SelectNextBtn onClick={handleClickNextBtn} $isRight={isRight}>
                        다음
                    </SelectNextBtn>
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
`;

const SignUp1Text = styled.div``;

const SelectNextBtnWrapper = styled.div`
    width: 100%;

    margin-top: 4rem;
`;
const SelectNextBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 300;
    font-size: 1.8rem;

    margin-top: 10rem;

    border-radius: 1rem;
    background-color: ${({ $isRight }) => ($isRight ? "#4784ff" : "#cde9f4")};
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
