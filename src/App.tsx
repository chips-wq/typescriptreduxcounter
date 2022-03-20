import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { State } from "./state/reducers";
import {
    decreaseCounter,
    increaseCounter,
} from "./state/action-creators/couterActions";
function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state: State) => state.counter);
    const increase = () => {
        dispatch(increaseCounter());
    };
    const decrease = () => {
        dispatch(decreaseCounter());
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
                <Button onClick={decrease} size="large">
                    Decrease
                </Button>
                <Button onClick={increase} size="large" type="primary">
                    Increase
                </Button>
            </div>
        </div>
    );
}

export default App;
