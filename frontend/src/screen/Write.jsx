import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import Writestyle from "../style/components/Write";
import Container from "../components/Container";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Write = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  return (
    <Writestyle>
      <Nav btn={false} />
      <Container>
        <div className="write__box">
          <div>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Share Your Thoughts...</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="button-pack">
            <button className="btn">Post</button>
          </div>
        </div>
      </Container>
    </Writestyle>
  );
};

export default Write;
