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
                        <ExpertMainCarFactory>주력 제조사 : 폭스바겐</ExpertMainCarFactory>

                        <ExpertRightBoxIntro>현장에서 모든 걸 보여드립니다!</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 뽀로로</ExpertRightBoxName>
                        <ExpertMainCarFactory>주력 제조사 : BMW</ExpertMainCarFactory>

                        <ExpertRightBoxIntro>편하게 연락주십쇼!</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 훌랄라</ExpertRightBoxName>
                        <ExpertMainCarFactory>주력 제조사 : 볼보</ExpertMainCarFactory>

                        <ExpertRightBoxIntro>언제든지 문의 환영합니다!</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper onClick={handleClickExpertButton}>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 케로로</ExpertRightBoxName>
                        <ExpertMainCarFactory>주력 제조사 : 기아</ExpertMainCarFactory>

                        <ExpertRightBoxIntro>믿어주세요</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 꺄르르</ExpertRightBoxName>
                        <ExpertMainCarFactory>주력 제조사 : 르노삼성</ExpertMainCarFactory>

                        <ExpertRightBoxIntro>문의 환영</ExpertRightBoxIntro>
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

const ExpertRightBoxIntro = styled.div`
    width: 20rem;
`;

const MatchingBtnWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`;

const MatchingBtn = styled.button`
    width: 100%;
    height: 6rem;

    font-size: 1.8rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;
