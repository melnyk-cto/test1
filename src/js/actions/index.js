import {ADD_ARTICLE, CHANGE_FOOTER} from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};
export function changefooter(payload) {
    return {type: CHANGE_FOOTER, payload}
}