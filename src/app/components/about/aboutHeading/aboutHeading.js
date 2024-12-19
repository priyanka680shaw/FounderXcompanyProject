import aboutHeadingStyle from "./aboutHeadStyle.module.css";

export default function AboutHeading({ heading, fontSize, bullet }) {
    return (
        <div
            className={aboutHeadingStyle.container}
            style={{ fontSize: fontSize || "32px" }}
        >
            <h1 className={aboutHeadingStyle.h1}>{heading}</h1>
            {/* Render bullet only if bullet prop is true */}
            {!bullet && <div className={aboutHeadingStyle.bullet}></div>}
            <div className={aboutHeadingStyle.hrContainer}>
                <hr className={aboutHeadingStyle.hr} />
                <hr className={aboutHeadingStyle.hr} />
            </div>
        </div>
    );
}
