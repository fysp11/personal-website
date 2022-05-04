export interface Experience {
    order: number,
    position: string,
    year: number,
    comment?: string
}

export const EXPERIENCES_DATA: Experience[] = [
    {
        order: 1,
        position: 'Web3 Technologist',
        year: 2022
    },
    {
        order: 2,
        position: 'Data Engineer',
        year: 2019
    },
    {
        order: 3,
        position: 'Software Engineer',
        year: 2019
    },
    {
        order: 4,
        position: 'Fullstack Engineer',
        year: 2018
    },
    {
        order: 5,
        position: 'Frontend Engineer',
        year: 2017
    },
    {
        order: 6,
        position: 'Psychotherapist',
        year: 2017
    },
    {
        order: 7,
        position: 'School Psychologist',
        year: 2012
    }
]