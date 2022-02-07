import {createContext, useState} from "react"
import FeedbackData from "../data/feedbackData"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
 const [feedback, setFeedback] = useState(FeedbackData)
 const [feedbackEdit, setFeedbackEdit] = useState({
  item: {},
  edit: false
 })
 
 const addFeedback = (newFeedback) => {
  setFeedback(prevFeedback => [{...newFeedback, id: prevFeedback.length + 1}, ...prevFeedback])
 }


 const deleteFeedback = (id) => {
  if(window.confirm('Are you sure about that')) {
      setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id))
  }
}

const updateFeedback = (id, updItem) => {
 setFeedback(prevFeedback => prevFeedback.map(item => {
  if(item.id === id) {
   return {...item, ...updItem}
  } else {
   return item
  }
 }))
}


const editFeedback = (item) => {
 setFeedbackEdit({item, edit: true})
}


 return (
  <FeedbackContext.Provider value={{
   feedback,
   deleteFeedback,
   addFeedback,
   editFeedback,
   feedbackEdit,
   updateFeedback
  }}>
   {children}
  </FeedbackContext.Provider>
 )
}
export default FeedbackContext