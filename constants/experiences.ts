export interface Experience {
    year: number,
    comments: string[]
}

export const EXPERIENCES_DATA: Experience[] = [
    {
        year: 2022,
        comments: [
            'Currently working with web3 companies in the space',
            'Attended in my first blockchain conferences: Ethereum Rio (won a hackathon) and Amsterdam DevConnect',
            'Worked remotely in a team of 4 for the 2nd consecutive year',
        ]
    },
    {
        year: 2021,
        comments: [
            'Visited the Amazon Rainforest for the first time',
            'Learned about blockchain technology and decided to move towards it',
        ],
    },
    {
        year: 2019,
        comments: [
            'Became a cloud data engineer at Schuberg Philis',
            'Got a job offer to work and live in The Netherlands',
        ],
    },
    {
        year: 2018,
        comments: [
            'Learned a bunch of tech, like python aws, docker, terraform'
        ],
    },
    {
        year: 2017,
        comments: [
            'After some freelance work, I got my first job as a web developer at Intellibrand',
        ],
    },
    {
        comments: [
            'Started coding spreadsheets, JS and automation tools for a hobby',
            'Graduated in Clinical Psychology, working for ~5 years in the field',
        ],
        year: 2012
    }
]
