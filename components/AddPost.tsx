"use client"
import { useState, ChangeEvent, SyntheticEvent } from 'react'
import Modal from './Modal'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddPost = () => {

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [blog, setBlog] = useState<{ title: string; description: string }>({ title: '', description: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setBlog((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (blog.title === "" || blog.description === "") {
            alert("Enter title and description");
            return false;
        }

        axios.post('/api/blogs', blog)
            .then(res => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setBlog({ title: '', description: '' });
                setIsModalOpen(false);
                router.refresh();
            })
    }

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="mt-5 bg-blue-500 text-white font-semibold px-5 py-3 rounded-md">ADD BLOG</button>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <form onSubmit={handleSubmit} className="w-[75%] flex flex-col justify-center items-center m-5">
                    <h1 className="text-center my-4">Add Blog</h1>
                    <input type="text"
                        name="title"
                        value={blog.title || ''}
                        className="w-full p-3 m-5"
                        placeholder="Please Enter Title"
                        onChange={handleChange}
                    />
                    <input type="text"
                        name="description"
                        value={blog.description || ''}
                        className="w-full p-3 m-5"
                        placeholder="Please Enter Description"
                        onChange={handleChange}
                    />

                    <button className="bg-blue-500 text-white font-semibold px-5 py-3 rounded-2xl">Submit</button>
                </form>
            </Modal>
        </div>
    )
}

export default AddPost
