import { timelineElements } from "../../data";

import { ReactComponent as wedIcon } from "../../icons/wed.svg";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css"

const Timeline = () => {
    let wedIconSyles = { background: "#06D6A0" };
    let birthIconStyles = { background: "#f9c74f" };
    return (
        <div className="">
            <h1 className="title">Timeline Component</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWedIcon = element.icon === "wed";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWedIcon ? wedIconSyles : birthIconStyles}
                            icon={isWedIcon ? <wedIcon /> : <birthIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                            {showButton && (
                                <a
                                    className={`button ${isWedIcon ? "wedButton" : "birthButton"
                                        }`}
                                    href="#"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;