import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Landing from '../../modules/Landing'
import CreateSurvey from '../../modules/Surveys/CreateSurvey'
import SurveyResponse from '../../modules/Surveys/SurveyResponse'

import AdminLayout from "../../modules/Admin/Layout"
import AppLayout from "../../modules/AppLayout"
import Category from "../../modules/Admin/Category"
import PrimarySurvey from "../../modules/Admin/PrimarySurvey"
import AdminLanding from "../../modules/Admin/Landing"
import '../../index.scss'
import '../../App.scss'


const MainApplicationHOC = () => {

    return <>
        <Routes>
            <Route path="admin" element={<AdminLayout />}>
                <Route path="categories" element={<Category />} />
                <Route path="primary-surveys" element={<PrimarySurvey />} />
                <Route path="" element={<AdminLanding />} />
            </Route>
            <Route path="/" element={<AppLayout />} >
                <Route path="/create-survey" element={<CreateSurvey />} />
                <Route path="/survey-response/:survey_id" element={<SurveyResponse />} />
                <Route path="" element={<Landing />} />
            </Route>
        </Routes>
    </>
}

export default MainApplicationHOC;