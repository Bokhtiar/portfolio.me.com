interface IButton {
    name: string
}

export const PrimaryButton: React.FC<IButton> = (props:IButton):JSX.Element => {
    return(
        <button className="bg-secondary p-1 px-6 rounded-full">{props.name}</button>
    )
}