import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { Wallet } from 'lucide-react';
import './ConnectButton.css';
import Button from '@/pages/FrontOffice/components/Button/Button';

export default function ConnectButton() {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();

    const handleClick = () => {
        if (isConnected) {
            open({ view: 'Account' });
        } else {
            open();
        }
    };

    return (
        <Button
            type='button'
            variant='flatten'
            onClick={handleClick}
        >
            {isConnected
                ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                : 'Se connecter'}
        </Button>
    );
}