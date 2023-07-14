import React from "react";
import styled from "styled-components";
const dummyProfile = {
    profileId: 1,
    title: '안녕하세요 제 이름은 김민수입니다.',
    content: `안녕하세요 제 이름은 김민수입니다.
저의 장점은 키가 크고 목소리가 좋습니다. 저는 노래를 좋아합니다. 그리고 축구를 좋아합니다.
밥을 잘먹고, 잠을 잘자고, 일을 잘합니다. 그리고 노래를 잘합니다. 그리고 축구를 잘합니다.
그럼에도 불구하고 저는 아직 연기를 잘하지 못합니다. 그래서 연기를 배우고 싶습니다.`,
    defaultImageId: 1,
    memberInfo: {
        memberId: 1,
        memberType: "모델",
        memberEmail: "mail@gmail.com",
        memberName: "정종형",
        gender: "남자",
        telNo: "010-7777-7777",
        birthDt: "1991-11-29"
    },
    images: [
        {
            imageId: 1,
            fileName: "profile1.jpg",
            filePath: "https://profilehub-bucket.s3.ap-northeast-2.amazonaws.com/storage/files/images/20230709/0118cfaa-c7d8-444f-83ab-9be9da9f4b38.png",
            fileRealName: "profile1.jpg",
        },
    ],
}


// Image component
const ProfileMemberImg = ({ profile }) => {
    const getProfileImgPath = (profile) => {
        if (!profile || !profile.images || profile.images.length < 0) return null;
        for(let i = 0; i < profile.images.length; i++) {
            if (profile.images[i].imageId === profile.defaultImageId) {
                return profile.images[i].filePath;
            }
        }
        return null;
    }
    return (
        <Img src={getProfileImgPath(profile)}/>
    )
}
// Information component
const ProfileMemberInfo = ({ profile }) => {
    return (
        <InfoDiv>
            <ProfileMemberContent>
                <ProfileMemberContentValue>{profile.memberInfo.memberType}</ProfileMemberContentValue>
                <ProfileMemberContentValue>{profile.memberInfo.memberName}</ProfileMemberContentValue>
            </ProfileMemberContent>
            <ProfileMemberContent>
                <ProfileMemberContentKey>출생</ProfileMemberContentKey>
                <ProfileMemberContentValue>{profile.memberInfo.birthDt}</ProfileMemberContentValue>
            </ProfileMemberContent>
            <ProfileMemberContent>
                <ProfileMemberContentKey>이메일</ProfileMemberContentKey>
                <ProfileMemberContentValue>{profile.memberInfo.memberEmail}</ProfileMemberContentValue>
            </ProfileMemberContent>
            <ProfileMemberContent>
                <ProfileMemberContentKey>연락처</ProfileMemberContentKey>
                <ProfileMemberContentValue>{profile.memberInfo.telNo}</ProfileMemberContentValue>
            </ProfileMemberContent>
        </InfoDiv>
    )
}

const ProfilePage = () => {
    const [profile, setProfile] = React.useState(null);
    const getProfile = async () => {
        //TODO: getProfile
        setProfile(dummyProfile)
    }
    React.useEffect(() => {
        getProfile();
    }, []);
    return (
        <>
        {/* <>앱바</> */}
        {
            profile && (
                <ProfileDiv>
                    <ProfileMemberDiv>
                        {/* Replace the existing components with the new ones */}
                        <ProfileMemberImg profile={profile}/>
                        <ProfileMemberInfo profile={profile}/>
                    </ProfileMemberDiv>
                    <ProfileContent>
                        <ProfileContentTitle>{profile.title}</ProfileContentTitle>
                        <ProfileContentCoverLetter>{profile.content}</ProfileContentCoverLetter>
                    </ProfileContent>
                </ProfileDiv>
            )
        }
        {/* <>footer</> */}
        </>
  );
};

const Img = styled.img`
    width: 50%;
    height: auto;
    border: 1px solid #000; //외곽선 적용
    border-radius: 10px; // 외곽선 라운딩 적용
`;
const InfoDiv = styled.div`
    width: 50%;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000; //외곽선 적용
    border-radius: 10px; // 외곽선 라운딩 적용
    padding: 20px; // 외곽선과 콘텐츠 사이의 간격 조정
`;
const ProfileDiv = styled.div`
    width: 100%;
    background-color: grey;
`;
const ProfileMemberDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;
const ProfileMemberContent = styled.div`
    padding: 5px;
    width: 100%;
    text-align: left;
`;
const ProfileMemberContentKey = styled.div`
    font-size: 15px;
    color: #999999;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 13px;
`;
const ProfileMemberContentValue = styled.div`
    font-size: 18px;
    font-weight : bold;
    color: #222222;

    @media (max-width: 768px) {
        font-size: 15px;
`;
const ProfileContent = styled.div`
    width: 100%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`;
const ProfileContentTitle = styled.div`
    font-size: 18px;
    font-weight : bold;
    color: #222222;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 15px;
`;
const ProfileContentCoverLetter = styled.div`
    font-size: 15px;
    font-weight : bold;
    color: #444444;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 13px;
`;
export default ProfilePage;