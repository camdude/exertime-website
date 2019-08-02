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
                {name: "Exertime Project",
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
                key: "",
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
                {name: "Test1",
                    shortName: "T1",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                },
                {name: "Test2",
                    shortName: "T2",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                },
                {name: "Test3",
                    shortName: "T3",
                    runTime: 0,
                    completedEvery: 0,
                    postponeInterval: 0,
                    defaultExercise: "",
                    exerciseDelay: 0,
                    emergencyExit: true
                },
                {name: "Test4",
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