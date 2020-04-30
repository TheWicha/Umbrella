
export const getFormStatus = (boolen: boolean) => {
    return {
        type: 'IS_FORM_SAVED',
        payload: boolen,
    }
}

export const getAllPosts = (values: []) => {
    return {
        type: 'GET_POSTS',
        payload: values,
    }
}

export const getTheme = (theme: {}) => {
    return {
        type: 'GET_THEME',
        payload: theme,
    }
}

export const setVirtualPost = (post: {}) => {
    return {
        type: "GET_POST",
        payload: post
    }
}
