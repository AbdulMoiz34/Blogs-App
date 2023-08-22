const Button = ({ text }) => {
    return (
        <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
            {text}
        </button>
    )
}

export default Button;