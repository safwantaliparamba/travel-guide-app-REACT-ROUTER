import React, { useEffect, useReducer } from "react";

export const ContextUser = React.createContext({});

const reducerfn = (state, action) => {
    switch (action.type) {
        case "LOGOUT": {
            localStorage.clear();
            return {};
        }
        case "ISLOGGEDIN": {
            return { userData: action.payload.data };
        }
        default:
            break;
    }
};

function UserContext(props) {
    const [userState, dispatchState] = useReducer(reducerfn, {});
    useEffect(() => {
        if (localStorage.getItem("user_data")) {
            dispatchState({
                type: "ISLOGGEDIN",
                payload: {
                    data: JSON.parse(localStorage.getItem("user_data")),
                },
            });
        }
    }, []);
    return (
        <ContextUser.Provider
            value={{
                userData: userState.userData,
                updateUserData: dispatchState,
            }}
        >
            {props.children}
        </ContextUser.Provider>
    );
}

export default UserContext;
