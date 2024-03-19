import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from 'react-bootstrap'
import "./index.scss"
import AppLanding from '../../components/AppLanding'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store'
import { fetchUserPreferenceCategoriesAsyncThunk } from '../../store/asyncThunk/UserAsyncThunk'

const Landing = () => {

    const { address, fetchingUserPreferenceCategories } = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(fetchingUserPreferenceCategories == "") {
            dispatch(fetchUserPreferenceCategoriesAsyncThunk(address))
        }
    }, [fetchingUserPreferenceCategories])

    return (
        <>
            <AppLanding/>
        </>
    )

}


export default Landing