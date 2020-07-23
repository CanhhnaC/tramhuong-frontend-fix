import { firestore } from "./firebase";
import { collectIdsAndData } from "./utilities";

const GetOne = async ({ collection, uid }) => {
  const snapshot = await firestore.collection(collection).doc(uid);
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
};

const GetList = async ({ collection, limit }) => {
  let item = null;
  const snapshot = await firestore
    .collection(collection)
    .orderBy("createdate")
    .limit(limit)
    .get()
    .then((doc) => {
      item = doc.docs.map(collectIdsAndData);
      return item;
    })
    .catch((err) => console.log(err));
  return item;
};

const GetProductList = async ({ typesId, limit }) => {
  let item = null;
  const snapshot = await firestore
    .collection("products")
    .orderBy("createdate")
    .where("typesId", "==", typesId)
    .limit(limit)
    .get()
    .then((doc) => {
      item = doc.docs.map(collectIdsAndData);
      return item;
    })
    .catch((err) => console.log(err));
  return item;
};

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var year = a.getFullYear();
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  var time = hour + ":" + min + " / " + date + "-" + month + "-" + year;
  return time;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export { GetList, GetOne, GetProductList, timeConverter, numberWithCommas };
