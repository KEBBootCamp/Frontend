import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import ListItem from "../components/ExpertList/ListItem";
import { useLocation } from "react-router-dom";

function ExpertList() {
    const location = useLocation();
    const { manufacturer, experts } = location.state || {}; // 전달된 제조사 및 전문가 리스트 가져오기

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
                {experts && experts.length > 0 ? (
                    experts.map((item) => (
                        <ListItem
                            key={item.userId}
                            id={item.userId}
                            userName={item.userName}
                            engineerCareer={item.engineerCareer}
                            engineerBrand={item.engineerBrand}
                            contact={item.userPhonenumber}
                            expertIntro={item.engineerProfile}
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
