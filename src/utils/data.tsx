import wedding from '../images/wedding.png';
import knight from '../images/knight.png';
import engeneering from '../images/engeneering.png';
import coding from '../images/coding.png';

export const data = [
    {
        id: 1,
        title: 'Learn Wedding Photography',
        description: 'Provide the couple with memories about how they ruined their damn lifes!',
        price: 125,
        coverImg: wedding,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: 'Online',
        openSpots: 0 
    },
    {
        id: 2,
        title: 'Get Gud',
        description: 'Dozens of hours of exquisit suffering from Soul Tyrant and shit!',
        price: 2,
        coverImg: knight,
        stats: {
            rating: 1.0,
            reviewCount: 300
        },
        location: 'Home. Always...',
        openSpots: 24000
    },
    {
        id: 3,
        title: 'Civil Engeneering Degree',
        description: 'Safety first!',
        price: 0.5,
        coverImg: engeneering,
        stats: {
            rating: 4.0,
            reviewCount: 20
        },
        location: 'Home again',
        openSpots: 24000
    },
    {
        id: 4,
        title: 'Learn Bloody React',
        description: 'The only music you need is the screeching of your brain!',
        price: 300,
        coverImg: coding,
        stats: {
            rating: 5.0,
            reviewCount: 100
        },
        location: 'Online',
        openSpots: 70 
    }
]