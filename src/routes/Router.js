import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPost from "../components/EditPost";
import AddPost from "../components/AddPost";
import Layout from "./Layouts";
import Home from "../container/Home";
import Comments from "../components/Comments";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/posts/:postId/edit" element={<EditPost />} />
          <Route path="/posts/:id/comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
