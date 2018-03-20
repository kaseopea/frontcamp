import {getRandomDays} from './mockUtils';

export default [
    {
        id: 1,
        text: 'Нарисовать картину',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    },
    {
        id: 2,
        text: 'Посадить дерево',
        date: new Date(Date.now() - getRandomDays()),
        completed: true
    },
    {
        id: 3,
        text: 'Путешествовать автостопом',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    },
    {
        id: 4,
        text: 'Изучить итальянский язык',
        date: new Date(Date.now() - getRandomDays()),
        completed: true
    },
    {
        id: 5,
        text: 'Устроиться волонтером',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    },
    {
        id: 6,
        text: 'Прожить неделю без компьютера и телефона',
        date: new Date(Date.now() - getRandomDays()),
        completed: true
    },
    {
        id: 7,
        text: 'Создать генеалогическое древо',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    },
    {
        id: 8,
        text: 'Написать историю своей жизни',
        date: new Date(Date.now() - getRandomDays()),
        completed: true
    },
    {
        id: 9,
        text: 'Полежать на берегу океана и послушать шум волн',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    },
    {
        id: 10,
        text: 'Прочитать «Войну и мир»',
        date: new Date(Date.now() - getRandomDays()),
        completed: true
    },
    {
        id: 11,
        text: 'Забросить ботинки на провода',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    },
    {
        id: 12,
        text: 'Три дня не разговаривать',
        date: new Date(Date.now() - getRandomDays()),
        completed: true
    },
    {
        id: 13,
        text: 'Написать записку, засунуть в бутылку и выпустить в открытое море',
        date: new Date(Date.now() - getRandomDays()),
        completed: false
    }
]
