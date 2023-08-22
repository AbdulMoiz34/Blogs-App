import HeadElem from "next/head"
const Head = ({ text }) => {
    return (
        <HeadElem>
            <title>{text}</title>
            <meta name="keywords" content="blog, topics, keywords" />
            <meta name="author" content="Abdul Moiz" />
        </HeadElem>
    )
};

export default Head;