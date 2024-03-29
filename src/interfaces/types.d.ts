export type treino = {
    categoria: string,
    exercicios: exercicios[],
}


export type exercicios = {
    imagem?: string,
    nome?: string,
    duracao?: number,
    series?: number,
    repeticoes?: number,
    descanso?: number
}