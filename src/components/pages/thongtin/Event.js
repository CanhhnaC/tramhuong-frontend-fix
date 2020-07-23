import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { NavCategory } from "../../layout/category";

import { timeConverter, GetOne } from "../../data/GetData";

function Show({ event }) {
	return (
		<Row className="post-thong-tin">
			<Col lg={5}>
				<h1>{event.name}</h1>
				<Row
					style={{ margin: "20px 0" }}
					className=" col1 align-items-center"
				>
					<Col style={{ padding: 0 }} lg={4}>
						<Button className="button1 btnds">Thời gian</Button>
					</Col>
					<Col>
						<p>{timeConverter(event.time)}</p>
					</Col>
				</Row>
				<Row
					style={{ margin: "20px 0" }}
					className=" col1 align-items-center"
				>
					<Col style={{ padding: 0 }} lg={4}>
						<Button className="button1 btnds">Địa điểm</Button>
					</Col>
					<Col>
						<p>{event.location}</p>
					</Col>
				</Row>

			</Col>
		</Row>
	)
}

export default function Event() {
	var uid = useRouteMatch().params.eventID

	const [event, setEvent] = useState([])

	useEffect(() => {
		async function fetchData() {
			const item = await GetOne({ collection: "events", uid: uid })
			if (item) setEvent(item)
		}
		fetchData()
	}, [])

	return (
		<Show event={event} />
	)
}