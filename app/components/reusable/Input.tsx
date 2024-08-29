type props = {
    label: string;
    value?: string;
    placeholder: string;
    setValue?:any;
    type: string
}

const InputField = ({label,value,placeholder,setValue,type}:props) => {
    return (
        <div className='border w-full rounded-[4px]'>
            <input type={type} value={value} className='p-3 w-full bg-transparent text-[14px] rounded-[4px] ' onChange={(e)=>setValue(e.target.value)} placeholder={placeholder} />
        </div>
    )
}

export default InputField