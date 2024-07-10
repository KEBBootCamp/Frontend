import React from "react";
import styled from "styled-components";
import { Ic24, IcMyProfile } from "../../assets/svg/icon";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleClickLogoButton = () => {
        navigate("/");
    };

    const handleClickMypageButton = () => {
        navigate("/my-page");
    };

    return (
        <HeaderWrapper>
            <HeaderBodyWrapper>
                <HeaderLogoButton onClick={handleClickLogoButton}>
                    <HeaderTitle>신검</HeaderTitle>
                    <StyledIc24 />
                </HeaderLogoButton>
                <HeaderMyProfileButton onClick={handleClickMypageButton}>
                    <StyledIcMyProfile />
                </HeaderMyProfileButton>
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
    justify-content: space-between;

    height: 7rem;
`;

const HeaderLogoButton = styled.button`
    display: flex;
    align-items: center;

    gap: 0.7rem;
`;

const HeaderTitle = styled.div`
    font-size: 3.5rem;
`;

const StyledIc24 = styled(Ic24)`
    width: 3.5rem;
    height: 3.5rem;
`;

const HeaderMyProfileButton = styled.button`
    cursor: pointer;
`;

const StyledIcMyProfile = styled(IcMyProfile)`
    width: 4rem;
    height: 4rem;
`;
