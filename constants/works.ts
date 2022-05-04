import { StaticImageData } from "next/image";
import thumbAmembo from '../public/images/works/walknote_eyecatch.png'

export interface WorkItemData {
    id: string,
    title: string,
    thumbnail: StaticImageData,
    description: string,
}


export const WORKS_DATA: WorkItemData[] = [
    {
        id: 'amembo',
        title: 'Amembo',
        thumbnail: thumbAmembo,
        description: 'Amembo is a web application for creating and sharing music videos. It is a project of Walknote.',
    },
    {
        id: 'walknote',
        title: 'Walknote',
        thumbnail: thumbAmembo,
        description: 'Walknote is a web application for creating and sharing music videos. It is a project of Walknote.',
    },
    {
        id: 'freedbtagger',
        title: 'FreeDB Tagger',
        thumbnail: thumbAmembo,
        description: 'FreeDB Tagger is a web application for creating and sharing music videos. It is a project of Walknote.',
    },
    {
        id: 'styly',
        title: 'Styly',
        thumbnail: thumbAmembo,
        description: 'Styly is a web application for creating and sharing music videos. It is a project of Walknote.',
    },
    {
        id: 'modetokyo',
        title: 'ModeTokyo',
        thumbnail: thumbAmembo,
        description: 'ModeTokyo is a web application for creating and sharing music videos. It is a project of Walknote.',
    }
]