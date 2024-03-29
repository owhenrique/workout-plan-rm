export type aluno = {
    foto?: string,
    sigla: string,
    nome: string,
    idade: string,
    peso: string,
    objetivo: string
}

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