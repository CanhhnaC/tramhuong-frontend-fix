import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";

import { timeConverter, GetOne, GetList } from "../../data/GetData";

function RelatedEvent() {
  const links = useRouteMatch().url;
  var parentPath = links.substring(0, links.lastIndexOf("/"));
  var [event, setEvent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const item = await GetList({ collection: "events", limit: 3 });
      if (item) {
        var random = Math.floor(Math.random() * 3);
        setEvent(item[random]);
      }
    }
    fetchData();
  }, []);

  return (
    <Row className="RelatedEvent">
      <Col lg={6}>
        <Button>Chia sẻ</Button>
      </Col>
      <Col lg={6} className="RelatedEvent-link">
        <Link to={`${parentPath}/${event.id}`}>
          <p>Bài viết tiếp theo</p>
          <h2 className="upper ici">{event.name}</h2>
        </Link>
      </Col>
    </Row>
  );
}

function Show({ event }) {
  return (
    <Row className="postThongTin">
      <Col lg={5} className="postThongTin-col1">
        <h1 className="ici upper">{event.name}</h1>
        <Row>
          <Col style={{ padding: 0 }} lg={2}>
            <Button className="button1 btnds">Thời gian</Button>
          </Col>
          <Col lg={10}>
            <p>{timeConverter(event.time)}</p>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: 0 }} lg={2}>
            <Button className="button1 btnds">Địa điểm</Button>
          </Col>
          <Col lg={10}>
            <p>{event.location}</p>
          </Col>
        </Row>

        <div className="postThongTin-col1__des">
          {(event.description || []).map((item, key) => (
            <p key={key}>{item.content}</p>
          ))}
        </div>
      </Col>
      <Col lg={7}>
        {(event.pictures || []).map((item, key) => (
          <Image key={key} src={item.src} alt={item.title} fluid />
        ))}
      </Col>
    </Row>
  );
}

export default function Event() {
  var uid = useRouteMatch().params.eventID;

  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const item = await GetOne({ collection: "events", uid: uid });
      if (item) setEvent(item);
    }
    fetchData();
  }, [uid]);

  return (
    <div>
      <Show event={event} />
      <RelatedEvent />
    </div>
  );
}
