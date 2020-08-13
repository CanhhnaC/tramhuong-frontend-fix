import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

import { timeConverter, GetOne, GetList } from "../../data/GetData";
import { Show } from "./index";

function ShowPost({ post, content }) {
  return (
    <div className="postKienThuc">
      <h1 className="upper ici">{post.name}</h1>
      <h5>{timeConverter(post.createdate)}</h5>
      <div className="postKienThuc-content">
        {(content || []).map((item, key) => (
          <div key={key}>
            <div className="text-center">
              <Image key={key} fluid src={item.src} alt={item.title} />
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Post() {
  var uid = useRouteMatch().params.postID;
  let match = useRouteMatch().url;
  var parentPath = match.substring(0, match.lastIndexOf("/"));

  const [post, setPost] = useState([]);
  const [relate, setRelate] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const item = await GetOne({ collection: "posts", uid: uid });
      if (item) {
        setPost(item);

        var temps = [];

        var len =
          Object.keys(item.description).length >=
          Object.keys(item.pictures).length
            ? Object.keys(item.description).length
            : Object.keys(item.pictures).length;
        console.log(len);
        for (var i = 0; i < len; i++) {
          var temp = {
            content:
              typeof item.description[i] !== "undefined"
                ? item.description[i].content
                : "",
            src:
              typeof item.pictures[i] !== "undefined"
                ? item.pictures[i].src
                : "",
            title:
              typeof item.pictures[i] !== "undefined"
                ? item.pictures[i].title
                : "",
          };
          temps.push(temp);
        }

        setContent(temps);
      }
    }

    async function fetchRelate() {
      const item = await GetList({ collection: "posts", limit: 2 });
      if (item) {
        setRelate(item);
      }
    }

    fetchData();
    fetchRelate();
  }, [uid]);

  return (
    <div>
      <ShowPost post={post} content={content} />
      <div className="relateKienThuc">
        {relate.map((u) => {
          console.log(parentPath);
          return (
            <Show key={u.id} post={u}>
              <Link to={`${parentPath}/${u.id}`}>
                <Button variant="dark">Đọc thêm</Button>
              </Link>
            </Show>
          );
        })}
      </div>
    </div>
  );
}
