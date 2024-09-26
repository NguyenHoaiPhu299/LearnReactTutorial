function Posts({posts, name}) {
    const postsJsx = posts.map((post, index) => {
        return (
            <div key={index}>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p><i>Post By: {name}</i></p>
            </div>
        )
    });

    console.log(posts)

    return (
        <>
            <h3>Danh sách bài viết</h3>
            {postsJsx}
        </>
    );
}

export default Posts;