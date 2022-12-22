import { useSelector, useDispatch } from "react-redux";

function App() {
    const { ...test } = useSelector((state) => state.app);
    console.log(test);

    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
