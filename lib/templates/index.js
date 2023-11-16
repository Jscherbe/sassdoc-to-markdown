import group from "./page/group.js";
import section from "./page/section.js";
import item from "./page/item.js";

import see from "./annotations/see.js";
import requireTemplate from "./annotations/require.js";
import example from "./annotations/example.js";
import typeTemplate from "./annotations/type.js";
import deprecated from "./annotations/deprecated.js";
import parameter from "./annotations/parameter.js";
import returnTemplate from "./annotations/return.js";
import link from "./annotations/link.js";
import description from "./annotations/description.js";
import name from "./annotations/name.js";
import output from "./annotations/output.js";
import property from "./annotations/property.js";
import todo from "./annotations/todo.js";
import throwTemplate from "./annotations/throw.js";
import since from "./annotations/since.js";
import _meta from "./annotations/_meta.js";
import _code from "./annotations/_code.js";

export const page = {
  group,
  section,
  item,
};
export const annotations = {
  see,
  example,
  deprecated,
  parameter,
  link,
  description,
  name,
  output,
  property,
  todo,
  since,
  _meta,
  _code,
  require: requireTemplate,
  return: returnTemplate,
  throw: throwTemplate,
  type: typeTemplate,
};