import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BackHeader from "../common/BackHeader";
import Dropdown from "../common/Dropdown";
import { useNavigate } from "react-router-dom";

const manufacturers = ["현대", "기아", "르노삼성"];
const years = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

function SignUpExpert() {
    const navigate = useNavigate();
    const [mainManufacturer, setMainManufacturer] = useState("");
    const [experience, setExperience] = useState("");
    const [expertIntro, setExpertIntro] = useState("");
    const [isSatisfied, setIsSatisfied] = useState(false);

    const handleMainManufacturer = (e) => {
        setMainManufacturer(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const handleExpertIntroChange = (e) => {
        setExpertIntro(e.target.value);
    };

    const handleClickNextBtn = () => {
        navigate("/sign-up-done", { state: { userType: "expert" } });
    };

    useEffect(() => {
        const validateBtn = () => {
            if (mainManufacturer && experience && expertIntro) {
                setIsSatisfied(true);
            } else {
                setIsSatisfied(false);
            }
        };
        validateBtn();
    }, [mainManufacturer, experience, expertIntro]);

    return (
        <SignUpExpertWrapper>
            <SignUpExpertQuestion>
                <BackHeader />
                <SignUpExpertText>전문가 필수 입력란</SignUpExpertText>
            </SignUpExpertQuestion>
            <SignUpExpertContainer>
                <SelectExpertBoxWrapper>
                    <SelectExpertBox>
                        <LeftBox>경력</LeftBox>
                        <RightBox>
                            <Dropdown
                                value={experience}
                                onChange={handleExperienceChange}
                                options={years}
                                width="8rem"
                            />
                            <YearText>년</YearText>
                        </RightBox>
                    </SelectExpertBox>
                    <SelectExpertBox>
                        <LeftBox>주력 제조사</LeftBox>
                        <RightBox>
                            <Dropdown
                                value={mainManufacturer}
                                onChange={handleMainManufacturer}
                                options={manufacturers}
                            />
                        </RightBox>
                    </SelectExpertBox>
                    <SelectExpertBox>
                        <LeftBox>한줄소개</LeftBox>
                        <RightBox>
                            <ExpertIntro
                                type="text"
                                placeholder="현대차 검수에 특화된 전문가입니다. 연락 주세요!"
                                value={expertIntro}
                                onChange={handleExpertIntroChange}
                            />
                        </RightBox>
                    </SelectExpertBox>
                </SelectExpertBoxWrapper>
                <SelectNextBtnWrapper>
                    <SelectNextBtn onClick={handleClickNextBtn} $isSatisfied={isSatisfied}>
                        완료
                    </SelectNextBtn>
                </SelectNextBtnWrapper>
            </SignUpExpertContainer>
        </SignUpExpertWrapper>
    );
}
export default SignUpExpert;

const SignUpExpertWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SelectExpertBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    border-radius: 1rem;
    background-color: #f9f9f9;
`;

const SignUpExpertQuestion = styled.div`
    display: flex;

    font-size: 2rem;
    font-weight: bold;

    color: #333;
`;

const SignUpExpertContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 2rem;

    margin-top: 3rem;
    border-radius: 1rem;
`;

const SignUpExpertText = styled.div`
    margin-top: 1.3rem;
`;

const SelectExpertBox = styled.div`
    display: flex;
    align-items: center;

    padding: 1rem 1.5rem;
`;

const LeftBox = styled.div`
    width: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.7rem;
`;

const RightBox = styled.div`
    width: calc(100% - 10rem);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ExpertIntro = styled.textarea`
    height: 7rem;

    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
`;

const YearText = styled.span`
    margin-left: 0.5rem;
    font-size: 1.5rem;
`;

const SelectNextBtnWrapper = styled.div`
    width: 100%;

    margin-top: 4rem;
`;

const SelectNextBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 500;
    font-size: 1.8rem;

    border-radius: 1rem;
    background-color: ${({ $isSatisfied }) => ($isSatisfied ? "#4784ff" : "#cde9f4")};
    color: white;

    cursor: pointer;
`;
