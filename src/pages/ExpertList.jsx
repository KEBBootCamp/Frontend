import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { IcUser } from "../assets/svg/icon";
import { useNavigate } from "react-router-dom";
import MatchingModal from "../components/common/MatchingModal";

function ExpertList() {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickMatchingButton = () => {
        setIsModalOpen(true);
    };

    return (
        <ExpertListWrapper>
            <Header />
            <ExpertBodyWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 홍길동</ExpertRightBoxName>
                        <ExpertRightBoxPhoneNum>연락처 : 010-1111-1234</ExpertRightBoxPhoneNum>
                        <ExpertRightBoxIntro>한 줄 소개 : 현대차 검수에 특화된 전문가입니다!</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 뽀로로</ExpertRightBoxName>
                        <ExpertRightBoxPhoneNum>연락처 : 010-2222-1234</ExpertRightBoxPhoneNum>
                        <ExpertRightBoxIntro>한 줄 소개 : 편하게 연락주십쇼!</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <ExpertListBoxWrapper>
                    <ExpertLeftBox>
                        <StyledIcUser />
                    </ExpertLeftBox>
                    <ExpertRightBox>
                        <ExpertRightBoxName>이름 : 훌랄라</ExpertRightBoxName>
                        <ExpertRightBoxPhoneNum>연락처 : 010-3333-1234</ExpertRightBoxPhoneNum>
                        <ExpertRightBoxIntro>한 줄 소개 : 언제든지 문의 환영합니다!</ExpertRightBoxIntro>
                    </ExpertRightBox>
                </ExpertListBoxWrapper>
                <MatchingBtnWrapper>
                    <MatchingBtn onClick={handleClickMatchingButton}>매칭하기</MatchingBtn>
                </MatchingBtnWrapper>
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
const ExpertRightBoxPhoneNum = styled.div`
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
