export function replaceColor(html) {
  html = html.replace(/\[Color=(.*?)\](.*?)\[\/Color\]/gim, "<span style='color:$1'>$2</span>");
  return html;
}

export function replaceColorBackground(html) {
  html = html.replace(
    /\[(.*?)\]/gim,
    "<span style='background:#00CC88;color:#FFF;padding-left: 10px;padding-right:10px;'>$1</span>"
  );
  return html;
}

export function replaceBlankSpace(text) {
  return text.replace(/ /g, "-");
}

export function getFormValue(input) {
  if (input && input.length > 0 && input[0].value) {
    return input[0].value;
  }
}

export function isValidEmail(email) {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(email);
}
