export const findByAttribute = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
};
