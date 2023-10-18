import Carsoul from "../components/carsoul"
import CardExample from "../components/CardExample"
import Content from "../components/homeContent"
import Header from "../components/header"
import HomeSecContent from "../components/homeSecContent"
export default function Home()
{
    return(
        <>
        <Header></Header>
        <CardExample></CardExample>
        <Content></Content>
        <Carsoul></Carsoul>
        <HomeSecContent></HomeSecContent>
        </>
      
    )
}