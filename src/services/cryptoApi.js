import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiheaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
}

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({url, headers: cryptoApiheaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
});


export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;


