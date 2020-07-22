import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
	const history = useHistory()
    return (
        <>
            <h1>INFO</h1>
            <p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Architecto dolorem, nobis tempore laboriosam minima voluptatibus
							consequatur reprehenderit cum sunt eaque.
						</p>
            <button className="btn" onClick={() => history.push('/')}>
							К списку
						</button>
        </>
    )
}
