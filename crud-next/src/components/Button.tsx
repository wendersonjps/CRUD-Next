interface ButtonProps {
    children: any
    color?: 'green' | 'blue' | 'gray'
    className?: string
}

export default function Button(props: ButtonProps){
    const color = props.color ?? 'gray'

    return (
        <button className={` 
            px-4 py-2 rounded-md
            bg-gradient-to-r from-${color}-600 to-${color}-400 text-white
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}