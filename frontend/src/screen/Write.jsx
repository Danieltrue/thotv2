import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Writestyle from "../style/components/Write";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { postThought, getSingleThot } from "../store/actions/postAction";
import Spinner from "../components/Spinner";

const Write = ({ edit }) => {
  let [message, setMessage] = useState("");
  let [topic, setTopic] = useState("");
  let [load, setLoad] = useState(false);
  const [datas, setDatas] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //post selector
  const postedThought = useSelector((state) => state.postedThought);

  const navigate = useNavigate();
  const params = useParams();

  const singleThoughtData = useSelector((state) => state.singleThought);
  let { single_thot_loading, single_thot_error, singleThought } =
    singleThoughtData;

  useEffect(() => {
    if (edit && !singleThought) {
      dispatch(getSingleThot(params.id));
    }
    if (singleThought) {
      let string = singleThought.data.findThought.body.replace("<p>", "");
      string = string.replace("</p>", "");
      setDatas(string);
      loadedData();
    }
  }, [dispatch, singleThought]);

  function handlePost(e) {
    e.preventDefault();
    if (!edit) {
      dispatch(postThought(message, topic));
    }
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  //Loading
  function loadedData() {
    const text = document.querySelector(".text-editor");
    text.textContent = singleThought ? datas : "";
  }

  return (
    <Writestyle>
      <Nav btn={false} />
      <Container>
        <form onSubmit={handlePost} className="write__box">
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              minLength={10}
              maxLength={200}
              placeholder="Share Your Thoughts...."
              onChange={(evt) => setMessage(evt.target.value)}
              className="text-editor"
            ></textarea>
          </div>
          <div className="category-search-post">
            <input
              type="text"
              placeholder="Category"
              onChange={(evt) => setTopic(evt.target.value)}
            />
          </div>
          <div className="button-pack">
            {!edit ? (
              <button className="btn">
                {postedThought.loading ? <Spinner /> : "Post"}
              </button>
            ) : (
              <button className="btn">
                {postedThought.loading ? <Spinner /> : "Update"}
              </button>
            )}
          </div>
        </form>
      </Container>
      <Footer />
    </Writestyle>
  );
};

export default Write;
