// all中必须包含根节点
exports.convertTree = all => {
  const tmp = {};
  for (let i = 0; i < all.length; i++) {
    const item = all[i];
    if (!tmp[item.id]) {
      tmp[item.id] = {};
    }
    tmp[item.id].id = item.id;
    tmp[item.id].name = item.name;
    tmp[item.id].father_id = item.father_id;
    tmp[item.id].url = item.url;
    tmp[item.id].icon = item.icon;
    if (!('children' in tmp[item.id])) tmp[item.id].children = [];

    if (tmp[item.father_id]) {
      tmp[item.father_id].children.push(tmp[item.id]);
    } else {
      tmp[item.father_id] = {children: [tmp[item.id]]};
    }
  }
  return tmp[0].children;
};