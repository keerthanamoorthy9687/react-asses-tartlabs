import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentPosts } from "../redux/actions";
import Loading from "./Loading";

const Comment = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(commentPosts());
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      <div className="mb-5">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-2">
          {posts.map((post, id) => {
            return (
              <div key={id}>
                <div className="bg-white rounded shadow p-4 overflow-hidden">
                  <img
                    className="float-left mr-4"
                    alt=""
                    src="https://randomuser.me/api/portraits/women/58.jpg"
                  />
                  <div className="">Time: {Date.now()}</div>

                  <div className="font-bold text-lg">{post.name}</div>
                  <div className="=">{post.email}</div>
                  <div className="">{post.body.substring(0, 45)}...</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded shadow p-4 overflow-hidden mb-4 ">
        Created by <span className="font-bold">Developers</span> for{" "}
        <span className="font-bold">Developers</span>. © 2022
      </div>
    </>
  );
};

export default Comment;
