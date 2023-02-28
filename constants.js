const getElement = (id) => document.getElementById(id);

export const start = document.querySelector('.start-container');
export const startBtn = getElement('start')

export const photo = getElement('photo')

export const canvas = getElement('canvas')
export const ctx = canvas.getContext('2d')

export const restart = getElement('restart-container')

export const speed = 8;
export const tileCount = 20;
export const tileSize = 18;
export const snakeX = 10;
export const snakeY = 10;
export const snakeBody = [];


export const appleX = 5;
export const appleY = 5;