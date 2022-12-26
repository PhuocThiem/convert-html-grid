function convertTableToGrid(htmlStr) {
  // Convert html template to html
  const richTextTemplate = document.createElement('div');
  richTextTemplate.classList.add('richText');
  const htmlRemovedEmpty = htmlStr.replace(/<p><\/p>/gi, '');
  richTextTemplate.innerHTML = htmlRemovedEmpty;
  const tables = richTextTemplate.getElementsByTagName('table')
  for (let index = tables.length - 1; index > -1 ; index--) {
    if (!tables[index].getElementsByTagName('th').length) {
      const colCounter = tables[index].getElementsByTagName('td').length;
      const div = document.createElement('div');
      div.classList.add('grid-table', 'grid', 'grid-cols-1', `sm:grid-cols-${colCounter}`, 'gap-4');
      const tdElements = tables[index].getElementsByTagName('td')
      for (let index = 0; index < tdElements.length; index++) {
        const divCol = document.createElement('div');
        divCol.classList.add('table-col');
        divCol.innerHTML = tdElements[index].innerHTML;
        div.append(divCol);
      }
      richTextTemplate.replaceChild(div, tables[index]);
    }
  }
  return richTextTemplate.outerHTML;
}

export default convertTableToGrid;
