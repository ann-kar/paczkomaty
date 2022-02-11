const validateLength = (val: string, len: number): boolean => (val.length === len);

const validateChars = (val: string): boolean => {
    const regex = new RegExp(`[0-9]{${val.length}}`);
    return regex.test(val);
};

export {validateLength, validateChars}