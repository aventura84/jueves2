import"../Styles/stories.css";
import HorizontalScroll from "react-scroll-horizontal";
import Story from"./Story";
function Stories(){

    return<div className="stories">
            <HorizontalScroll className="scroll"reverseScroll={true}>
                <Story/>
                <Story/><Story/>
                </HorizontalScroll>
                </div>;
    
}

export default Stories