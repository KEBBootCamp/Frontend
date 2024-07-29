import React from "react";
import styled from "styled-components";
import { IcUser, IcHome } from "../assets/svg/icon";
import BackHeader from "../components/common/BackHeader";
import { useNavigate } from "react-router-dom";

function ExpertDetail() {
    const navigate = useNavigate();

    const handleClickHomeBtn = () => {
        navigate("/");
    };
    return (
        <ExpertDetailWrapper>
            <HeaderWrapper>
                <BackHeader />
                <BackExpertList>
                    <BackExpertListText>다른 정비사 보기</BackExpertListText>
                    <HomepageBtn onClick={handleClickHomeBtn}>
                        <StyledIcHome />
                    </HomepageBtn>
                </BackExpertList>
            </HeaderWrapper>
            <ExpertDetailContainer>
                <ExpertTopBox>
                    <StyledIcUser />
                </ExpertTopBox>
                <ExpertBottomBoxWrapper>
                    <ExpertBottomBox>
                        <ExpertRightBoxName>홍길동</ExpertRightBoxName>
                        <ExpertRightBoxJob>정비사</ExpertRightBoxJob>
                    </ExpertBottomBox>
                    <ExpertDetailBox>
                        <ExpertIntro>현장에서 모든 걸 보여드립니다!</ExpertIntro>
                        <ExpertMainCarFactory>주요 제조사 : 폭스바겐</ExpertMainCarFactory>
                        <ExpertPhoneNum>연락처 : 010-1111-1234</ExpertPhoneNum>
                    </ExpertDetailBox>
                </ExpertBottomBoxWrapper>
            </ExpertDetailContainer>
            <ExpertBackBtnWrapper>
                <ExpertMatchingBtn>신청하기</ExpertMatchingBtn>
            </ExpertBackBtnWrapper>
        </ExpertDetailWrapper>
    );
}

export default ExpertDetail;

const ExpertDetailWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const HeaderWrapper = styled.div`
    display: flex;
`;
const BackExpertList = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    column-gap: 14rem;

    font-size: 2rem;
`;

const BackExpertListText = styled.div`
    width: 14rem;
`;

const HomepageBtn = styled.button`
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
`;

const StyledIcHome = styled(IcHome)`
    width: 2.6rem;
    height: 2.6rem;
`;

const ExpertDetailContainer = styled.div`
    height: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;

    background-color: rgb(245, 245, 247);
`;

const ExpertBackBtnWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3rem;
`;

const ExpertMatchingBtn = styled.button`
    width: 100%;
    height: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-size: 1.8rem;

    border-radius: 1rem;
    background-color: #4784ff;
    color: white;

    cursor: pointer;
`;

const ExpertTopBox = styled.div`
    margin-top: 3rem;

    display: flex;
    align-items: center;

    font-size: 1.5rem;
`;

const StyledIcUser = styled(IcUser)`
    width: 10rem;
    height: 10rem;
`;

const ExpertBottomBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    padding: 0 3rem;

    font-size: 2rem;
    background-color: rgb(245, 245, 247);
`;

const ExpertBottomBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;

    font-size: 3rem;
    font-weight: 500;
`;
const ExpertDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
`;

const ExpertMainCarFactory = styled.div``;

const ExpertIntro = styled.div`
    color: #626974;
    text-align: center;
`;
const ExpertRightBoxName = styled.div``;

const ExpertRightBoxJob = styled.div``;
const ExpertPhoneNum = styled.div``;
