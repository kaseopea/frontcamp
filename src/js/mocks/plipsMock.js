import uuid from 'uuid';

export const PLIPMOCK = [
    {
        id: uuid.v4(),
        date: new Date(Date.now() + 1000),
        content: 'Блювалет, блюдама, блюкороль и блютуз',
        author: 'Monocl'
    },
    {
        id: uuid.v4(),
        date: new Date(Date.now() + 2000),
        content: 'Это ссылка. Хотелось бы это подчеркнуть.',
        author: 'Victor'
    },
    {
        id: uuid.v4(),
        date: new Date(Date.now() + 3000),
        content: 'Рекс-фекс-пекс в большом городе',
        author: 'Lennart'
    },
    {
        id: uuid.v4(),
        date: new Date(Date.now() + 4000),
        content: 'Дятлы с перфоратором',
        author: 'Monocl'
    },
    {
        id: uuid.v4(),
        date: new Date(Date.now() + 5000),
        content: 'Вин-нипуха ни пера!',
        author: 'Victor'
    },
    {
        id: uuid.v4(),
        date: new Date(Date.now() + 6000),
        content: 'Булочка с матом',
        author: 'Lennart'
    }
];