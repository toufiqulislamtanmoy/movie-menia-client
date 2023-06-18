
const Pricing = () => {
    return (
        <div className="my-36 lg:h-[60vh]">
            <div className="bg-base-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Pricing Card 1 */}
                        <div className="border border-gray-300 rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-base-900 mb-4">Basic</h2>
                                <p className="text-base-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="text-2xl font-semibold mb-4">$19</div>
                                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Pricing Card 2 */}
                        <div className="border border-gray-300 rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-base-900 mb-4">Pro</h2>
                                <p className="text-base-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="text-2xl font-semibold mb-4">$39</div>
                                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Pricing Card 3 */}
                        <div className="border border-gray-300 rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-base-900 mb-4">Enterprise</h2>
                                <p className="text-base-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="text-2xl font-semibold mb-4">$99</div>
                                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            [Note: THis is under construction]
        </div>
    );
};

export default Pricing;