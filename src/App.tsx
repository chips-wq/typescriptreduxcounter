import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";
import { ActionTypes } from "./state/reducers/counterReducer";
import { State } from "./state/reducers";
function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state: State) => state.counter);
    const increaseCounter = () => {
        dispatch({ type: ActionTypes.INCREASE });
    };
    const decreaseCounter = () => {
        dispatch({ type: ActionTypes.DECREASE });
    };
    return (
        <div
            className="App"
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Title style={{ margin: 0 }}>Counter</Title>
            <Title style={{ margin: 0 }} level={2} copyable={true}>
                {counter}
            </Title>
            <div style={{ display: "flex", gap: "1rem" }}>
                <Button onClick={decreaseCounter} size="large">
                    Decrease
                </Button>
                <Button onClick={increaseCounter} size="large" type="primary">
                    Increase
                </Button>
            </div>
        </div>
    );
}

export default App;
