export default function (){
    return(
        <>
            <div className="max-w-3xl mx-auto bg-gray-800 text-white p-6 rounded shadow-lg mt-8"> 
                <div className="flex items-center mb-6">
                <img
                className="w-32 h-32 object-cover rounded-full mr-6"
                // src={expert.avatar}
                // alt={`${expert.name}'s avatar`}
                />
                <div>
                <h1 className="text-3xl font-bold">AbhiPoo</h1>
                <p className="text-gray-300">
                    {/* {expert.jobTitle || 'No job title provided'} */}SDE2
                </p>
                </div>
                
                {/* <MdMessage /> */} hi
                
                </div>
            <div className="space-y-4">
                <p>
                <strong>Email:</strong>test123@gamil.com
                </p>
                <p>
                <strong>Phone Number:</strong> {/* {expert.phoneNo} */} 8899009900
                </p>
                <p>
                <strong>Expertise:</strong> Full Stack
                </p>
                <p>
                <strong>Field:</strong> Domain
                </p>
                <p>
                <strong>Connected Students:</strong> Shuv
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <button >
                Pay Now
                </button>
            </div>
            </div>
        </>
    )
}