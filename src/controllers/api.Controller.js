const express = require('express')
const { dadosBistribuicao } = require('../models/dadosDistriubicao')

const ping = (req, res) => {
    res.json({pong: true})
}

const listarVendedores = (req, res) => {
    res.json({pong: lista})
}

const enviarUser = async (req, res) => {
    let { Nome, E_mail } = req.body

    await dadosBistribuicao.create({ Nome, E_mail })

    res.json({ body: req.body })
}

module.exports.all = {ping, listarVendedores, enviarUser}