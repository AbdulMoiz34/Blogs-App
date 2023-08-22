const { useRef, useEffect } = require("react");

const Alert = ({ text }) => {
    const alertRef = useRef();
    useEffect(() => {
        const hide = () => {
            const myAlert = alertRef.current;
            myAlert.classList.add("hidden");
        };
        const timeout = setTimeout(hide, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <div ref={alertRef} className="text-white text-sm font-serif absolute bottom-3 left-3 px-4 bg-purple-600 py-1 rounded-md">
                {text}
            </div>
        </>

    );
}
export default Alert;