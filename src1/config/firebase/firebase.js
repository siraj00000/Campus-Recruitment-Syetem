import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const Register = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password)
}

const login = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)
}

const addUserToDb = (user) => {
    return firestore().collection('Users').add({
        ...user,
        createdAt: new Date(),
        timestamp: firestore.FieldValue.serverTimestamp()
    })
}

const getUser = () => {
    return new Promise((resolve) => {
        firestore.collection('Users').orderBy('timestamp', 'desc').get().then(snapshot => {
            const setUser = []
            snapshot.forEach(doc => {
                setUser.push({ ...doc.data(), id: doc.id })
            })
            resolve(setUser)
        })
    })
}

const logOut = () => {
    return auth.signOut()
}



export {
    login,
    Register,
    addUserToDb,
    getUser,
    logOut,
    auth
}