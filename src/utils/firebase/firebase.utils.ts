import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { CategoryItem } from "../../store/category/category.types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV0ufKBq_Ii7mIa7cXpkzlPLTTD7uaxLU",
  authDomain: "crwn-clothing-tang-db.firebaseapp.com",
  projectId: "crwn-clothing-tang-db",
  storageBucket: "crwn-clothing-tang-db.appspot.com",
  messagingSenderId: "771820222333",
  appId: "1:771820222333:web:71568d4cbd10ec5ee6fe14",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type UserDataType = {
  createAt: Date;
  displayName: string;
  email: string;
};

export type addtionalDetail = {
  displayName?: string
}

export const createDocumentFromAuth = async (
  userAuth: User,
  createName = {} as addtionalDetail
): Promise<QueryDocumentSnapshot<UserDataType>> => {
  // doc用作查看doc数据库文档, 返回创建文档的引用
  const docUserRef = doc(db, "user", userAuth.uid);

  // 根据doc引用获取当前操作文档快照
  const userSnaps = await getDoc(docUserRef);

  if (!userSnaps.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(docUserRef, {
        displayName,
        email,
        createAt,
        ...createName,
      });
    } catch (error) {
      console.log("set user doc ref fail", error);
    }
  }

  return userSnaps as QueryDocumentSnapshot<UserDataType>;
};

export const createUserEmailAndPasswordFromAuth = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
export const signOutAuth = async () => signOut(auth);

export const onHandleAuthStateChange = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unSubState = onAuthStateChanged(
      auth,
      (user) => {
        unSubState();
        resolve(user);
      },
      reject
    );
  });
};

export const createCollectWithDocumentForCategories = async (
  collectionKey: string,
  categories: CategoryItem[]
): Promise<void> => {
  const batch = writeBatch(db);

  const collectionRef = collection(db, collectionKey);

  categories.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log("done");
};

export const queryCollectionForCategories = async (): Promise<
  CategoryItem[]
> => {
  const collectionRef = collection(db, "categories");

  const q = query(collectionRef);

  const docSnaps = await getDocs(q);

  return docSnaps.docs.map((data) => {
    return data.data();
  }) as CategoryItem[];
};
