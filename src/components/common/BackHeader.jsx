import React from "react";
import styled from "styled-components";
import { IcBack } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function BackHeader() {
    const navigate = useNavigate();

    const handleClickBackButton = () => {
        navigate(-1);
    };
    return (
        <BackHeaderWrapper>
            <BackHeaderBodyWrapper>
                <BackHeaderDiv>
                    <BackHeaderBackButton onClick={handleClickBackButton}>
                        <StyledIcBack />
                    </BackHeaderBackButton>
                </BackHeaderDiv>
            </BackHeaderBodyWrapper>
        </BackHeaderWrapper>
    );
}

export default BackHeader;

const BackHeaderWrapper = styled.div``;

const BackHeaderBodyWrapper = styled.div`
    width: 30%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 5rem;
    //border-bottom: 0.1rem solid rgb(25, 25, 25);
`;

const BackHeaderDiv = styled.div`
    position: absolute;
    left: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    align-items: center;
`;
const BackHeaderBackButton = styled.button`
    width: 2rem;
    height: 2rem;

    cursor: pointer;
`;
const StyledIcBack = styled(IcBack)`
    width: 2rem;
    height: 2rem;
`;
