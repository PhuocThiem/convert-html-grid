 const convertTableToGrid = (htmlStr) => {
  // Convert html template to html
  const richTextTemplate = document.createElement('div');
  richTextTemplate.classList.add('richText');
  const htmlRemovedEmpty = htmlStr.replace(/<p><\/p>/gi, '');
  richTextTemplate.innerHTML = htmlRemovedEmpty;
  const table = richTextTemplate.getElementsByTagName('table');
  for (const item of table) {
    if (!item.getElementsByTagName('th').length) {
      const colCounter = item.getElementsByTagName('td').length;
      const div = document.createElement('div');
      div.classList.add('grid-table', 'grid', 'grid-cols-1', `sm:grid-cols-${colCounter}`, 'gap-4');
      for (const tData of item.getElementsByTagName('td')) {
        const divCol = document.createElement('div');
        divCol.classList.add('table-col');
        divCol.innerHTML = tData?.innerHTML;
        div.append(divCol);
      }
      item?.parentNode?.replaceChild(div, item);
    }
  }
  return richTextTemplate.outerHTML;
};

export default convertTableToGrid;
