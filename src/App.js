import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/feedbackData"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"

// Tommorow check this link https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-links and try to finsh the router

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        setFeedback(prevFeedback => [{...newFeedback, id: prevFeedback.length + 1}, ...prevFeedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure about that')) {
            setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
                <AboutPage />
            </div>
        </>
    )
}

export default App