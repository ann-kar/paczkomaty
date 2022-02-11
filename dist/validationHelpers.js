const validateLength = (val, len) => (val.length === len);
const validateChars = (val) => {
    const regex = new RegExp(`[0-9]{${val.length}}`);
    return regex.test(val);
};
export { validateLength, validateChars };
//# sourceMappingURL=validationHelpers.js.map