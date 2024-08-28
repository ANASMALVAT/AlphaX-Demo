import React,{useEffect} from "react";
import AlphaNavbar from "../../layouts/navbar/AlphaNavbar";
import ComponentMain from "./home-page-components/home/componentMain";
import ComponentCardGrid from "./home-page-components/home/componentCardGrid";
import LanguageComponent from "./home-page-components/language/languageComponent";
import QuestionComponent from "./home-page-components/questions/questionComponent";
import CodingEnviorment from "./home-page-components/coding-enviorment/codingEnviorment";
import AlphaGPT from "./home-page-components/alpha-gpt/alphaGPT";
import Reviews from "./home-page-components/reviews/reviews";
import DreamCompanies from "./home-page-components/dream-companies/dreamCompanies";
import AlphaFooter from "../../layouts/footer/AlphaFooter";

const AlphaHomePage = () => {

    return (
        <>
            <div className="h-full overflow-hidden w-full min-h-screen min-w-screen bg-algoblack border border-black">
                <AlphaNavbar/>
                <ComponentMain/>
                <ComponentCardGrid/>
                <DreamCompanies/>
                <CodingEnviorment/>
                <AlphaGPT/>
                <LanguageComponent/>
                <Reviews />
                <QuestionComponent/>
                <AlphaFooter/>
            </div>
        </>
    )
}
export default AlphaHomePage;