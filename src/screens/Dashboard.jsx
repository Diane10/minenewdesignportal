import React from "react"
import { Row, Col } from "react-bootstrap"
import OptionsCard from "../components/OptionsCard"
import { options } from "../options"

function Dashboard() {
  return (
    <>
      <Row>
        {options.map((option) => (
          <Col key={option._id} sm={12} md={8} lg={4} xl={3}>
            <OptionsCard option={option} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Dashboard
