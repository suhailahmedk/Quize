import React, { useState } from "react";
import useEffect from "react";
import { ListGroup, Card, Form, Button, Table } from "react-bootstrap";
import Result from "./Result"
let value = 0;
const Questions = ({ list }) => {
    const [question, setQuestion] = useState(list[0].question);
    const [qid, setId] = useState(list[0].id);
    const [option, setOptions] = useState(list[0].options[0]);
   
    const [flag, setFlag] = useState(0);
    let Mylist = list;



    const [name, setName] = useState("Next")
    const changQuestion = (e) => {


        if (name == "Finish") {
            setFlag(1);
        }
        if (value < list.length - 1) {
            value = value + 1;
            console.log(value);
            setId(list[value].id);
            setQuestion(list[value].question);
            setOptions(list[value].options[0]);

        }
        if (value == list.length - 1) {
            setName("Finish")
        }


    }
    const decreament = (e) => {

        if (value > 0) {
            value = value - 1;
            console.log(value)
            setName("Next");
            setCheck(0);
            setId(list[value].id);
            setQuestion(list[value].question);
            setOptions(list[value].options[0]);

        }





    }
    const checkCorrect = (e) => {
        if (Mylist[value].answer == e) {
            Mylist[value].score = "1";
        }
        else{
            Mylist[value].score = "0";
        }
    }
    if (flag == 0) {
        return (
            <div className="container">
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Header className="text-center">Quize</Card.Header>
                        <Card.Subtitle>{qid}. {question}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {
                                Object.entries(option).map((item) => (
                                    <ListGroup.Item>
                                        <div className="block-example border border-light">
                                            <Form.Check.Input type="radio" name={"quiz" + value} onChange={() => checkCorrect(item[1])} />
                                            <Form.Check.Label>{item[1]}</Form.Check.Label>
                                        </div>
                                    </ListGroup.Item>
                                ))
                            }

                        </ListGroup>
                        <div>
                            <Table>
                                <tr>
                                    <td><Button variant="primary" onClick={decreament}>Previous</Button></td>
                                    <td><Button variant="primary" onClick={changQuestion}>{name}</Button></td>
                                </tr>
                            </Table>
                        </div>
                    </Card.Body>
                    <Card.Footer>Total Questions: {qid}/{list.length}</Card.Footer>
                </Card>



            </div>

        )
    }
    else if (flag == 1) {
        return (
            <div>
                <Result Mylist={list} />
            </div >
        )
    }
    return (<div></div>)
}
export default Questions;