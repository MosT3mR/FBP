import Feedbackitem from "./Feedbackitem";

function FeedbackList({feedback}) {

    if(!feedback || feedback.length === 0) {
        return <p>No feed back yet</p>
    }

  return (
      <div className="feedback-list">
          {feedback.map((item) => (
              <Feedbackitem key={item.id} item={item} />
          ))}
      </div>
  )
}

export default FeedbackList;
