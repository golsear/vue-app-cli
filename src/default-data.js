export const defaultData = [
    {
        filters: [
            {
                key: 'version',
                isChecked: true,
                label: 'Версія'
            },
            {
                key: 'creationDate',
                isChecked: true,
                label: 'Дата створення'
            },
            {
                key: 'status',
                isChecked: true,
                label: 'Статус'
            },
            {
                key: 'statusChangeDate',
                isChecked: true,
                label: 'Дата зміни статусу'
            }
        ],
        columns: [
            {
                name: 'Версія',
                key: 'version',
                isFiltered: true
            },
            {
                name: 'Дата створення',
                key: 'creationDate',
                isFiltered: true
            },
            {
                name: 'Статус',
                key: 'status',
                isFiltered: true
            },
            {
                name: 'Дата зміни статусу',
                key: 'statusChangeDate',
                isFiltered: true
            },
            {
                name: '',
                key: 'component',
                isFiltered: false
            }
        ],
        rows: [
            {
                version: {
                    value: 'v 1.02',
                    type: 'string'
                },
                creationDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY HH:mm'
                },
                status: {
                    value: 'Не завершено',
                    statusCode: 1,
                    type: 'status'
                },
                statusChangeDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY HH:mm'
                },
                component: {
                    value: 'grid-button',
                    type: 'component',
                    text: 'Продовжити',
                    clickHandle: 'continue'
                },
                extraField: {
                    value: 'extra field',
                    type: 'string'
                }
            },
            {
                version: {
                    value: 'v 1.01',
                    type: 'string'
                },
                creationDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY HH:mm'
                },
                status: {
                    value: 'Не складено',
                    statusCode: 2,
                    type: 'status'
                },
                statusChangeDate: {
                    value: '---',
                    type: 'date',
                    format: 'DD MMM.YYYY HH:mm'
                },
                component: {
                    value: 'grid-button',
                    type: 'component',
                    text: 'Переглянути',
                    clickHandle: 'review'
                }
            },
            {
                version: {
                    value: 'v 1.00',
                    type: 'string'
                },
                creationDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY HH:mm'
                },
                status: {
                    value: 'Cкладено',
                    statusCode: 3,
                    type: 'status'
                },
                statusChangeDate: {
                    value: 1609485244, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY HH:mm'
                },
                component: {
                    value: 'grid-button',
                    type: 'component',
                    text: 'Переглянути',
                    clickHandle: 'review'
                }
            }
        ]
    },
    {
        filters: [
            {
                key: 'firstName',
                isChecked: true,
                label: 'Ім\'я'
            },
            {
                key: 'lastName',
                isChecked: true,
                label: 'По батькові'
            },
            {
                key: 'birthday',
                isChecked: true,
                label: 'Дата народження'
            }
        ],
        columns: [
            {
                name: 'Ім\'я',
                key: 'firstName',
                isFiltered: true
            },
            {
                name: 'Прізвище',
                key: 'lastName',
                isFiltered: true
            },
            {
                name: 'Дата народження',
                key: 'birthday',
                isFiltered: true,
                format: 'DD MMM.YYYY'
            }
        ],
        rows: [
            {
                firstName: {
                    value: 'Іван',
                    type: 'string'
                },
                lastName: {
                    value: 'Франко',
                    type: 'string'
                },
                birthday: {
                    value:  -3576880924, // 27 серп.1856 00:00
                    type: 'date',
                    format: 'DD MMM.YYYY'
                }
            },
            {
                firstName: {
                    value: 'Леся',
                    type: 'string'
                },
                lastName: {
                    value: 'Українка',
                    type: 'string'
                },
                birthday: {
                    value: -3119392924, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY'
                }
            },
            {
                firstName: {
                    value: 'Тарас',
                    type: 'string'
                },
                lastName: {
                    value: 'Шевченко',
                    type: 'string'
                },
                birthday: {
                    value: -4917117724, // 01 січ.2021 09:14
                    type: 'date',
                    format: 'DD MMM.YYYY'
                }
            }
        ]
    },
    {
        filters: [
            {
                key: 'date',
                isChecked: true,
                label: 'Дата'
            },
            {
                key: 'event',
                isChecked: true,
                label: 'Подія'
            },
        ],
        columns: [
            {
                name: 'Дата',
                key: 'date',
                isFiltered: true
            },
            {
                name: 'Подія',
                key: 'event',
                isFiltered: true
            }
        ],
        rows: [
            {
                date: {
                    value: 1609485244,
                    type: 'date',
                    format: 'DD MMM.YYYY'
                },
                event: {
                    value: 'Подія 1',
                    type: 'string'
                }
            },
            {
                date: {
                    value: 1609485244,
                    type: 'date',
                    format: 'DD MMM.YYYY'
                },
                event: {
                    value: 'Подія 2',
                    type: 'string'
                }
            },
            {
                date: {
                    value: 1609485244,
                    type: 'date',
                    format: 'DD MMM.YYYY'
                },
                event: {
                    value: 'Подія 3',
                    type: 'string'
                }
            }
        ]
    }
];