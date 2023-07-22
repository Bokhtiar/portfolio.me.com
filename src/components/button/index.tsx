import Link from 'next/link'
import { IButton } from '../../types/button.type'

export const PrimaryButton: React.FC<IButton> = (props: IButton): JSX.Element => {
    return (
      // <button className="bg-secondary p-1 px-7 py-2 rounded-full text-sm">{props.name}</button>
      <Link
        download="Bokhtiar_software_eng_resume.pdf"
        className="bg-secondary p-1 px-7 py-2 rounded-full text-sm"
        href="/images/Bokhtiar_software_eng_resume.pdf"
        target="_blank"
        
      >
        {props.name}
      </Link>
    );
}