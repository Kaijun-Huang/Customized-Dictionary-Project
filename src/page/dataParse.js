export const findAttribute = (data, attr) => {
  let result = "not found";
  //如果是陣列, 用forEach遍歷
  if (Array.isArray(data)) {
    data.forEach((datum, i) => {
      // console.log("arr判斷過程" + i);
      let found = findAttribute(datum, attr);
      // results = results.concat(findAttribute(datum, attr));
      if (found !== "not found") result = found;
    });
    //如果是物件, 用for in遍歷
  } else if (typeof data === "object") {
    for (const key in data) {
      // console.log("obj判斷過程" + key);
      if (key === attr) {
        return data[key];
        //   results.push(data[key]);
      }
      // results = results.concat(findAttribute(data[key], attr));
      let found = findAttribute(data[key], attr);
      if (found !== "not found") {
        result = found;
      }
    }
  }
  return result;
};

export const findAttributes = (data, attributeName) => {
  let results = [];
  if (Array.isArray(data)) {
    data.forEach((datum) => {
      results.push(...findAttributes(datum, attributeName));
    });
  } else if (typeof data === "object" && data !== null) {
    for (const key in data) {
      if (key === attributeName) {
        results.push(data[key]);
      }
      results.push(...findAttributes(data[key], attributeName));
    }
  }
  return results;
};

//資料中hwi裡hw有時會有'*'
export const starRemoval = (string) => {
  let result = "";
  if (string.indexOf("*") !== -1) result = starRemoval(string.replace("*", ""));
  else result = string;
  return result;
};

export const getExactWordRes = (data, word) => {
  const exactWordRes = [];
  data.forEach((datum) => {
    let wordWithoutStar = starRemoval(datum.hwi.hw);
    if (wordWithoutStar === word) exactWordRes.push(datum);
  });
  return exactWordRes;
};
