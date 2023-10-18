import About_header from "../components/about_header"
import About_Sec_one from "../components/aboutSecOne"
import KitchenSinkExample from "../components/about_card"
import AboutContent from "../components/choose_us"
import FeedbackSlider from "../components/feedback_slider"
export default function About()
{
    return(
        <>
        <About_header></About_header>
        <About_Sec_one></About_Sec_one>
        <KitchenSinkExample></KitchenSinkExample>
        <AboutContent></AboutContent>
        <FeedbackSlider></FeedbackSlider>
        </>
    )
}