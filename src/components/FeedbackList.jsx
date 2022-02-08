import { useContext } from "react";
import Feedbackitem from "./Feedbackitem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feed back yet</p>
    }

  return isLoading ? <Spinner /> : (
      <div className="feedback-list">
          {feedback.map((item) => (
              <Feedbackitem key={item.id} item={item}/>
          ))}
      </div>
  )
}


export default FeedbackList;
