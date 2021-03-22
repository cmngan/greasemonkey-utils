const getElementByTag = (tag, field, value) =>
  Array.from(document.getElementsByTagName(tag)).find(
    (a) => a[field] === value
  );
const getAllElementByTag = (tag, field, value, isInclude) =>
  Array.from(document.getElementsByTagName(tag)).filter((a) =>
    isInclude ? a[field].includes(value) : a[field] === value
  );

const delay = (sec) => new Promise((res) => setTimeout(res, sec));
const waitFor = async (checkFn) => {
  let count = 0;
  while (!checkFn()) {
    if (count > 100) {
      console.error("wait too long");
      throw new Error("wait too long");
    }
    count++;
    // console.log(`try again after 100ms, time: ${count}`)
    await delay(100);
  }
};
