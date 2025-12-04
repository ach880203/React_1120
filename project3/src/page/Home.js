import Editor from "../component/Editor.js";

const Home = () => {
    return (
    <div>
        <Editor onSubmit=
            {(state) => alert(state.content)} />
    </div>
    );
};

export default Home;
