import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";
import { useNavigate } from "react-router-dom";

function SignUpUsage() {
    const navigate = useNavigate();
    const [isUserClicked, setIsUserClicked] = useState(false);
    const [isExpertClicked, setIsExpertClicked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClickDoneBtn = () => {
        if (isClicked) {
            navigate("/sign-up-1", { state: { userType: isUserClicked ? "user" : "expert" } });
        }
    };

    const handleClickUserBtn = () => {
        setIsUserClicked(true);
        setIsExpertClicked(false);
        setIsClicked(true);
    };

    const handleClickExpertBtn = () => {
        setIsUserClicked(false);
        setIsExpertClicked(true);
        setIsClicked(true);
    };

    return (
        <SignUpUsageWrapper>
            <BackHeader />

            <SignUpUsageContainer>
                <SignUpTextWrapper>
                    <SignUpText>이 앱을 어떤 용도로 사용하시나요?</SignUpText>
                </SignUpTextWrapper>
                <UsageBtnWrapper>
                    <UsageBtn isClicked={isUserClicked} onClick={handleClickUserBtn}>
                        사용자
                    </UsageBtn>
                    <UsageBtn isClicked={isExpertClicked} onClick={handleClickExpertBtn}>
                        전문가
                    </UsageBtn>
                </UsageBtnWrapper>
                <SelectDoneBtnWrapper>
                    <SelectDoneBtn onClick={handleClickDoneBtn} isClicked={isClicked}>
                        완료
                    </SelectDoneBtn>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;
`;

const SignUpTextWrapper = styled.div`
    margin-top: 3rem;

    font-size: 2rem;
`;

const SignUpText = styled.div``;

const UsageBtnWrapper = styled.div`
    width: 75%;

    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    gap: 2rem;
`;

const UsageBtn = styled.button`
    height: 5rem;

    border-radius: 0.7rem;
    font-size: 1.6rem;
    font-weight: 500;

    background-color: ${({ isClicked }) => (isClicked ? "rgb(201, 201, 201)" : "rgb(231, 231, 231)")};

    color: rgb(4, 41, 63);
`;

const SelectDoneBtnWrapper = styled.div`
    width: 100%;

    margin-top: 4rem;
`;
const SelectDoneBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-size: 1.8rem;

    margin-top: 10rem;

    border-radius: 1rem;
    background-color: ${({ isClicked }) => (isClicked ? "#4784ff" : "#cde9f4")};
    color: white;

    cursor: pointer;
`;
