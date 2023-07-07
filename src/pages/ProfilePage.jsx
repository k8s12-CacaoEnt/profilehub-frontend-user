import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProfilePage = () => {
    // 임시 데이터
    const profileData = {
      profileId: 1,
      content: 'Profile Content',
      title: 'Profile Title',
      member: {
        memberName: 'Member Name',
        memberGender: 'male',
        memberEmail: 'example@example.com',
        memberTelNo: '0123456789',
        memberBirthDt: '1990-01-01'
      },
      imageEntities: [
        { fileName: 'Image 1', filePath: 'path/to/image1' },
        { fileName: 'Image 2', filePath: 'path/to/image2' },
        // 더 많은 이미지...
      ],
      videoEntities: [
        { fileName: 'Video 1', filePath: 'path/to/video1' },
        { fileName: 'Video 2', filePath: 'path/to/video2' },
        // 더 많은 비디오...
      ],
      filmoEntities: [
        { filmoName: 'Film 1', filmoYear: '2022', filmoDirector: 'Director 1' },
        { filmoName: 'Film 2', filmoYear: '2023', filmoDirector: 'Director 2' },
        // 더 많은 filmo...
      ],
      linkEntities: [
        { link: 'www.example.com', linkName: 'Link 1' },
        { link: 'www.example2.com', linkName: 'Link 2' },
        // 더 많은 링크...
      ],

    };

    return (
        <div>
            <h2>Profile</h2>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {profileData.title}
              </Typography>
              <Typography variant="body2">
                {profileData.content}
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
                <Typography variant="h6" component="div">
                    {profileData.member.memberName}
                </Typography>
                <Typography variant="body2">
                    {profileData.member.memberEmail}
                </Typography>
                {/* More member details... */}
            </CardContent>
        </Card>

        {/* For imageEntities, videoEntities, filmoEntities, linkEntities, map over the arrays and create a Card for each item */}
        {/* For example, for images: */}
        {profileData.imageEntities.map((image, index) => (
            <Card key={index}>
                <CardContent>
                    <Typography variant="body2">
                    {image.fileName}
                    </Typography>
                    <Typography>
                    {image.filePath}
                    </Typography>
                </CardContent>
                </Card>
            ))}

        {profileData.videoEntities.map((video, index) => (
            <Card key={index}>
            <CardContent>
                <Typography variant="body2">
                {video.fileName}
                </Typography>
                <Typography variant="body2">
                {video.filePath}
                </Typography>
            </CardContent>
            </Card>
        ))}

        {profileData.filmoEntities.map((filmo, index) => (
            <Card key={index}>
            <CardContent>
                <Typography variant="body2">
                {filmo.filmoName}
                </Typography>
                <Typography variant="body2">
                {filmo.filmoYear}
                </Typography>
                <Typography variant="body2">
                {filmo.filmoDirector}
                </Typography>
            </CardContent>
            </Card>
        ))}

        {profileData.linkEntities.map((link, index) => (
            <Card key={index}>
            <CardContent>
                <Typography variant="body2">
                {link.linkName}
                </Typography>
                <Typography variant="body2">
                {link.link}
                </Typography>
            </CardContent>
            </Card>
        ))}
        </div>
  );
};

export default ProfilePage;