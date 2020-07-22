import React from "react";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import NavCategory from "../../layout/NavCategory/NavCategory";

export default function CategoryDCTT(props) {
  return (
    <div>
      {props.data.map((item, key) => (
        <div key={key} className="text-center category-bst">
          <NavCategory titleNav={item.name} />
          <p style={{ padding: "20px 20%" }}>{item.des}</p>
          <Image
            src={item.img}
            title={item.name}
            fluid
            style={{ maxHeight: "300px" }}
          />
          <br></br>
          <Link to={item.link}>
            <Button className="upper" variant="dark">
              Tìm hiểu
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
