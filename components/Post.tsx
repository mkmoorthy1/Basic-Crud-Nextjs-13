"use client"

import { useState, SyntheticEvent, ChangeEvent } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from 'next/navigation';

interface Blog {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const Post = ({ _id, title, description }: Blog) => {

  const router = useRouter();

  const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);

  const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);


  const [blog, setBlog] = useState<{ _id: string, title: string; description: string }>({ _id, title, description });

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

    axios.patch(`/api/blogs/${blog._id}`, blog)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setBlog({ _id: '', title: '', description: '' });
        setIsModalOpenEdit(false);
        router.refresh();

      })

  }

  const handleDelete = (id: string) => {

    axios.delete(`/api/blogs/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {

        setIsModalOpenDelete(false);
        router.refresh();

      })
  }

  return (
    <li className="p-3 bg-slate-300 my-5">
      <h2 className="text-2xl font-bold my-1 p-3">{title}</h2>
      <p className="my-3 text-justify p-3">{description}</p>
      <button className="px-5 py-1 bg-blue-500 text-white rounded-2xl" onClick={() => setIsModalOpenEdit(true)}>Edit</button>

      <Modal isModalOpen={isModalOpenEdit} setIsModalOpen={setIsModalOpenEdit}>
        <form onSubmit={handleSubmit} className="w-[75%] flex flex-col justify-center items-center m-5">
          <h1 className="text-center my-4">Edit Blog</h1>
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
      <button className="ml-3 px-5 py-1 bg-red-500 text-white rounded-2xl" onClick={() => setIsModalOpenDelete(true)}>Delete</button>
      <Modal isModalOpen={isModalOpenDelete} setIsModalOpen={setIsModalOpenDelete}>
        <h1 className="text-2xl px-2 mx-6 my-8">Are You Sure You Want To Delete This Post?</h1>
        <div className="flex mt-3 gap-x-3">
          <button className="m-2 px-5 py-1 bg-red-500 text-white rounded-2xl" onClick={() => handleDelete(_id)}>Yes</button>
          <button className="m-2 px-5 py-1 bg-blue-500 text-white rounded-2xl" onClick={() => setIsModalOpenDelete(false)}>No</button>
        </div>
      </Modal>
    </li>
  )
}

export default Post
