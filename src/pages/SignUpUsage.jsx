import React from "react";
import styled from "styled-components";
import Header from "../components/Common/Header";

function SignUpUsage() {
    return (
        <SignUpUsageWrapper>
            <Header />
            <SignUpUsageContainer>
                <SignUpTextWrapper>
                    <SignUpText>이 앱을 어떤 용도로 사용하시겠습니까?</SignUpText>
                </SignUpTextWrapper>
                <UsageBtnWrapper>
                    <UsageBtn>사용자</UsageBtn>
                    <UsageBtn>전문가</UsageBtn>
                </UsageBtnWrapper>
                <SelectDoneBtnWrapper>
                    <SelectDoneBtn>완료</SelectDoneBtn>
                </SelectDoneBtnWrapper>
            </SignUpUsageContainer>
        </SignUpUsageWrapper>
    );
}

export default SignUpUsage;

const SignUpUsageWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const SignUpUsageContainer = styled.div`
    height: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;

    background-color: rgb(245, 245, 247);
`;

const SignUpTextWrapper = styled.div`
    width: 85%;
    margin-top: 3rem;

    font-size: 3rem;
`;

const SignUpText = styled.div``;

const UsageBtnWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
    gap: 2rem;
`;

const UsageBtn = styled.button`
    width: 100%;
    height: 4.5rem;

    border-radius: 0.7rem;
    font-size: 1.5rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;

const SelectDoneBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
`;
const SelectDoneBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 600;
    font-size: 1.8rem;

    margin-top: 4rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;
