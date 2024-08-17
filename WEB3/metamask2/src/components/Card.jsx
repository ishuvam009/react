export default function Card(){
    return(
        <>
            <div className="pt-10">
                        <div className="mx-auto max-w-sm rounded-sm shadow-xl bg-white">
                            <p className="font-bold text-2xl text-center">Login</p>
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Username</label>
                                    <input className="shadow-xl appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Username</label>
                                    <input className="shadow-xl appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**************" />
                                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                </div>
                            </form>   
                        </div>
            </div>
        </>
    )
}