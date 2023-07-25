import AddPost from "@/components/AddPost"
import PostList from "@/components/PostList"

const getBlogs = async () => {
    const response = await fetch("http://localhost:3000/api/blogs", {
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}

const Blog = async () => {

    const { blogs } = await getBlogs();

    // console.log(blogs);

    return (
        <div className="mx-auto max-w-4xl mt-16 ">
            <h1>Blog App</h1>
            <AddPost />
            <PostList blogs={blogs} />
        </div>
    )
}

export default Blog
