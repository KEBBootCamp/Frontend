import React from "react";
import styled from "styled-components";
import { IcUser } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";
import { api } from "../../libs/api";

function ListItem({ id, userName, engineerCareer, engineerBrand, contact, expertIntro }) {
    const navigate = useNavigate();
    //const location = useLocation();
    //const userApplication = location.state.userApplication;

    const handleClickListItem = () => {
        // api.get(
        //     `/expert/expertDetails?brand=${manufacturer}&model=${model}&place=${inspectionSpace}&inspectDate=${formattedDate}`,
        //     { withCredentials: true }
        // );
        // navigate(`/expert-detail/${id}`, { state: { userApplication: userApplication } });
        navigate(`/expert-detail/${id}`, {
            state: { id, userName, engineerCareer, engineerBrand, contact, expertIntro },
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
