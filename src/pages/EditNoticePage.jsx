import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditNoticePage({ match }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    // Match object is provided by react-router-dom and contains information about current URL
    const { noticeId } = match.params;
    
    useEffect(() => {
        // TODO: Replace this with API call to get current notice info
        setTitle('Old Title');
        setContent('Old Content');
    }, [noticeId]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Replace this with API call to update notice info
        console.log(`Updated title: ${title}`);
        console.log(`Updated content: ${content}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={handleContentChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default EditNoticePage;
