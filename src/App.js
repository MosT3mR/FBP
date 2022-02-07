import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./routes/AboutPage"
import {FeedbackProvider} from "./context/FeedbackContext"


// Tommorow check this link https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-links and try to finsh the router ✅

function App() {

    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </BrowserRouter>
        </FeedbackProvider>
    )
}

export default App