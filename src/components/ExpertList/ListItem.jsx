import React from "react";
import { useNavigate } from "react-router-dom";

function ListItem({ User_id, User_name, engineer_career }) {
    const navigate = useNavigate();

    const handleClickListItem = () => {
        navigate();
    };
    return (
        <React.Fragment>
            <ExpertListBoxWrapper onClick={handleClickListItem}>
                <ExpertLeftBox>
                    <StyledIcUser />
                </ExpertLeftBox>
                <ExpertRightBox>
                    <ExpertRightBoxName>이름 : 홍길동</ExpertRightBoxName>
                    <ExpertYear>경력 : 3년</ExpertYear>
                    <ExpertMainCarFactory>주력 제조사 : 폭스바겐</ExpertMainCarFactory>
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
