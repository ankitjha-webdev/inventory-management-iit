import { Nav } from "./Nav";
import { Footer } from "./Footer";
const Base = ({ title = " Welcome to the Inventroy Management ", children }) => {
    return (
        <div className="base flex flex-col h-screen justify-between ">
            <Nav />

            {children}

            <Footer />
        </div>
    );
}
export default Base;