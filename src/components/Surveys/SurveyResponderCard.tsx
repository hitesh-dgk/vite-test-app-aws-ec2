import Carousel from "react-bootstrap/Carousel";
import "./SurveyResponderCard.scss";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
const SurveyResponderCard = (props: any) => {
  const [index, setIndex] = useState(0);
  const [indicatorLabels, setIndicatorLabels] = useState([]);
  const [text, setText] = useState("");
  const [surveyOptions, setSurveyOptions] = useState([]);

  useEffect(() => {
    console.log("index: ", index);
    let labelsArray: any[] = [];
    props.surveyDetail[0].surveyQuestions.map(
      (question: any, index: number) => {
        labelsArray.push("slide " + (index + 1));
      }
    );
    if (index > -1) {
      labelsArray.map((label: string, labelIndex: number) => {
        console.log("labelIndex <= index): ", labelIndex <= index);
        if (labelIndex < index) {
          label += " completed";
        }
        labelsArray[labelIndex] = label;
      });
      console.log("labelsArray: ", labelsArray);
    }
    setIndicatorLabels(labelsArray);
  }, [index]);

  const onPreClicked = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const onAnswerSubmitHandler = () => {
    console.log("inside onAnswerSubmitHandler");
    console.log("index: ", index);
    console.log(
      "props.surveyDetail[0].surveyQuestions.length: ",
      props.surveyDetail[0].surveyQuestions.length
    );
    console.log(
      "index < props.surveyDetail[0].surveyQuestions.length: ",
      index < props.surveyDetail[0].surveyQuestions.length
    );
    if (index < props.surveyDetail[0].surveyQuestions.length - 1)
      setIndex(index + 1);
  };

  //wip
  const onTitleChangeHandler = (value: string) => {
    setText(value);
    props.onTitleChangeHandler(value);
  };

  //wip - refactor below function
  const onOptionChangeHandler = (e: any) => {
    let currentSelectedOption: any = [...surveyOptions];
    let selectedOption: any = JSON.parse(e.target.value);
    let optionExists = currentSelectedOption.find((category: any) => {
      if (category.category_id === selectedOption.category_id) {
        return category;
      }
    });
    if (!optionExists) {
      setSurveyOptions([...currentSelectedOption, selectedOption]);
      props.onSurveyCategoryChangeHandler([
        ...currentSelectedOption,
        selectedOption,
      ]);
    }
  };

  return (
    <>
      <div className="main-carousel-container">
        <Carousel
          className="main-carousel"
          activeIndex={index}
          controls={false}
          indicatorLabels={indicatorLabels}
        >
          {props.surveyDetail[0].surveyQuestions.map((question: any) => {
            return (
              <Carousel.Item>
                <Carousel.Caption>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>{question.questionText}</Form.Label>

                    {/* for text */}
                    {question.answerType === "text" ? (
                      <Form.Control
                        value={text}
                        onChange={(e: any) =>
                          onTitleChangeHandler(e.target.value)
                        }
                        type="text"
                        placeholder="Text"
                      />
                    ) : (
                      ""
                    )}

                    {/* for checkbox */}
                    {question.answerType === "checkbox"
                      ? question.options.map((optionData: any) => (
                          <Form.Check
                            type={"checkbox"}
                            id={optionData.value}
                            label={optionData.value}
                          />
                        ))
                      : ""}

                    {/* for dropdown */}
                    {question.answerType === "dropdown" ? (
                      <Form.Select
                        aria-label="Default select example"
                        onChange={onOptionChangeHandler}
                      >
                        {question.options.map((option: any) => {
                          return (
                            <option
                              key={option.id}
                              value={JSON.stringify(option.value)}
                            >
                              {option.label}
                            </option>
                          );
                        })}
                      </Form.Select>
                    ) : (
                      ""
                    )}

                    {/* for range */}
                    {question.answerType === "range" ? <Form.Range /> : ""}
                  </Form.Group>
                  <Button onClick={() => onAnswerSubmitHandler()}>
                    Next
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="carousel-controller-block">
          <Button disabled={!index} onClick={() => onPreClicked(index - 1)}>
            Prev
          </Button>
          <Button disabled onClick={() => handleSelect(index + 1)}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default SurveyResponderCard;
