interface GameCardProps {
    title: string;
    boxArtUrl: string;
    adsCount: number;
}

export function GameCard(props: GameCardProps) {
    return (
        <button className="relative rounded-lg overflow-hidden">
            <img src={props.boxArtUrl} alt="" />
            <div className="pt-16 px-4 pb-4 w-full absolute left-0 right-0 bottom-0 bg-game-gradient">
                <strong className="block font-bold text-left tracking-[-0.18px] text-white">
                    {props.title}
                </strong>
                <span className="block text-sm text-left text-zinc-300">
                    {props.adsCount} anúncio(s)
                </span>
            </div>
        </button>
    );
}
