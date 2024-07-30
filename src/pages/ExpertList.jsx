import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { IcUser } from "../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function ExpertList() {
    const navigate = useNavigate();

    const handleClickExpertButton = () => {
        navigate("/expert-detail");
    };

    return (
        <ExpertListWrapper>
            <Header />
            <ExpertBodyWrapper>
                <ExpertListBoxWrapper onClick={handleClickExpertButton}>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 홍길동</ExpertRightBoxName>
                        <ExpertYear>경력 : 3년</ExpertYear>
                        <ExpertMainCarFactory>주력 제조사 : 폭스바겐</ExpertMainCarFactory>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 뽀로로</ExpertRightBoxName>
                        <ExpertYear>경력 : 1년</ExpertYear>
                        <ExpertMainCarFactory>주력 제조사 : BMW</ExpertMainCarFactory>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 훌랄라</ExpertRightBoxName>
                        <ExpertYear>경력 : 3년</ExpertYear>
                        <ExpertMainCarFactory>주력 제조사 : 볼보</ExpertMainCarFactory>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper onClick={handleClickExpertButton}>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 케로로</ExpertRightBoxName>
                        <ExpertYear>경력 : 4년</ExpertYear>
                        <ExpertMainCarFactory>주력 제조사 : 기아</ExpertMainCarFactory>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 꺄르르</ExpertRightBoxName>
                        <ExpertYear>경력 : 7년</ExpertYear>
                        <ExpertMainCarFactory>주력 제조사 : 르노삼성</ExpertMainCarFactory>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
            </ExpertBodyWrapper>
        </ExpertListWrapper>
    );
}

export default ExpertList;

const ExpertListWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const ExpertBodyWrapper = styled.div`
    border-radius: 1rem;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ExpertListBoxWrapper = styled.div`
    width: 100%;

    font-size: 1.5rem;
    background-color: rgb(245, 245, 247);

    display: flex;
    align-items: center;

    cursor: pointer;
    transition: all 0.3s ease 0s;
`;

const ExpertLeftBox = styled.div`
    width: 10rem;
    height: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #bcbcbc;
`;

const StyledIcUser = styled(IcUser)`
    width: 6rem;
    height: 6rem;
`;
const ExpertRightBox = styled.div`
    width: calc(100% - 10rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: rgb(245, 245, 247);
`;

const ExpertRightBoxName = styled.div`
    width: 20rem;
`;
const ExpertMainCarFactory = styled.div`
    width: 20rem;
`;

const ExpertYear = styled.div`
    width: 20rem;
`;
