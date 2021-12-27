export const humanReadableStrings = (val) => {
    return new Intl.NumberFormat('en-CA', { notation: "compact", compactDisplay: "short" }).format(val);
}
