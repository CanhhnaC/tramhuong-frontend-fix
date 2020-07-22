import { atom, selector } from "recoil";
import { firestore } from "./firebase";
import { collectIdsAndData } from "./utilities";

export const typeIdState = atom({
  key: "typeIdState",
  default: "",
});

export const idItemState = atom({
  key: "idItemState",
  default: "",
});

export const getListProductState = selector({
  key: "getListProductState",
  get: async ({ get }) => {
    const collection = get(collectionState);
    const typesId = get(typeIdState);
    const limit = get(limitPageState);

    const snapshot = await firestore
      .collection(collection)
      .where("typesId", "==", typesId)
      .orderBy("createdate", "desc")
      .limit(limit)
      .get();

    const item = await snapshot.docs.map(collectIdsAndData);
    return item;
  },
});

export const getOneProductState = selector({
  key: "getOneProductState",
  get: async ({ get }) => {
    const collection = get(collectionState);
    const id = get(idItemState);

    const snapshot = await firestore.collection(collection).doc(id);
    snapshot
      .get()
      .then((doc) => {
        if (doc.exists) {
          const item = doc.data();
          return item;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
});

export const collectionState = atom({
  key: "collectionState",
  default: "posts",
});

export const limitPageState = atom({
  key: "limitPageState",
  default: 5,
});

export const getListPostState = selector({
  key: "getListPostState",
  get: async ({ get }) => {
    const collection = get(collectionState);
    const limit = get(limitPageState);

    const snapshot = await firestore
      .collection(collection)
      .orderBy("createdate")
      .limit(limit)
      .get();

    const item = snapshot.docs.map(collectIdsAndData);
    return item;
  },
});
