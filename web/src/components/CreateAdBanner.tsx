import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
        <div className="mt-8 mb-[132px] mx-auto pt-1 w-[1200px] bg-nlw-gradient rounded-lg overflow-hidden">
            <div className="px-8 py-6 flex items-center justify-between bg-[#2A2634]">
                <div>
                    <strong className="block font-black text-2xl text-white">
                        Não encontrou seu duo?
                    </strong>
                    <span className="block text-zinc-400">
                        Publique um anúncio para encontrar novos players!
                    </span>
                </div>
                <Dialog.Trigger className="px-4 py-3 flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    );
}
