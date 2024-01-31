import "./index.css";

export default function Burger({ isOpen }) {
    return (
        <>
            <div className="hamburger">
                {
                    isOpen ? <div className="burger burger1"></div> : <div className="burger"> </div>
                }
                {
                    isOpen ? <div className="burger burger2"> </div> : <div className="burger"> </div>
                }
                {
                    isOpen ? <div className="burger burger3"></div> : <div className="burger"> </div>
                }
            </div>
        </>
    );

}