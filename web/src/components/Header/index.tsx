//import logoImg from '../../assets/img/logo.svg';
//import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header(/* { onOpenNewTransactionModal }: HeaderProps */) {
    return (
        <>
            <div>
                <img src="" alt='dt money' />
                <button className="bg-violet-700 text-color-primary" /* onClick={onOpenNewTransactionModal} */>
                    New
                </button>
            </div>
        </>
    );
}