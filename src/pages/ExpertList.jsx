import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import ListItem from "../components/ExpertList/ListItem";
import { useLocation, useNavigate } from "react-router-dom";

function ExpertList() {
    const expertData = [
        {
            id: 1,
            userName: "김정환",
            engineerCareer: "1년",
            engineerBrand: "현대",
            contact: "010-1111-1111",
            expertIntro: "현대차 검수 전문가입니다.",
        },
        {
            id: 2,
            userName: "이장훈",
            engineerCareer: "3년",
            engineerBrand: "르노삼성",
            contact: "010-2222-2222",
            expertIntro: "르노삼성 검수에 자신 있습니다.",
        },
        {
            id: 3,
            userName: "박정완",
            engineerCareer: "3년",
            engineerBrand: "현대",
            contact: "010-3333-3333",
            expertIntro: "현대차 검수 천재이니 연락주세요.",
        },
        {
            id: 4,
            userName: "이경찬",
            engineerCareer: "4년",
            engineerBrand: "기아",
            contact: "010-4444-4444",
            expertIntro: "검수에 최선을 다하겠습니다.",
        },
        {
            id: 5,
            userName: "박수언",
            engineerCareer: "7년",
            engineerBrand: "르노삼성",
            contact: "010-5555-5555",
            expertIntro: "르노삼성 7년차 정비사입니다.",
        },
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const manufacturer = location.state?.manufacturer; // 전달된 제조사 가져오기
    //const userApplication = location.state.userApplication;

    // 전달된 제조사에 맞는 전문가 필터링
    const filteredExperts = expertData.filter((expert) => expert.engineerBrand === manufacturer);

    if (!manufacturer) {
        return (
            <ExpertListWrapper>
                <Header />
                <NoExpertsMessage>제조사가 선택되지 않았습니다.</NoExpertsMessage>
            </ExpertListWrapper>
        );
    }

    return (
        <ExpertListWrapper>
            <Header />
            <ExpertBodyWrapper>
                {filteredExperts.length > 0 ? (
                    filteredExperts.map((item) => (
                        <ListItem
                            key={item.id}
                            userName={item.userName}
                            engineerCareer={item.engineerCareer}
                            engineerBrand={item.engineerBrand}
                            contact={item.contact}
                            expertIntro={item.expertIntro}
                        />
                    ))
                ) : (
                    <NoExpertsMessage>해당 제조사의 전문가가 없습니다.</NoExpertsMessage>
                )}
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
const NoExpertsMessage = styled.div`
    font-size: 2rem;
    text-align: center;

    margin-top: 2rem;
    color: #555;
`;
