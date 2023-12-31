import { title, subtitle } from "@/components/primitives";

export const Hero = () => {
    return (
    <>
        {/* Hero */}
        <div className="max-w-[85rem] sm:max-w-full mx-auto lg:px-8">
            {/* Grid */}
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center auto-cols-fr">
            <div className="lg:col-span-3">
                <h1 className="block text-6xl font-bold text-gray-800 sm:text-3xl md:text-5xl lg:text-6xl dark:text-white">
                Introducing <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-600"> Serenity </span>
                </h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                A new way to find your inner peace through journaling and reflection.
                </p>
                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full sm:w-auto">
                    <label htmlFor="hero-input" className="sr-only">    
                    Search
                    </label>
                    <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="SIGN YOUR SOUL"
                    />
                </div>
                <a
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    href="#"
                >
                    Get Started
                </a>
                </div>
            </div>
            {/* End Col */}
            <div className="lg:col-span-4 mt-10 lg:mt-0">
                <img
                className="w-full rounded-xl"
                src="https://images.unsplash.com/photo-1475137979732-b349acb6b7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
                alt="Image Description"
                
                />
            </div>
            {/* End Col */}
            </div>
            {/* End Grid */}
        </div>
        {/* End Hero */}
        </>
    )
}