type Params = {
    params: {
        id: string
    }
}


export default function DynamicPage({ params: { id } }: Params) {
    return (
        <div>
            <h1 className="text-center text-2xl mt-8">FAQ Page {id}</h1>
            <p className="px-16 mt-7 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio unde voluptate, eveniet ipsa esse quaerat inventore odit quis error totam nostrum rerum optio doloremque corrupti adipisci, tenetur veniam, eos aliquid?
                Perferendis veritatis vitae nostrum eveniet aperiam dolor illum minus quis facilis ea! Blanditiis eos itaque, ut laborum provident, sequi voluptatem distinctio delectus animi vitae inventore saepe, voluptate id aut? Deserunt?
                Perferendis veritatis vitae nostrum eveniet aperiam dolor illum minus quis facilis ea! Blanditiis eos itaque, ut laborum provident, sequi voluptatem distinctio delectus animi vitae inventore saepe, voluptate id aut? Deserunt? Perferendis veritatis vitae nostrum eveniet aperiam dolor illum minus quis facilis ea! Blanditiis eos itaque, ut laborum provident, sequi voluptatem distinctio delectus animi vitae inventore saepe, voluptate id aut? Deserunt?
            </p>
        </div>
    )
}


