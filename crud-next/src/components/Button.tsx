interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    children: any
    className?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    const color = props.color ?? 'gray'

    return (
        <button onClick={props.onClick} className={` 
            px-4 py-2 rounded-md
            bg-gradient-to-r from-${color}-600 to-${color}-400 text-white
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}