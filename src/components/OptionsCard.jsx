import React from "react"
import { Card, NavLink, Tooltip, OverlayTrigger } from "react-bootstrap"

function OptionsCard({ option }) {
  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      {option.tooltip}
    </Tooltip>
  )
  return (
    <Card className='my-1 p-2 rounded card'>
      <NavLink href={`/option/${option._id}`}>
        <OverlayTrigger
          placement='right'
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Card.Img src={option.image} variant='top'></Card.Img>
        </OverlayTrigger>
      </NavLink>
      <NavLink href={`/option/${option._id}`} className='link'>
        {option.name}
      </NavLink>
    </Card>
  )
}

export default OptionsCard
