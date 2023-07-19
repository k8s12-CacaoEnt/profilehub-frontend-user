import React, { useState } from "react";
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
const ProfileMemberInfo = ({ profile, isEditing, onChange, onSubmit }) => {
    if (isEditing) {
        return (
            <form onSubmit={onSubmit}>
                <InfoDiv>
                    <StyledLabel>
                    <ProfileMemberContentKey>회원 유형</ProfileMemberContentKey>
                    <StyledInput type="text" name="memberType" value={profile.memberInfo.memberType} onChange={onChange} />
                    </StyledLabel>
                    <StyledLabel>
                        <ProfileMemberContentKey>이름</ProfileMemberContentKey>
                        <StyledInput type="text" name="memberName" value={profile.memberInfo.memberName} onChange={onChange} />
                    </StyledLabel>
                    <StyledLabel>
                        <ProfileMemberContentKey>출생</ProfileMemberContentKey>
                        <StyledInput type="text" name="birthDt" value={profile.memberInfo.birthDt} onChange={onChange} />
                    </StyledLabel>
                    <StyledLabel>
                        <ProfileMemberContentKey>이메일</ProfileMemberContentKey>
                        <StyledInput type="text" name="memberEmail" value={profile.memberInfo.memberEmail} onChange={onChange} />
                    </StyledLabel>
                    <StyledLabel>
                        <ProfileMemberContentKey>연락처</ProfileMemberContentKey>
                        <StyledInput type="text" name="telNo" value={profile.memberInfo.telNo} onChange={onChange} />
                    </StyledLabel>
                </InfoDiv>
            </form>
        );
    } else {
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
        );
    }
};

const ProfileContent = ({ isEditing, profile, onChange }) => {
    return (
        <ProfileContentDiv>
            {isEditing ? (
                <StyledInput type="text" name="title" value={profile.title} onChange={onChange} />
            ) : (
                <ProfileContentTitle>{profile.title}</ProfileContentTitle>
            )}
            {isEditing ? (
                <StyledTextArea name="content" value={profile.content} onChange={onChange} />
            ) : (
                <ProfileContentCoverLetter>{profile.content}</ProfileContentCoverLetter>
            )}
        </ProfileContentDiv>
    );
};

const ProfilePage = () => {
    const [profile, setProfile] = React.useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const getProfile = async () => {
        //TODO: getProfile
        setProfile(dummyProfile)
    }
    React.useEffect(() => {
        getProfile();
    }, []);

    const handleDelete = async () => {
        // API call to delete the profile
        console.log(`Deleted profile: ${profile.profileId}`);
        // await deleteProfileInDB(profile.profileId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // API call to update the profile
        console.log(`Updated profile: ${JSON.stringify(profile, null, 2)}`);
        // await updateProfileInDB(profile);
        setIsEditing(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name in profile.memberInfo) {
            setProfile(prevState => ({ 
                ...prevState, 
                memberInfo: {
                    ...prevState.memberInfo,
                    [name]: value
                }
            }));
        } else {
            setProfile(prevState => ({ ...prevState, [name]: value}));
        }
    };

    return (
        <>
        {/* <>앱바</> */}
        {
            profile && (
                <ProfileDiv>
                    <ProfileMemberDiv>
                        <ProfileMemberImg profile={profile}/>
                        <ProfileMemberInfo profile={profile} isEditing={isEditing} onChange={handleChange} onSubmit={handleSubmit}/>
                    </ProfileMemberDiv>
                    <ProfileContent isEditing={isEditing} profile={profile} onChange={handleChange}/>
                    <button onClick={isEditing ? handleSubmit : () => setIsEditing(true)}>
                        {isEditing ? "수정 완료" : "프로필 수정"}
                    </button>
                    {!isEditing && (
                        <button onClick={handleDelete}>프로필 삭제</button>
                    )}
                </ProfileDiv>
            )
        }
        {/* <>footer</> */}
        </>
  );
};

const Img = styled.img`
    width: 45%;
    height: auto;
    border: 1px solid #000; //외곽선 적용
    border-radius: 10px; // 외곽선 라운딩 적용
`;
const InfoDiv = styled.div`
    width: 45%;
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
    max-width: 1280px;
    margin: auto;
    padding: 2rem;
    overflow: auto;
    background-color: grey;
`;
const ProfileMemberDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: white;
`;
const ProfileMemberContent = styled.div`
    padding: 0.5rem;
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
const ProfileContentDiv = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    background-color: white;
`;
const ProfileContentTitle = styled.div`
    font-size: 18px;
    font-weight : bold;
    color: #222222;
    text-align: left;
    margin: 20px;

    @media (max-width: 768px) {
        font-size: 15px;
`;
const ProfileContentCoverLetter = styled.div`
    font-size: 15px;
    font-weight : bold;
    color: #444444;
    text-align: left;
    padding: 20px;

    @media (max-width: 768px) {
        font-size: 13px;
`;
const StyledLabel = styled.label`
    display : white;
    margin-bottom: 10px
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    display : block;
    width:100%;
    margin-bottom: 20px
`;
const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 200px;
    margin-bottom: 20px
`;
export default ProfilePage;