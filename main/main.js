module.exports = function main(num) {
  let numArray = num.split("");
  let result = "";
  let template = {
    0: "._.\n|.|\n|_|",
    1: `...\n..|\n..|`,
    2: `._.\n._|\n|_.`,
    3: `._.\n._|\n._|`,
    4: `...\n|_|\n..|`,
    5: `._.\n|_.\n._|`,
    6: `._.\n|_.\n|_|`,
    7: `._.\n..|\n..|`,
    8: `._.\n|_|\n|_|`,
    9: `._.\n|_|\n..|`
  };
  for (let i = 0; i < 3; i++) {
    numArray.forEach((item, flag) => {
      if (flag !== numArray.length) {
        result += template[item].split("\n")[i] + " ";
      } else {
        result += template[item].split("\n")[i];
      }
    });
    result += "\n";
  }
  console.log(result);
  return result;
};
