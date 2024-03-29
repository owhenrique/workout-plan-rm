import treinoA from "./mocks/treinoA"
import treinoB from "./mocks/treinoB"
import treinoC from "./mocks/treinoC"
import aluno from "./mocks/aluno"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { BiDumbbell } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { useState } from 'react';
import { exercicios } from './interfaces/types'
import { PiClockCountdownFill } from 'react-icons/pi'


function App() {
  const [paginaAtual, setPaginaAtual] = useState(0)

  const trocarPagina = (proximaPagina: number) => {
    setPaginaAtual(proximaPagina)
  };

  const treinos = [treinoA, treinoB, treinoC]
  const paginas = treinos.length - 1

  return (
    <>
      <div className='text-center flex flex-col p-6 my-0 mx-auto gap-10'>
        <div className='flex justify-around items-center'>
          <Avatar className='h-32 w-32'>
            <AvatarImage src={aluno.foto}/>
            <AvatarFallback className='text-4xl font-medium'>{aluno.sigla}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col flex-wrap justify-center items-start'>
            <h1 className='text-3xl font-bold overflow-wrap break-word max-w-12'>{aluno.nome}</h1>
            <h2 className='text-xl'>{aluno.idade} Anos</h2>
            <h2 className='text-xl'>{aluno.peso} Kilos</h2>
            <h2 className='text-xl'>{aluno.objetivo}</h2>
          </div>
        </div>

        <Carousel className='flex justify-center items-center mx-32'>
          <CarouselContent>
            {treinos.map((_, index) => (
              <CarouselItem key={index}>{paginaAtual + 1}</CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={() => trocarPagina(paginaAtual === 0 ? paginas : paginaAtual - 1)} />
          <CarouselNext onClick={() => trocarPagina(paginaAtual === paginas ? 0 : paginaAtual + 1)} />
        </Carousel>

        <div className='flex flex-col gap-8'>
          <h1 className='font-medium text-4xl'>{treinos[paginaAtual].categoria}</h1>
          {treinos[paginaAtual].exercicios.map((exercicio: exercicios, index: number) => (
            <Card key={index} className='rounded-xl bg-gray-50 outline outline-2 flex flex-row w-full max-w-lg mx-auto md:max-w-full md:min-h-52'>
              <img className='h-44 md:min-h-60 flex-shrink-0 mr-2' src={exercicio.imagem} alt={exercicio.nome}/>
              <div className='md:text-2xl flex flex-col justify-center space-y-5 flex-grow'>
                {exercicio.nome && <p className='items-center font-bold overflow-wrap break-word max-w-32 md:max-w-full'>{exercicio.nome}</p>}
                <div className='flex flex-row md:flex-col flex-wrap justify-start items-start md:items-center gap-2'>
                  {exercicio.series && ( 
                    <div className='min-w-40 rounded-full flex flex-row items-center gap-2'>
                      <BiDumbbell size={22}/>
                      <p>{`${exercicio.series} séries`}</p>
                    </div>
                  )}
                  {exercicio.duracao && (
                    <div className='min-w-40 rounded-full flex flex-row items-center gap-2'>
                      <PiClockCountdownFill size={22}/>
                      <p>{`${exercicio.duracao} minuto(s)`}</p>
                    </div>
                  )}
                  {exercicio.repeticoes && (
                    <div className='min-w-40 rounded-full flex flex-row items-center gap-2'>
                      <GiBiceps size={18}/>
                      <p>{`${exercicio.repeticoes} repetições`}</p>
                    </div>
                  )}
                  {exercicio.descanso && (
                    <div className='min-w-40 rounded-full flex flex-row items-center gap-2'>
                      <FaClock size={18}/>
                      <p>{`${exercicio.descanso}s descanso`}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
