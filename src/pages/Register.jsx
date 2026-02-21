const Register = () => {
    return (
        <div className="min-h-screen bg-[#f0f4f8] py-10 px-0 sm:px-5 flex justify-center items-start font-sans mt-20">
            <div className="bg-white rounded-lg shadow-sm w-full max-w-4xl overflow-hidden">
                <div className="bg-[#1a3c6e] p-6 text-center">
                    <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Join Our Internship Program!</h1>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScuNDQlBmN7DhMsJnRDAQQf91_sudwIEvTkqibLHq0ILkWkDA/viewform?embedded=true"
                        width="100%"
                        height="1200"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        className="w-full border-none min-h-[800px]"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Register;
