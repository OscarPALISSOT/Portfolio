type CarrouselBtnProps = {
    direction: "left" | "right";
    onClick: () => void;
}

const CarrouselBtn = ({ direction, onClick }: CarrouselBtnProps) => {
    return (
        <>
            <div
                className={'bg-primary hover:bg-primaryHover absolute w-10 h-10 top-1/2 rounded-full flex flex-row justify-center items-center text-fontColor cursor-pointer hover:shadow-lg transition duration-300 -translate-y-1/2'+ (direction === "left" ? " left-0 -translate-x-1/2" : " right-0 translate-x-1/2")}
                onClick={onClick}
            >
                <svg className={'w-6 h-6 text-fontColor'} viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    {direction === "left" ? (
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    ) : (
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    )}
                </svg>
            </div>
        </>
    );
}

export default CarrouselBtn;