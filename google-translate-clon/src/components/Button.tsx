import {Button} from 'react-bootstrap'
// interface Props{
//   onClick: (any)=>void
// }
export function BTN({onClick,Icon,...rest}) {
  return (
    <Button variant='link' onClick={onClick} {...rest}>
        <Icon/>
    </Button>
  )
}

