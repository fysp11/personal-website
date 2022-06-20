export interface CurrentActivity {
    ref: string,
    comments: string[]
}

export const CurrentActivities: CurrentActivity[] = [
    {
        ref: '1',
        comments: [
            'Currently working with web3 companies in the space',
            'Attended in my first blockchain conferences: Ethereum Rio (won a hackathon) and Amsterdam DevConnect',
            'Worked remotely in a team of 4 for the 2nd consecutive year',
        ]
    },
    {
        ref: '2',
        comments: [
            'Visited the Amazon Rainforest for the first time',
            'Learned about blockchain technology and decided to move towards it',
        ],
    },
]
