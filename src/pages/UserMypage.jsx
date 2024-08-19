import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IcPhoneCall, IcUser } from "../assets/svg/icon";
import MypageHeader from "../components/common/MypageHeader";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { api } from "../libs/api";

function UserMypage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null); // 사용자 데이터를 저장할 상태
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get("/mypage/customer")
            .then((res) => {
                console.log("API Response Data:", res.data);
                setUserData(res.data);
                setIsLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 설정
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
                setIsLoading(false);
            });
    }, [navigate]);

    if (isLoading) {
        return <Loading />;
    }

    const handleClickPhoneCall = (id) => {
        const inspection = userData?.inspections.find((inspection) => inspection.id === id);
        const expert = inspection?.expert || null;

        navigate(`/expert-detail/${expert.userId}`, {
            state: {
                expert: {
                    userPhonenumber: expert.userPhonenumber,
                    engineerBrand: expert.engineerBrand,
                    engineerProfile: expert.engineerProfile,
                    userName: expert.userName,
                },
                inspection: {
                    model: inspection.model,
                    brand: inspection.brand,
                    place: inspection.place,
                    inspectDate: inspection.inspectDate,
                },
            },
        });
    };

    const handleClickLogout = () => {
        api.get("/users/logout")
            .then((res) => {
                sessionStorage.clear();
                navigate("/login");
            })
            .catch((err) => {
                console.error("로그아웃 실패:", err);
            });
    };

    // userName과 isExpert를 안전하게 접근하기 위해 옵셔널 체이닝 사용
    const userName = userData?.user?.userName || "사용자 이름";
    const userType = userData?.user?.isExpert ? "전문가" : "사용자";

    // 날짜 포맷팅 함수
    const formatDate = (dateString) => {
        if (!dateString || dateString === "null") return "날짜 정보 없음";
        const date = new Date(dateString);

        // 연도, 월, 일, 시, 분을 추출
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 필요
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        // 포맷팅된 문자열 반환
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

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
                    <MyInfoFix>나의 신청 내역</MyInfoFix>
                </MyInfoFixBox>
                <MatchingHistoryList>
                    {userData?.inspections?.length > 0 ? (
                        userData.inspections.map((inspection) => (
                            <MatchingCarDetailWrapper key={inspection.id}>
                                <MatchingExpertInfo>
                                    <MatchingExpertBox>
                                        <MatchingExpert>
                                            동행 전문가 : {inspection.expert?.userName || "정보 없음"}
                                        </MatchingExpert>
                                        <StyledIcPhoneCall onClick={() => handleClickPhoneCall(inspection.id)} />
                                    </MatchingExpertBox>
                                    <AcceptORRejectDiv
                                        $status={
                                            inspection.isAccepted
                                                ? "accepted"
                                                : inspection.isRejected
                                                ? "rejected"
                                                : "pending"
                                        }
                                    >
                                        {inspection.isAccepted ? "수락됨" : inspection.isRejected ? "거절됨" : "신청됨"}
                                    </AcceptORRejectDiv>
                                </MatchingExpertInfo>
                                <CarDetail>
                                    <MatchingCarManufacturer>차종 : {inspection.brand}</MatchingCarManufacturer>
                                    <MatchingCarModel>{inspection.model}</MatchingCarModel>
                                </CarDetail>
                                <MatchingCarLocation>검수 장소 : {inspection.place}</MatchingCarLocation>
                                <MatchingCarDate>검수 일정 : {formatDate(inspection.inspectDate)}</MatchingCarDate>
                            </MatchingCarDetailWrapper>
                        ))
                    ) : (
                        <NoApplyMessage>신청 내역이 없습니다.</NoApplyMessage>
                    )}
                </MatchingHistoryList>
            </MypageBodyWrapper>
        </MypageWrapper>
    );
}

export default UserMypage;

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

    margin-left: 2rem;
    background-color: rgb(4, 41, 63);
    color: white;
`;

const MyInfoFixBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    margin-top: 1.2rem;
`;

const MyInfoFix = styled.div`
    color: rgb(188, 188, 188);

    font-size: 1.8rem;
    margin-left: 1rem;
`;

const MatchingHistoryList = styled.div`
    width: 100%;

    padding: 2rem;
`;

const MatchingCarDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 1rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ $isRejected }) => ($isRejected ? "transparent" : "white")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CarDetail = styled.div`
    display: flex;
    gap: 0.5rem;

    font-size: 1.8rem;
    font-weight: bold;
`;

const MatchingCarManufacturer = styled.div``;
const MatchingCarModel = styled.div``;
const MatchingCarLocation = styled.div`
    font-size: 1.8rem;
    color: #555;
`;
const MatchingCarDate = styled.div`
    font-size: 1.8rem;
    color: #555;
`;

const MatchingExpertInfo = styled.div`
    display: flex;
    align-items: center;

    column-gap: 7rem;
`;

const MatchingExpertBox = styled.div`
    width: 25rem;

    display: flex;
    align-items: center;
`;

const AcceptORRejectDiv = styled.div`
    width: 8rem;

    text-align: center;
    padding: 0.75rem;
    font-size: 1.5rem;

    border-radius: 0.5rem;
    background-color: ${({ $status }) => {
        switch ($status) {
            case "accepted":
                return "#4784ff"; // 수락됨 색상
            case "rejected":
                return "#ff4d4d"; // 거절됨 색상
            default:
                return "#aaa"; // 신청됨 색상
        }
    }};
    color: white;
    cursor: pointer;
`;

const MatchingExpert = styled.div`
    font-size: 1.8rem;
`;

const StyledIcPhoneCall = styled(IcPhoneCall)`
    width: 2rem;
    height: 2rem;

    margin-left: 1rem;
`;

const NoApplyMessage = styled.div`
    font-size: 2rem;
    text-align: center;

    margin-top: 2rem;
    color: #555;
`;
