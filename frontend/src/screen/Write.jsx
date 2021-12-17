import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Writestyle from "../style/components/Write";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { postThought } from "../store/actions/postAction";

const Write = () => {
  let [message, setMessage] = useState("Share Your Thoughts...");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //post selector
  const postedThought = useSelector((state) => state.postedThought);
  let { loading2, error2, post } = postedThought;

  const navigate = useNavigate();

  function changeTheData(msg) {
    setMessage(final);
  }

  function handlePost() {
    dispatch(postThought(message, "boss"));
    console.log(post);
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  return (
    <Writestyle>
      <Nav btn={false} />
      <Container>
        <form onSubmit={handlePost} className="write__box">
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={`${message}`}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                changeTheData(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <div className="category-search-post">
            <input type="text" placeholder="Category" />
          </div>
          <div className="button-pack">
            <button className="btn">Post</button>
          </div>
        </form>
      </Container>
      <Footer />
    </Writestyle>
  );
};

export default Write;
