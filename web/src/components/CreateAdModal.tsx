import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { GameController } from "phosphor-react";

import { FormGroup } from "./Form/FormGroup";
import { Label } from "./Form/Label";
import { Input } from "./Form/Input";

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    useEffect(() => {
        async function getGamesList() {
            const response = await axios("http://localhost:3333/games");
            setGames(response.data);
        }

        getGamesList();
    }, []);

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (!data.name) {
            return;
        }

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel,
            });
            alert("Anúncio criado com sucesso");
        } catch (error) {
            alert("Falha ao salvar o anúncio");
            console.log(error);
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            <Dialog.Content className="px-10 py-8 w-[488px] fixed right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 bg-[#2A2634] rounded-lg shadow-lg shadow-black/25 text-white">
                <Dialog.Title className="font-black text-[32px]">
                    Publique um anúncio
                </Dialog.Title>
                <form
                    onSubmit={handleCreateAd}
                    className="mt-8 flex flex-col gap-4"
                >
                    <FormGroup>
                        <Label htmlFor="game">Qual o game?</Label>
                        <select
                            id="game"
                            name="game"
                            className="px-4 py-3 bg-zinc-900 rounded text-sm appearance-none"
                            defaultValue=""
                        >
                            <option hidden disabled value="">
                                Selecione o game que deseja jogar
                            </option>
                            {games.map((game) => {
                                return (
                                    <option key={game.id} value={game.id}>
                                        {game.title}
                                    </option>
                                );
                            })}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name">Seu nome (ou nickname)</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Como te chamam dentro do game?"
                        />
                    </FormGroup>
                    <div className="grid grid-cols-2 gap-6">
                        <FormGroup>
                            <Label htmlFor="yearsPlaying">
                                Joga há quantos anos?
                            </Label>
                            <Input
                                id="yearsPlaying"
                                name="yearsPlaying"
                                type="number"
                                placeholder="Tudo bem ser ZERO"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="discord">Qual seu Discord?</Label>
                            <Input
                                id="discord"
                                name="discord"
                                type="text"
                                placeholder="Usuario#0000"
                            />
                        </FormGroup>
                    </div>
                    <div className="flex gap-6">
                        <FormGroup>
                            <Label htmlFor="weekDays">
                                Quando costuma jogar?
                            </Label>
                            <ToggleGroup.Root
                                className="grid grid-cols-5 gap-1"
                                type="multiple"
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("1")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="1"
                                    title="Segunda"
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("2")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="2"
                                    title="Terça"
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("3")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="3"
                                    title="Quarta"
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("4")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="4"
                                    title="Quinta"
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("5")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="5"
                                    title="Sexta"
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("6")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="6"
                                    title="Sábado"
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`px-3 py-[7px] w-10 h-10 rounded font-bold ${
                                        weekDays.includes("0")
                                            ? "bg-violet-500"
                                            : "bg-zinc-900"
                                    }`}
                                    value="0"
                                    title="Domingo"
                                >
                                    D
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </FormGroup>
                        <FormGroup className="flex flex-col gap-2 flex-1">
                            <Label htmlFor="hours">Qual horário do dia?</Label>
                            <div
                                className="grid grid-rows-2 grid-cols-5 items-center gap-1"
                                id="hours"
                            >
                                <label htmlFor="hourStart">De:</label>
                                <Input
                                    className="px-4 h-10 col-span-4 bg-zinc-900 rounded text-sm placeholder:text-zinc-500"
                                    id="hourStart"
                                    name="hourStart"
                                    type="time"
                                />
                                <label htmlFor="hourEnd">Até:</label>
                                <Input
                                    className="px-4 h-10 col-span-4 bg-zinc-900 rounded text-sm placeholder:text-zinc-500"
                                    id="hourEnd"
                                    name="hourEnd"
                                    type="time"
                                />
                            </div>
                        </FormGroup>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <Checkbox.Root
                            className="p-1 w-6 h-6 bg-zinc-900 rounded"
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                checked
                                    ? setUseVoiceChannel(true)
                                    : setUseVoiceChannel(false);
                            }}
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label
                            htmlFor="useVoiceChannel"
                            className="font-normal text-sm"
                        >
                            Costumo me conectar ao chat de voz
                        </label>
                    </div>
                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close className="px-5 h-12 bg-zinc-500 rounded-md font-semibold hover:bg-zinc-600">
                            Cancelar
                        </Dialog.Close>
                        <button
                            className="px-5 h-12 flex items-center gap-3 bg-violet-500 rounded-md font-semibold hover:bg-violet-600"
                            type="submit"
                        >
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
