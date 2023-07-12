import React from 'react';
import { AppBar, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const NoticeListPage = () => {
    // 임시 데이터
    const noticeData = [
        {
            noticeId: 1,
            title: 'Notice 1',
            content: 'Content 1',
            filmo_type: 'Type 1',
            filmo_name: 'Name 1',
            filmo_role: 'Role 1',
            apply_deadline_dt: '2023-07-20',
            filming_start_period: '2023-07-22',
            filming_end_period: '2023-07-29',
            create_dt: '2023-07-01',
            modify_dt: '2023-07-02',
            member_id: 1,
        },
        // ...다른 공지사항 데이터
    ];

    // create_dt를 기준으로 게시물을 정렬합니다. 최신 게시물이 가장 상단에 위치하게 됩니다.
    const sortedNoticeData = noticeData.sort((a, b) => new Date(b.create_dt) - new Date(a.create_dt));


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Notice Board
                    </Typography>
                </Toolbar>
            </AppBar>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Deadline</TableCell>
                        <TableCell>Start Period</TableCell>
                        <TableCell>End Period</TableCell>
                        <TableCell>Create Date</TableCell>
                        <TableCell>Modify Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {noticeData.map((notice) => (
                        <TableRow
                            key={notice.noticeId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{notice.title}</TableCell>
                            <TableCell>{notice.filmo_type}</TableCell>
                            <TableCell>{notice.filmo_name}</TableCell>
                            <TableCell>{notice.filmo_role}</TableCell>
                            <TableCell>{notice.apply_deadline_dt}</TableCell>
                            <TableCell>{notice.filming_start_period}</TableCell>
                            <TableCell>{notice.filming_end_period}</TableCell>
                            <TableCell>{notice.create_dt}</TableCell>
                            <TableCell>{notice.modify_dt}</TableCell>                        </TableRow>
                    ))}


                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default NoticeListPage;
