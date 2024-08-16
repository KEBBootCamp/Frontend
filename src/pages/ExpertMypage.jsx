import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IcUser, IcNext } from "../assets/svg/icon";
import MypageHeader from "../components/common/MypageHeader";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { api } from "../libs/api";

function ExpertMypage() {
    const navigate = useNavigate();
    const [expertData, setExpertData] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    const handleClickMyMatchingHistory = () => {
        navigate("/expert-my-matching-history");
    };
    const handleClickMyInfoFix = () => {
        navigate("/expert-my-info-fix");
    };

    useEffect(() => {
        api.get("/mypage/engineer")
            .then((res) => {
                setExpertData(res.data);
                console.log("전문가 마이페이지:", res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                navigate("/error");
                setIsLoading(false);
            });
    }, []);

    const handleClickLogout = () => {
        api.get("/users/logout")
            .then((res) => {
                // 로그아웃 성공 시 세션 스토리지에서 토큰 제거 및 로그인 페이지로 이동
                sessionStorage.clear(); // sessionStorage 초기화
                navigate("/login");
            })
            .catch((err) => {
                console.error("로그아웃 실패:", err);
            });
    };

    if (isloading) {
        return <Loading />;
    }

    // userName과 isExpert를 안전하게 접근하기 위해 옵셔널 체이닝 사용
    const userName = expertData?.expert?.userName || "전문가 이름";
    const userType = expertData?.expert?.isExpert ? "전문가" : "사용자";

    return (
        <MypageWrapper>
            <MypageHeader title="마이페이지" />
            <MypageBodyWrapper>
                <MypageBoxWrapper>
                    <MypageLeftBox>
                        <StyledIcUser />
                    </MypageLeftBox>
                    <MypageRightBox>
                        <MypageRightBoxName>{userName}</MypageRightBoxName>
                        <MypageRightBoxJob>
                            {userType}
                            <LogoutButton onClick={handleClickLogout}>로그아웃</LogoutButton>
                        </MypageRightBoxJob>
                    </MypageRightBox>
                </MypageBoxWrapper>
                <MyInfoFixBox>
                    <MyMatchingBox>나의 서비스</MyMatchingBox>
                </MyInfoFixBox>
                <MyListWrapper>
                    <MyListBoxWrapper onClick={handleClickMyMatchingHistory}>
                        <MyListBox>나의 매칭 내역</MyListBox>
                        <StyledIcNext />
                    </MyListBoxWrapper>
                    <MyListBoxWrapper onClick={handleClickMyInfoFix}>
                        <MyListBox>내 정보 수정</MyListBox>
                        <StyledIcNext />
                    </MyListBoxWrapper>
                </MyListWrapper>
            </MypageBodyWrapper>
        </MypageWrapper>
    );
}

export default ExpertMypage;

const MypageWrapper = styled.div`
    width: 100vw;
    height: 100dvh;

    background-color: rgb(245, 245, 247);
`;

const MypageBodyWrapper = styled.div``;

const MypageBoxWrapper = styled.div`
    display: flex;
    align-items: center;

    border-bottom: 0.6rem solid rgb(231, 231, 231);
    font-size: 1.5rem;
`;

const MypageLeftBox = styled.div`
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
const MypageRightBox = styled.div`
    width: calc(100% - 10rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: rgb(245, 245, 247);
`;

const MypageRightBoxName = styled.div`
    width: 20rem;
    margin-left: 0.8rem;
    font-size: 1.9rem;
`;

const MypageRightBoxJob = styled.div`
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5rem;
`;

const LogoutButton = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 0.7rem;

    font-size: 1.5rem;

    margin-left: 2rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;

const MyInfoFixBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.3rem;
`;

const MyMatchingBox = styled.div`
    color: rgb(188, 188, 188);

    font-size: 1.5rem;
    margin-left: 1rem;
`;

const MyListWrapper = styled.div`
    padding: 1.3rem;
    margin-left: 1rem;
`;

const MyListBoxWrapper = styled.div`
    width: 100%;
    height: 3.2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0.525rem 0px;
    cursor: pointer;
`;
const MyListBox = styled.div`
    font-size: 1.7rem;
`;

const StyledIcNext = styled(IcNext)`
    width: 1.6rem;
    height: 1.6rem;

    margin-right: 1rem;
`;
