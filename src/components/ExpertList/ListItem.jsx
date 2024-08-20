import React from "react";
import styled from "styled-components";
import { IcUser } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";
import { api } from "../../libs/api";

function ListItem({ id, userName, engineerCareer, engineerBrand, inspectionDate }) {
    const navigate = useNavigate();

    const handleClickListItem = () => {
        const searchCriteria = JSON.parse(sessionStorage.getItem("searchCriteria") || "{}");
        const { manufacturer, model, inspectionSpace, inspectionDate } = searchCriteria;

        api.get(
            `/expert/expertDetails?userId=${id}&brand=${manufacturer}&model=${model}&place=${inspectionSpace}&inspectDate=${inspectionDate}`
        )
            .then((res) => {
                const { expert, inspection } = res.data;
                // 전문가 상세 페이지로 이동하며 데이터를 전달
                navigate(`/expert-detail/${id}`, {
                    state: {
                        expert: expert,
                        inspection: inspection,
                        engineerId: id,
                        inspectionDate: inspectionDate
                    },
                });
            })
            .catch((err) => {
                console.error("전문가 상세 정보 가져오기 실패:", err);
            });
    };

    return (
        <React.Fragment>
            <ExpertListBoxWrapper onClick={handleClickListItem}>
                <ExpertLeftBox>
                    <StyledIcUser />
                </ExpertLeftBox>
                <ExpertRightBox>
                    <ExpertRightBoxName>이름 : {userName}</ExpertRightBoxName>
                    <ExpertYear>경력 : {engineerCareer}</ExpertYear>
                    <ExpertMainCarFactory>주력 제조사 : {engineerBrand}</ExpertMainCarFactory>
                </ExpertRightBox>
            </ExpertListBoxWrapper>
        </React.Fragment>
    );
}

export default ListItem;
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
