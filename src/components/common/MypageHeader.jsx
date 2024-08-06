import React from "react";
import styled from "styled-components";
import BackHeader from "../common/BackHeader";
import { IcHome } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function MypageHeader({ title }) {
    const navigate = useNavigate();

    const handleClickHomeBtn = () => {
        navigate("/");
    };
    return (
        <MypageHeaderWrapper>
            <BackHeader />
            <MypageHeaderBox>
                <MypageHeaderText>{title}</MypageHeaderText>
                <HomepageBtn onClick={handleClickHomeBtn}>
                    <StyledIcHome />
                </HomepageBtn>
            </MypageHeaderBox>
        </MypageHeaderWrapper>
    );
}

export default MypageHeader;

const MypageHeaderWrapper = styled.div`
    width: 100%;
    display: flex;

    border-bottom: 0.1rem solid rgb(25, 25, 25);
`;

const MypageHeaderBox = styled.div`
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 13rem;
    font-size: 2rem;
`;

const MypageHeaderText = styled.div`
    width: 10rem;
    margin-left: 2.7rem;
`;

const HomepageBtn = styled.button`
    width: 2.5rem;
    height: 2.5rem;

    margin-right: 3rem;
    cursor: pointer;
`;
const StyledIcHome = styled(IcHome)`
    width: 2.6rem;
    height: 2.6rem;
`;
