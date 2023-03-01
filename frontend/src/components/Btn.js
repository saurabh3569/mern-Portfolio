import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({ link, name, variant, cn }) => {
    return (
        <div>
            <a className='text-center' href={link} target="_blank">
                <Button className={`mt-3 ${cn}`} variant={variant}>
                    {name}
                </Button>
            </a>
        </div>
    )
}

export default Btn
