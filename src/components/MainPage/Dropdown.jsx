import React from "react";
import styled from "styled-components";

const Dropdown = ({ title, items, onMouseEnter, onMouseLeave, isDropdownVisible }) => {
    return (
        <DropdownWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <DropdownTitle>{title}</DropdownTitle>
            {isDropdownVisible && (
                <DropdownMenu>
                    {items.map((item, index) => (
                        <DropdownItem key={index}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            )}
        </DropdownWrapper>
    );
};

export default Dropdown;

const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownTitle = styled.div`
    cursor: pointer;
    padding: 1rem;
    background-color: #eaeaea;
    border-radius: 4px;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
`;

const DropdownItem = styled.div`
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;
