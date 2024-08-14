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
        // 세션 저장소에서 userType 가져오기
        const userType = sessionStorage.getItem("userType");

        if (userType === "expert") {
            navigate("/expert-my-page");
        } else if (userType === "user") {
            navigate("/user-my-page");
        } else {
            navigate("/login-please");
        }
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
`;

const HeaderBodyWrapper = styled.div`
    height: 5rem;

    display: flex;
    justify-content: space-between;
`;

const HeaderLogoButton = styled.button`
    display: flex;
    align-items: center;

    gap: 0.7rem;
`;

const HeaderTitle = styled.div`
    color: black;
    font-family: "ONE-Mobile-POP";
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
