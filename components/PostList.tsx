import Post from './Post';
export interface BlogProps {
    blogs: Blog[];
}

interface Blog {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}



const PostList = ({ blogs }: BlogProps) => {
    return (
        <div className="w-full">
            <h2 className="mt-5">Blog List</h2>
            {
                blogs.map((blog: Blog) => {
                    return (
                        <ul key={blog._id} className="flex justify-center flex-col w-[110%]"><Post {...blog} /></ul>
                    )
                })
            }
        </div>
    )
}

export default PostList
