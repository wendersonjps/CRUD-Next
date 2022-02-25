interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    className?: string
    onChange?: (value: any) => void
}

export default function Input(props: InputProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className={`mb-3`}>
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'} 
                value={props.value}    
                readOnly={props.readOnly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    px-3 py-2
                    border border-blue-500 rounded-lg
                    focus: outline-none bg-gray-50
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}