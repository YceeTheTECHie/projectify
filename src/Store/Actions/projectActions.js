// function to handle project creattion

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase}) => {
        //async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //adding new project to the existing ones
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
           authorId,
            createdAt: new Date()
        }).then(() => { dispatch({
            type: 'CREATE_PROJECT',
            project: project
            // handling errors
        })}).catch((err) => { dispatch({type :'CREATE_PROJECT_ERROR',err});
            })
          
        }
     
    
};