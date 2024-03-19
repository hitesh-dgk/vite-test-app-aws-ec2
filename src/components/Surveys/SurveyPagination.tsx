import React from 'react'
import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import './SurveyPagination.scss'
const SurveyPagination = () => {
  return (
    <>
       <Container style={{padding:"2% "}}>
          <Pagination className='category'>
          <Pagination.Prev className='rightleft' />
          
          <Pagination.Item >{1}</Pagination.Item>
          <Pagination.Item >{2}</Pagination.Item>
          <Pagination.Item >{3}</Pagination.Item>
          <Pagination.Item >{4}</Pagination.Item>
          <Pagination.Item >{5}</Pagination.Item>
          
          <Pagination.Ellipsis  />
          <Pagination.Item>{32}</Pagination.Item>
          <Pagination.Next className='rightleft'/>
          
        </Pagination>
    </Container>

    </>
  )
}

export default SurveyPagination
