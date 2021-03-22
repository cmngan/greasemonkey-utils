const getElementByTag = (tag, field, value) =>
  Array.from(document.getElementsByTagName(tag)).find(
    (a) => a[field] === value
  );
const getAllElementByTag = (tag, field, value, isInclude) =>
  Array.from(document.getElementsByTagName(tag)).filter((a) =>
    isInclude ? a[field].includes(value) : a[field] === value
  );
