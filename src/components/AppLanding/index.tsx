import React, { useEffect } from 'react'
import UserCategories from './UserCategories'
import Survey from './Survey'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store'
import { fetchUserPreferenceSurveysAsyncThunk } from '../../store/asyncThunk/SurveyAsyncThunk'

const AppLanding = () => {

  const { preferenceCategories, fetchingUserPreferenceCategories, address } = useAppSelector((state: RootState) => state.user)
  const { fetchingApplicationSurveys, userPreferenceSurveys } = useAppSelector((state: RootState) => state.surveys)
  const dispatch = useAppDispatch()
  useEffect(() => {

    if(fetchingUserPreferenceCategories == "fulfilled" && fetchingApplicationSurveys == "") {
      dispatch(fetchUserPreferenceSurveysAsyncThunk({ walletAddress: address, categories: ["All"] }))
    }

  }, [fetchingUserPreferenceCategories, fetchingApplicationSurveys])

  const onCategorySelectionChangeHandler = (categories: string[]) => {
    console.log("onCategorySelectionChangeHandler: ", categories)
    dispatch(fetchUserPreferenceSurveysAsyncThunk({ walletAddress: address, categories: categories }))

  }
  return (
    <>
         <div className='landing-page-section'>
              {preferenceCategories.length > 0 && <UserCategories preferenceCategories={preferenceCategories} onCategorySelectionChange={onCategorySelectionChangeHandler}/> }
              {fetchingApplicationSurveys == "fulfilled" && <Survey surveys={userPreferenceSurveys}/>}
         </div>
    </>
  )
}

export default AppLanding
