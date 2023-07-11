import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


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
      // imageEntities: [
      //   { fileName: 'Image 1', filePath: 'path/to/image1' },
      //   { fileName: 'Image 2', filePath: 'path/to/image2' },
      //   // 더 많은 이미지...
      // ],
      // videoEntities: [
      //   { fileName: 'Video 1', filePath: 'path/to/video1' },
      //   { fileName: 'Video 2', filePath: 'path/to/video2' },
      //   // 더 많은 비디오...
      // ],
      // filmoEntities: [
      //   { filmoName: 'Film 1', filmoYear: '2022', filmoDirector: 'Director 1' },
      //   { filmoName: 'Film 2', filmoYear: '2023', filmoDirector: 'Director 2' },
      //   // 더 많은 filmo...
      // ],
      // linkEntities: [
      //   { link: 'www.example.com', linkName: 'Link 1' },
      //   { link: 'www.example2.com', linkName: 'Link 2' },
      //   // 더 많은 링크...
      // ],

    };

    return (
        <>
        <h1>Profile</h1>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{height: '100%', width: '100%'}}>
                    <Card sx={{ height: "60%" }}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/07/26/bbe2deec-47db-4866-a8ce-abb39a0a181d.jpg" // Assuming the main image is the first one
                            alt="placeholder"
                        />
                    </Card>
                    {/* <Grid container spacing={1}>
                        {profileData.imageEntities.slice(1, 4).map((image, index) => (
                            <Grid item xs={4} key={index}>
                                <Card sx={{ height: "40%" }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image="https://via.placeholder.com/150/808080/FFFFFF/?text=Subimage"
                                        alt="placeholder"
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid> */}
                    {/* <Grid container spacing={2}>
                        {profileData.imageEntities.slice(1, 4).map((image, index) => (
                            <Grid item xs={4} key={index}>
                                <Card sx={{ height: "40%" }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image="https://via.placeholder.com/150/808080/FFFFFF/?text=Subimage"
                                        alt="placeholder"
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid> */}
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ height: "100%" }}>
                      <CardContent>
                          <Typography variant="h5" component="div">
                              {profileData.member.memberName}
                          </Typography>
                          DON LEE
                          <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle1">
                                  GENDER
                              </Typography>
                              <Typography variant="body1">
                                  {profileData.member.memberGender}
                              </Typography>
                          </Box>
                          <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle1">
                                  BIRTHDAY
                              </Typography>
                              <Typography variant="body1">
                                  {profileData.member.memberBirthDt}
                              </Typography>
                          </Box>
                          <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle1">
                                  EMAIL
                              </Typography>
                              <Typography variant="body1">
                                  {profileData.member.memberEmail}
                              </Typography>
                          </Box>
                          <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle1">
                                  PHONE
                              </Typography>
                              <Typography variant="body1">
                                  {profileData.member.memberTelNo}
                              </Typography>
                          </Box>
                      </CardContent>
                  </Card>
              </Grid>

                <Grid item xs={12}>
                    { /* videoEntities rendering... */ }
                    { /* filmoEntities rendering... */ }
                    { /* linkEntities rendering... */ }
                </Grid>
            </Grid>
        </Box>
        
        <div>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div">
                {profileData.title}
              </Typography>
              <Typography variant="body1">
                {profileData.content}
                this is dummy data. this isthis is dummy data. this isthis is dummy data. this is 
              </Typography>
            </CardContent>
          </Card>


        {/* For imageEntities, videoEntities, filmoEntities, linkEntities, map over the arrays and create a Card for each item */}
        {/* For example, for images: */}
        {/* {profileData.imageEntities.map((image, index) => (
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
            ))} */}

        {/* {profileData.videoEntities.map((video, index) => (
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
        ))} */}
        </div>
        </>
  );
};

export default ProfilePage;