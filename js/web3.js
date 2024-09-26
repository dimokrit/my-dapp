import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectButton, useConnectWallet, useWallets } from "@mysten/dapp-kit";

// Функция подключения кошельков
const { mutate: connect } = useConnectWallet();
const wallets = useWallets();

function con() {
    wallets.map(wallet => {
        connect({ wallet });
    });
}

// Компонент с кнопкой для подключения
function WalletConnectButton() {
  return (
    <button onClick={con}>Connect Wallet</button>
  );
}

// Встраиваем React-компонент в существующий HTML
const root = createRoot(document.getElementById('react-root')); // Создаем корень
root.render(<WalletConnectButton />)