import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { NavCategory } from "../../layout/category";
import { GetList, timeConverter } from "../../data/GetData";

// Image:
import "./index.scss";

function isOdd(num) {
  return num % 2 ? "first" : "last";
}

function Show({ event, check }) {
  let match = useRouteMatch();
  var val = isOdd(check);
  console.log(val);
  return (
    <div className="sukien-item">
      <Row key={event.createdate}>
        <Col className="sukien-item__1" lg={(5, { order: val })}>
          <h2 className="upper ici">{event.name}</h2>
          <p>{event.description[0].content || ""}</p>
          <Row>
            <Col lg={2}>
              <Button className="button1 btnds">Thời gian</Button>
            </Col>
            <Col>
              <p>{timeConverter(event.time)}</p>
            </Col>
          </Row>

          <Row>
            <Col lg={2}>
              <Button className="button1 btnds">Địa điểm</Button>
            </Col>
            <Col>
              <p>{event.location}</p>
            </Col>
          </Row>

          <a href={`/`}>
            <Button className="upper" variant="dark" style={{ width: "100%" }}>
              Chia sẻ
            </Button>
          </a>
        </Col>

        <Col className="sukien-item__2">
          <Link to={`${match.url}/${event.id}`}>
            <div>
              <Button>Đọc ngay</Button>
              <Image
                src={event.pictures[0].src || ""}
                alt={event.pictures[0].title || ""}
                fluid
              />
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default function ThongTin() {
  const [limit, setLimit] = useState(5);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const item = await GetList({ collection: "events", limit: limit });
      if (item) {
        setEventList(item);
        console.log(item);
      }
    }
    fetchData();
  }, [limit]);
  return (
    <div className="su-kien">
      <NavCategory titleNav={"Thông tin sự kiện"} />
      <div>
        {eventList.map((u, i) => {
          return <Show key={u.id} event={u} check={i} />;
        })}
      </div>
      <div className="sukien-seemore">
        <NavCategory>
          <Button onClick={() => setLimit(limit + 5)}>Xem Thêm</Button>
        </NavCategory>
      </div>
    </div>
  );
}
