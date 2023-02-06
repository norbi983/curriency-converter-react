import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Clock from "./Clock";
import "./style.css";



function App() {
    return (
        <Container>
            <Header />
            <Clock />
            <Form />
            <Footer />
        </Container >
    );
};

export default App;
