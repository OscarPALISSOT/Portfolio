type CarrouselPaginationProps = {
    currentItem: number;
    totalItems: number;
}

const CarrouselPagination = ({currentItem, totalItems}: CarrouselPaginationProps) => {
    return (
        <div className={'w-full flex items-start justify-center mt-2'}>
            {[...Array(totalItems)].map((_, index) => (
                <div key={index} className={`h-3 rounded-full mx-1 bg-primary duration-300 ease-in-out ${currentItem === index ? 'w-6' : 'w-3'}`}/>
            ))}
        </div>
    )
}

export default CarrouselPagination;