
import { Client, Account, Avatars, Databases, Query } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';

export const config = {
    endpoint: process.env.EXPO_PUBLIC_ENDPOINT,
    platform: process.env.EXPO_PUBLIC_PLATFORM,
    projectId: process.env.EXPO_PUBLIC_PROJECTID,
    databaseId: process.env.EXPO_PUBLIC_DATABASEID,
    userCollectionId: process.env.EXPO_PUBLIC_USERCOLLECTIONID,
    videoCollectionId: process.env.EXPO_PUBLIC_VIDEOCOLLECTIONID,
    storageId: process.env.EXPO_PUBLIC_STORAGEID,
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
} = config

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);
// Register User
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatar.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session
    } catch (error) {
        throw Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error

        return currentUser.documents[0]

    } catch (error) {
        console.error(error)
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
        )
        return posts.documents
    } catch (error) {
        throw new Error(error);
    }
}

export const getLatestPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt'), Query.limit(7)]
        )
        return posts.documents
    } catch (error) {
        throw new Error(error);
    }
}