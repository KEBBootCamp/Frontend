import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import Dropdown from "./Dropdown";

function Home() {
    const [dropdown, setDropdown] = useState("");

    const handleMouseEnter = (factory) => {
        setDropdown(factory);
    };

    const handleMouseLeave = () => {
        setDropdown("");
    };

    return (
        <HomePageWrapper>
            <Header />
            <DropdownContainer>
                <Dropdown
                    title="제조사"
                    items={["현대", "기아", "르노삼성"]}
                    onMouseEnter={() => handleMouseEnter("manufacturing")}
                    onMouseLeave={handleMouseLeave}
                    isDropdownVisible={dropdown === "manufacturing"}
                />
                <Dropdown
                    title="모델"
                    items={["모델1", "모델2", "모델3"]}
                    onMouseEnter={() => handleMouseEnter("carModel")}
                    onMouseLeave={handleMouseLeave}
                    isDropdownVisible={dropdown === "carModel"}
                />
                <Dropdown
                    title="검수 장소"
                    items={["서울", "경기도"]}
                    onMouseEnter={() => handleMouseEnter("inspectionDate")}
                    onMouseLeave={handleMouseLeave}
                    isDropdownVisible={dropdown === "inspectionDate"}
                />
            </DropdownContainer>
        </HomePageWrapper>
    );
}

export default Home;

const HomePageWrapper = styled.div`
    width: 100%;
    margin-top: 22.5rem;
`;

const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;
