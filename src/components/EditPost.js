import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePosts } from "../redux/actions";
import { Row, Col, Button, Alert, Form } from "react-bootstrap";
import * as types from "../redux/actionType";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Editpost = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.app);
  console.log(posts);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { postId } = useParams();
  console.log(useParams());
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { title: title, body: message, userId: 1 };

    setError("");
    dispatch(updatePosts(payload))
      .then((res) => {
        setSuccess(true);
        setTitle("");
        setMessage("");
      })
      .catch((err) => {
        dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
        setError(err);
      });
  };
  let findPost = posts.find((v) => v.id == postId);
  console.log(postId);
  console.log(findPost);

  return (
    <>
      {loading && <Loading />}
      <Row className="movie-detail pt-4">
        <Col md={5}>
          <h3 className="movie-title">Edit Post Details</h3>

          {error && (
            <Alert variant={"danger"}>
              <code>Error: {error.message || ""}</code>
            </Alert>
          )}

          {success && <Alert variant={"success"}></Alert>}

          <Form className="movie-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                placeholder="Title goes here"
                name="title"
                required
                value={findPost.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Post Message</Form.Label>

              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "100px" }}
                required
                defaultValue={findPost.body}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            */
            <Button variant="dark" type="submit" size="md" className="mt-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Editpost;
