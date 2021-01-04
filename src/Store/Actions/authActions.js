// function to handle signin operation
export const signIn = (Credentials) => {
    return (dispatch, getState, { getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password
        ).then (() => { dispatch({type : 'LOGIN_SUCCESS'})
            }).catch((err) => {dispatch({type:'LOGIN ERROR',err})})

    }
}

// function to handle signout operation
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {dispatch({type : 'SIGN_OUT_SUCCESS'})})
    }
}

// function to handle signup operation
export const signUp = (newUser) => {
    return (dispatch,getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
//saving user details to db
        ).then((resp)=> {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName : newUser.firstName,
                lastName: newUser.lastName,
                   /*contatenating first letters of the users' names */
                initials : newUser.firstName[0] + newUser.lastName[0] 
            })
        }).then(() => { dispatch({ type: 'SIGNUP_SUCCESS' }) })
            // handling error
        .catch((err)=> {dispatch ({type: 'SIGNUP_ERROR' ,err}) })
    }

}   