import {useState} from "react";
import Review from "./Review/Review";

const Reviews = () => {
    let [reviews, setReviews] = useState([
        {
            id: 1,
            author: 'Oleksii',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias assumenda dolor esse est excepturi ipsam nihil, nisi numquam officiis quaerat quas repellendus repudiandae soluta tempora temporibus tenetur vel veritatis.",
        },
        {
            id: 2,
            author: 'Anatoliy',
            review: "Lorem ipsum dolor sit amee soluta tempora temporibus tenetur vel veritatis.",
        },
        {
            id: 3,
            author: 'Yevhen',
            review: "Lorem ipsum dolor sit amet, consectetur um dolor sit amee solu adipisicing elit. Accusantium alias assumenda dolor esse est excepturi ipsam nihil, nisi numquam officiis quaerat quas repellendus repudiandae soluta tempora temporibus tenetur vel veritatis."
        },
    ]);
    let [currentReview, setCurrentReview] = useState('');
    let [currentName, setCurrentName] = useState('');

    const onChangeHandler = (e) => {
        setCurrentReview(e.target.value);
    }

    const addReviewHandler = () => {
        if (currentReview.length < 1) {
            alert('non null');
            return;
        }

        const review = {
            id: 4,
            author: currentName,
            review: currentReview,
            date: new Date().toLocaleString(),
        }

        setReviews([review, ...reviews]);
        setCurrentName('');
        setCurrentReview('');
    }

    const setNameHandler = (e) => {
        setCurrentName(e.target.value);
    }

    return (
        <div className='Reviews'>
            <div className='container'>
                <h2>Reviews:</h2>
                <div>
                    <input type="text" onChange={(e) => setNameHandler(e)} value={currentName}/>
                    <textarea value={currentReview} name="" id="" cols="30" rows="10" onChange={(e) => onChangeHandler(e)}></textarea>
                    <button onClick={() => addReviewHandler()}>Add review</button>
                </div>
            </div>
            {
                reviews.map(review => <Review review={review}/>)
            }
        </div>
    )
}

export default Reviews;