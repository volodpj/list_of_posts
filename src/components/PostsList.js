import React from 'react';

const PostsList = (props) => {
    return (
        <div>
            <ul>
                {props.posts.map((post) => {
                    return <li>{post.title}</li>
                })}
            </ul>
        </div>
    )
};

export default PostsList