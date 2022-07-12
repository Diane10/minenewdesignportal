import React, { Component } from "react"
import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { options } from "../options"
import Chart from "../components/chart/Chart"

class OptionDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: null,
      optionId: null,
    }
    this.getOptionId = this.getOptionId.bind(this)
  }
  getOptionId = async (id) => {
    console.log(id)
    this.setState({ optionId: id })
  }

  render() {
    const pathname = window.location.pathname
    const optionid = pathname.slice(-1)
    return (
      <>
        <Link className='btn btn-outline-primary my-1' to='/dashboard'>
          Go back
        </Link>
        <Row>
          {options
            .filter((op) => op._id === optionid)
            .map((option) => (
              <Col key={option._id}>
                <Row>
                  <Col md={4}>
                    <ListGroup>
                      {option.categories.map((option) => {
                        return (
                          <ListGroupItem
                            onClick={() => this.getOptionId(option._id)}
                          >
                            {option.name}
                          </ListGroupItem>
                        )
                      })}
                    </ListGroup>
                  </Col>
                  <Col md={8}>
                    <div>
                      {this.state.optionId !== null ? (
                        <div>
                          {option.categories
                            .filter((opId) => opId._id === this.state.optionId)
                            .map((num) => {
                              return (
                                <div>
                                  {num.numbers ? (
                                    <Chart
                                      data={num.data}
                                      title={num.name}
                                      datakey='Active User'
                                      className='chart'
                                    />
                                  ) : (
                                    <div>empty</div>
                                  )}
                                </div>
                              )
                            })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default OptionDetails
