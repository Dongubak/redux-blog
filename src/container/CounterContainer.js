import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increse } from "../modules/counter";

function CounterContainer() {
    const number = useSelector( state => state.counter.number );
    const dispatch = useDispatch();

    return(
        <Counter number={number} onIncrease={() => dispatch(increse())} onDecrease={() => dispatch(decrease())}></Counter>
    )
}

export default CounterContainer;