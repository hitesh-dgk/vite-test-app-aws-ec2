import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FunnelFill } from 'react-bootstrap-icons';
import './Usercategories.scss';
import { RootState } from '../../store';

const UserCategories = (props: any) => {
  const [selectedCategories, setSelectedCategories]  = useState(["All"])
  const onCategorySelection = (category_id:string) => {
    if (category_id !== "All" && category_id !== "Others") {
      const findResult = selectedCategories.findIndex((id: string) => id === category_id);
      const findAllResult = selectedCategories.findIndex((id: string) => id === "All");
      const findOthersResult = selectedCategories.findIndex((id: string) => id === "Others");
      if(findResult == -1) {
        let categories = [...selectedCategories]
        if(findAllResult != -1)
          categories.splice(findAllResult, 1)
        if(findOthersResult != -1)
          categories.splice(findOthersResult, 1)

        setSelectedCategories([...categories, category_id])
        props.onCategorySelectionChange([...categories, category_id])

      } else {
        let categories = [...selectedCategories]
        if(findAllResult != -1)
          categories.splice(findAllResult, 1)
        if(findOthersResult != -1)
          categories.splice(findOthersResult, 1)
        categories.splice(findResult, 1)
        if(categories.length == 0) {
          categories.push("All")
        }
        setSelectedCategories(categories)
        props.onCategorySelectionChange(categories)

      }
    } else {
      const findResult = selectedCategories.findIndex((id: string) => id === "All");
      const findOthersResult = selectedCategories.findIndex((id: string) => id === "Others");
      if(category_id === "All") {
        if(findResult == -1) {
          setSelectedCategories([category_id])
          props.onCategorySelectionChange([category_id])


        }
      }
      if(category_id === "Others") {
        if(findOthersResult == -1) {
          setSelectedCategories([category_id])
          props.onCategorySelectionChange([category_id])

        }
      }

    }
  }

  const onClearCategory = () => {
    onCategorySelection("All")
  }

  const categoriesButtonView = useCallback(() => {

    let findAllIndex = selectedCategories.findIndex((id: string) => id === "All");
    let findOtherIndex = selectedCategories.findIndex((id: string) => id === "Others");

    return <div className='categorynav'>
      <Button onClick={() => onCategorySelection("All")} key={"All"} className={findAllIndex == -1 ? "category-selector": "category-selector active"} variant="outline-secondary">{"All"}</Button>
      {
        props.preferenceCategories.map((category: any, index: number) => {
          let findCategoryIndex = selectedCategories.findIndex((id: string) => id === category.category_id);
          return <Button onClick={() => onCategorySelection(category.category_id)} key={index} className={findCategoryIndex == -1 ? "category-selector": "category-selector active"} variant="outline-secondary">{category.name}</Button>
        })
      }
      <Button onClick={() => onCategorySelection("Others")} key={"Others"} className={findOtherIndex == -1 ? "category-selector": "category-selector active"} variant="outline-secondary">{"Others"}</Button>

    </div>
  }, [selectedCategories])
  return (
    <div>
      <Container className='ctgmaincontain' fluid>
        <div className='category'>
            <h1 style={{ fontSize: "20px" }}>Browse by Categories</h1>
            <Button className='filter-button' onClick={onClearCategory}>
              <FunnelFill className='me-2' /><span>Clear Categories</span>
            </Button>
        </div>
        <Container>
          {categoriesButtonView()}
        </Container>
      </Container>
    </div>
  )
}

export default UserCategories
