import { useState, useEffect } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "/logo-nlw-esports.svg";
import { GameCard } from "./components/GameCard";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";

import "./styles/main.css";

interface Game {
    id: string;
    title: string;
    boxArtUrl: string;
    _count: {
        ads: number;
    };
}

export default function App() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        async function getGamesList() {
            const response = await axios("http://localhost:3333/games");
            setGames(response.data);
        }

        getGamesList();
    }, []);

    return (
        <>
            <img className="mx-auto my-20" src={logoImg} alt="eSports Logo" />

            <div className="mx-auto max-w-[1344px] flex flex-col items-center">
                <h1 className="text-[64px] text-white font-black">
                    Seu{" "}
                    <span className="bg-nlw-gradient bg-clip-text text-transparent">
                        duo
                    </span>{" "}
                    está aqui.
                </h1>
                <div className="mt-16 mx-[72px] grid grid-cols-6 gap-6">
                    {games.map((game) => {
                        return (
                            <GameCard
                                key={game.id}
                                title={game.title}
                                boxArtUrl={game.boxArtUrl}
                                adsCount={game._count.ads}
                            />
                        );
                    })}
                </div>
                <Dialog.Root>
                    <CreateAdBanner />
                    <CreateAdModal />
                </Dialog.Root>
            </div>
        </>
    );
}
