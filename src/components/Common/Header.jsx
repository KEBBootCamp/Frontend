import React from "react";
import styled from "styled-components";
import { Ic24 } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleClickLogoButton = () => {
        navigate("/");
    };

    return (
        <HeaderWrapper>
            <HeaderBodyWrapper>
                <HeaderLogoButton onClick={handleClickLogoButton}>
                    <HeaderTitle>신검</HeaderTitle>
                    <StyledIc24 />
                </HeaderLogoButton>
            </HeaderBodyWrapper>
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;

    /* border: 1px solid; */
`;

const HeaderBodyWrapper = styled.div`
    display: flex;
    align-items: center;

    height: 7rem;
`;

const HeaderLogoButton = styled.button`
    display: flex;
    align-items: center;

    gap: 0.7rem;
`;

const HeaderTitle = styled.div`
    padding-left: 1rem;

    font-size: 4rem;
`;

const StyledIc24 = styled(Ic24)`
    width: 4rem;
    height: 4rem;
`;
