// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {


    const reviewElements = props.reviews.map(movie => {
       return <p className='review'>{movie.link.url}</p>
    })

    const foundReviews = props.reviews.map(movie => {
        return <p>{movie.link.url}</p>
    })

    return (
        <div className="review-list">
            {reviewElements}
        </div>
    )
}

