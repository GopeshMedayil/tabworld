
export const loadState = () => {
    try {
        let localData = localStorage.getItem("tabData");
        if (localData != null) {
            return JSON.parse(localData);
        } else {
            return [];
        }
    } catch (e) { }
};

export const saveState = (state) => {
    try {
        localStorage.setItem("tabData", JSON.stringify(state));
    } catch (e) {
        return undefined;
    }
};
