const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=3b05ce9f72bc9ac3a89ca2c7b19d3d0d';
const units = '&units=metric';