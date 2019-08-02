import * as actionTypes from '../actions';

const initialState = {
    organisations: [
        {id: "jJ4cbj26fFYK1Mwg8nS",
            name: "University of Tasmania",
            shortName: "UTAS",
            settings: {
                countdownDuration: 0,
                walkingExDelay: 0
            },
            groups: [
                {id: "bj26fFYg8nSK1MjJ4cw",
                    name: "Exertime Project",
                    shortName: "Epro",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                }
            ],
            users: [
                {prefName: "",
                    givenName: "",
                    surname: "",
                    username: "",
                    group: "",
                    email: "",
                    emergencyExit: true,
                    status: "avtive",
                    calorieGoal: 0,
                    new: true
                },
                {prefName: "",
                    givenName: "",
                    surname: "",
                    username: "",
                    email: "",
                    emergencyExit: true,
                    status: "avtive",
                    calorieGoal: 0,
                    new: true
                },
            ],
            registration: {
                key: "o4u3r20o-lu85-5h1w-g4d3-cvzjc6rurp2k",
                remaining: 1,
                used: 0
            },
        },
        {id: "fFYK1Mwg8nSjJ4cbj26",
            name: "Exertime",
            shortName: "ExTime",
            settings: {
                countdownDuration: 0,
                walkingExDelay: 0
            },
            groups: [
                {id: "FYg8nSK1MjJ4cwbj26f",
                    name: "Test1",
                    shortName: "T1",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                },
                {id: "SK1bj26fFYg8nwMjJ4c",
                    name: "Test2",
                    shortName: "T2",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                },
                {id: "cwfFYg8nSKbj261MjJ4",
                    name: "Test3",
                    shortName: "T3",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                },
                {id: "YgJ4cwSK8nFj1Mbj26f",
                    name: "Test4",
                    shortName: "T4",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                }
            ],
            users: [
                {prefName: "",
                    givenName: "",
                    surname: "",
                    username: "",
                    group: "",
                    email: "",
                    emergencyExit: true,
                    status: "avtive",
                    calorieGoal: 0,
                    new: true
                },
                {prefName: "",
                    givenName: "",
                    surname: "",
                    username: "",
                    email: "",
                    emergencyExit: true,
                    status: "avtive",
                    calorieGoal: 0,
                    new: true
                },
            ],
            registration: {
                key: "",
                remaining: 1,
                used: 0
            },
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN:
            return {
                ...state
            }
        default:
            return {
                state
            }     
    }
}

export default reducer;