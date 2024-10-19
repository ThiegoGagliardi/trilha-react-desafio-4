export interface IButtonProps {
    title: string;
    classType: string;
    isEnabled : boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;    
}