import React from "react";
import styled from "styled-components";
import { IcBack } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function MypageHeader() {
    const navigate = useNavigate();

    const handleClickBackButton = () => {
        navigate("/");
    };
    return (
        <MypageHeaderWrapper>
            <MypageHeaderBodyWrapper>
                <MypageHeaderDiv>
                    <MypageHeaderBackButton onClick={handleClickBackButton}>
                        <StyledIcBack />
                    </MypageHeaderBackButton>
                </MypageHeaderDiv>
                <MypageHeaderBox>마이페이지</MypageHeaderBox>
            </MypageHeaderBodyWrapper>
        </MypageHeaderWrapper>
    );
}

export default MypageHeader;

const MypageHeaderWrapper = styled.div`
    width: 100%;
`;

const MypageHeaderBodyWrapper = styled.div`
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 5rem;
    border-bottom: 0.1rem solid rgb(25, 25, 25);
`;

const MypageHeaderDiv = styled.div`
    position: absolute;
    left: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    align-items: center;
`;
const MypageHeaderBackButton = styled.button`
    width: 2rem;
    height: 2rem;

    cursor: pointer;
`;
const StyledIcBack = styled(IcBack)`
    width: 2rem;
    height: 2rem;
`;

const MypageHeaderBox = styled.div`
    font-weight: 600;
    font-size: 2rem;
`;
