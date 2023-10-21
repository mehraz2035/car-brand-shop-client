


const Faq = () => {
    return (
        <div className="bg-[#f6f6f6]  py-32">
            <div className="box w-[800px] mx-auto bg-white rounded-lg shadow-md flex justify-start">
                <div className="heading bg-[#2f3242] x p-4 text-white text-center">
                    FAQs
                </div>
                <div className="faqs p-4">
                    <details className="bg-[#f6f6f6] rounded p-2 my-4 cursor-pointer w-[700px]">
                        <summary className="outline-none"> Typically have four doors and a separate trunk for luggage?</summary>
                        <p className="text-sm"> Typically have four doors and a separate trunk for luggage.</p>
                    </details>
                    <details className="bg-[#f6f6f6] rounded p-2 my-4 cursor-pointer">
                        <summary className="outline-none"> Typically have four doors and a separate trunk for luggage?</summary>
                        <p className="text-sm"> Typically have four doors and a separate trunk for luggage.</p>
                    </details>
                    <details className="bg-[#f6f6f6] rounded p-2 my-4 cursor-pointer">
                        <summary className="outline-none"> Typically have four doors and a separate trunk for luggage?</summary>
                        <p className="text-sm"> Typically have four doors and a separate trunk for luggage.</p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Faq;
