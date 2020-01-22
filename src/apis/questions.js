import request from '../services/request'

export const loadQuestions = () =>
    request({
        url: '/questions'
    });
