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
        memberType: "MODEL",
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
const ProfilePage = () => {
    const [profile, setProfile] = React.useState(null);
    const getProfileImgPath = (profile) => {
        if (!profile || !profile.images || profile.images.length < 0) return null;
        for(let i = 0; i < profile.images.length; i++) {
            if (profile.images[i].imageId === profile.defaultImageId) {
                return profile.images[i].filePath;
            }
        }
        return null;
    }
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
                        <ProfileMemberImg src={getProfileImgPath(profile)}/>
                        <ProfileMemberInfoDiv>
                            <ProfileMemberContent>
                                <ProfileMemberContentKey>배우 이름</ProfileMemberContentKey>
                                <ProfileMemberContentValue>{profile.memberInfo.memberName}</ProfileMemberContentValue>
                            </ProfileMemberContent>
                            <ProfileMemberContent>
                                <ProfileMemberContentKey>이메일</ProfileMemberContentKey>
                                <ProfileMemberContentValue>{profile.memberInfo.memberEmail}</ProfileMemberContentValue>
                            </ProfileMemberContent>
                            <ProfileMemberContent>
                                <ProfileMemberContentKey>성별</ProfileMemberContentKey>
                                <ProfileMemberContentValue>{profile.memberInfo.gender}</ProfileMemberContentValue>
                            </ProfileMemberContent>
                        </ProfileMemberInfoDiv>
                    </ProfileMemberDiv>
                    <>
                        <>프로필 타이틀</>
                        <>프로필 content</>
                    </>
                </ProfileDiv>
            )
        }
        {/* <>footer</> */}
        </>
  );
};
const ProfileDiv = styled.div`
    width: 100%;
    background-color: red;
`;
const ProfileMemberDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
`;
const ProfileMemberImg = styled.img`
    width: 50%;
    height: auto;
`;
const ProfileMemberInfoDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ProfileMemberContent = styled.div`
    padding: 10px;
    width: 100%;
    text-align: left;
`;
const ProfileMemberContentKey = styled.div`
    font-size: 25px;
    color: #222222;
    margin-bottom: 10px;
`;
const ProfileMemberContentValue = styled.div`
    font-size: 20px;
    color: #999999;
`;
export default ProfilePage;