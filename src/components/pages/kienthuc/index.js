import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { NavCategory } from "../../layout/category";

import { GetList, timeConverter } from "../../data/GetData";

import "./index.scss";

function Show({ post }) {
  let match = useRouteMatch();
  return (
    <div className="kienthuc-item">
      <Row key={post.createdate}>
        <Col>
          <Image
            height={200}
            src={post.pictures[0].src || ""}
            alt={post.pictures[0].title || ""}
            fluid
          />
        </Col>
        <Col>
          <h1 className="ici upper">{post.name}</h1>
          <h5>{timeConverter(post.date.seconds)}</h5>
          <p>{post.description[0].content}</p>
          <Link to={`${match.url}/${post.id}`}>
            <Button variant="dark">Đọc thêm</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default function KienThuc() {
  const [limit, setLimit] = useState(5);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const item = await GetList({ collection: "posts", limit: limit });
      if (item) {
        setPostList(item);
      }
    }
    fetchData();
  }, [limit]);

  return (
    <div className="kien-thuc">
      <NavCategory titleNav={"Kiến thức"} />
      <div>
        {postList.map((u) => {
          return <Show key={u.id} post={u} />;
        })}
      </div>
      <div className="kienthuc-seemore">
        <NavCategory>
          <Button onClick={() => setLimit(limit + 5)}>Xem Thêm</Button>
        </NavCategory>
      </div>
    </div>
  );
}
