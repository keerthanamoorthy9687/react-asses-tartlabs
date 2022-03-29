import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { loadPosts, deletePosts, userPosts } from "../redux/actions";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  function Click(id) {
    dispatch(userPosts(id));
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure deleted?")) {
      dispatch(deletePosts(id)).then((res) => {
        alert("Post " + id + " was deleted successfully");
      });
    }
    return false;
  };

  return (
    <>
      {loading && <Loading />}

      <div className="bg-white rounded shadow p-4 overflow-hidden mb-4">
        <Button variant="primary" className="px-2">
          Users List
        </Button>{" "}
        <Button
          variant="outline-secondary"
          className="px-2"
          onClick={() => navigate("/posts/new")}
        >
          Add Post
        </Button>{" "}
        <Button variant="outline-warning" className="px-2" onClick={Click}>
          Users Posts
        </Button>{" "}
        <Button
          variant="outline-danger"
          className="px-2"
          onClick={() => navigate(`/posts/:id/comments`)}
        >
          Comments List
        </Button>{" "}
        <Button variant="outline-success" className="px-2">
          Posts List
        </Button>{" "}
      </div>

      <div className="mb-5">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-2">
          {posts.map((post, id) => {
            return (
              <div key={id}>
                <div className="bg-white rounded shadow p-4 overflow-hidden">
                  <img
                    className="float-left mr-4"
                    src="https://randomuser.me/api/portraits/women/58.jpg"
                    alt=""
                  />
                  <div className="">Time: {Date.now()}</div>

                  <div className="font-bold text-lg">{post.title}</div>
                  <div className="">{post.body.substring(0, 45)}...</div>

                  <div className="mt-2">
                    <Button
                      variant="outline-dark"
                      className="px-2"
                      onClick={() => navigate(`/posts/${post.id}/edit`)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="outline-danger"
                      className="px-2"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </Button>{" "}
                  </div>
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

export default Home;
