import axios from 'axios'

const baseURL = 'https://robs-nc-news.herokuapp.com/api'

export const fetchAllTopics = () => {
    return axios.get(`${baseURL}/topics`)
        .then(({ data }) => {
            return data.topics
        })
}

export const fetchAllArticles = (topic, order, sort_by, page) => {
    return axios.get(`${baseURL}/articles`, {
        params: {
            topic,
            order,
            sort_by,
            p: page
        }
    }).then(({ data }) => {
        return data
    })
}

export const fetchOneArticle = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`)
        .then(({ data }) => {
            return data.article
        })
}

export const fetchAllComments = (article_id, page) => {
    return axios.get(`${baseURL}/articles/${article_id}/comments`, {
        params: {
            p: page
        }
    })
        .then(({ data }) => {
            return data.comments
        })
}

export const postComment = (username, body, article_id) => {
    return axios.post(`${baseURL}/articles/${article_id}/comments`, {
        username, body
    })
        .then(({ data }) => {
            return data.comment
        })
}

export const deleteComment = (comment_id) => {
    return axios.delete(`${baseURL}/comments/${comment_id}`)
}

export const patchArticleVote = (value, article_id) => {
    return axios.patch(`${baseURL}/articles/${article_id}`, {
        inc_votes: value
    })
}

export const patchCommentVote = (value, comment_id) => {
    return axios.patch(`${baseURL}/comments/${comment_id}`, {
        inc_votes: value
    })
}