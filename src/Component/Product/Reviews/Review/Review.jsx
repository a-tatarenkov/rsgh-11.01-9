import  "./Review.css";

const Review = ({review}) => {
    return (
        <div className='Review'>
            <h1>{review.author}</h1>
            <p className='review'>{review.review}</p>
            <h2>Created at: {review.date}</h2>
        </div>
    )
}

export default Review;