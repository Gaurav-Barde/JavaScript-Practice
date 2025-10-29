// Given the below breadcrumb array, generate the complete hierarchy starting from the root:
// 29/10
const breadCrumb = [
  { id: 3, parentId: 12, title: "Headphones" },
  { id: 19, parentId: 28, title: "True wireless" },
  { id: 28, parentId: 3, title: "Wired" },
  { id: 12, parentId: null, title: "Audio" },
  { id: 10, parentId: 19, title: "Bluetooth" },
  { id: 15, parentId: 10, title: "TV" },
];

//   Audio >> Headphones >> Wired >> True wireless >> Bluetooth

// first find out null parent id and print it
// then take the id of the null parent and match with the parent id of other

const resultArr = [];
const generateHierarchy = (inputArr) => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let k = 0; k < inputArr.length - 1; k++) {
      if (inputArr[i]?.parentId == inputArr[k]?.id) {
        if (!resultArr.includes(inputArr[k], inputArr[i]))
          resultArr.push(inputArr[k], inputArr[i]);
      }
    }
  }
  return resultArr;
};

const result = generateHierarchy(breadCrumb);
console.log(result);
