import axios from 'axios'

const baseURL = 'https://robs-nc-news.herokuapp.com/api'

export const fetchAllTopics = () => {
    return axios.get(`${baseURL}/topics`)
        .then(({ data }) => {
            return data.topics
        })
}

export const fetchAllArticles = (topic, order) => {
    return axios.get(`${baseURL}/articles`, {
        params: {
            topic,
            order
        }
    }).then(({ data }) => {
        return data.articles
    })
}

export const fetchOneArticle = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
}

export const fetchAllComments = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}