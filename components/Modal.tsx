type ChildrenProps = {
    children: React.ReactNode,
    isModalOpen: boolean,
    setIsModalOpen: (active: boolean) => void;
}
const Modal = ({ children, isModalOpen, setIsModalOpen }: ChildrenProps) => {
    return (
        <>
            {
                isModalOpen && (<div className="bg-black/50 fixed inset-0">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className="flex flex-col justify-center items-center bg-slate-300 w-1/2 p-5">
                            <button onClick={() => setIsModalOpen(false)} className="text-4xl text-white bg-red-500 mg-3 self-end mb-1 px-1">&times;</button>
                            {children}
                        </div>
                    </div>
                </div>)

            }

        </>)

}

export default Modal