const Digits = ({digitType, digitValue}) => {
    return (
        <div>
            <div className="flex justify-center items-center rounded-lg bg-gray-800 h-14 w-14 mx-2 select-none">
                <p className="font-sans font-black text-xl text-white">{digitValue}</p>
            </div>
            <p class="text-white text-center">{digitType}</p>
        </div>
    )
}

export default Digits