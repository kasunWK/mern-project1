"use strict";

const Joi = require("joi");
const passwordHash = require("password-hash");
const { orderSchemaModel } = require("../models/orderModel");
var nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

module.exports = {
  createOrder: async (req, res) => {
    const { customer_id, customer_name, total, items } = req.body;

    const orderModel = orderSchemaModel({
      customer_id: customer_id,
      customer_name: customer_name,
      total: total,
      items: items,
    });

    orderModel.save(async (err) => {
      if (err) {
        res.status(200).json({
          error: true,
          data: {},
        });
      } else {
        res.status(200).json({
          error: false,
          data: [orderModel],
        });
      }
    });
  },

  getOrders: async (req, res) => {
    const { order_by } = req.body;
    const orders = await orderSchemaModel.find({
      order_by: order_by,
    });
    res.status(200).json({
      error: false,
      data: orders,
    });
  },

  getOrdersSummary: async (req, res) => {
    const { timeString, month_start, year_start } = req.body;

    console.log(req.body);
    const ordersToday = await orderSchemaModel.find({
      order_from_date: { $gte: new Date(timeString).setHours(0, 0, 0, 0) },
    });

    var todayTotal = 0;

    ordersToday.forEach((order) => {
      todayTotal = todayTotal + parseFloat(order.total);
    });

    const ordersMonth = await orderSchemaModel.find({
      order_from_date: {
        $gte: new Date(month_start).setHours(0, 0, 0, 0),
        $lt: new Date(timeString).setHours(23, 59, 59, 59),
      },
    });

    var monthTotal = 0;

    ordersMonth.forEach((order) => {
      monthTotal = monthTotal + parseFloat(order.total);
    });

    const ordersYear = await orderSchemaModel.find({
      order_from_date: {
        $gte: new Date(year_start).setHours(0, 0, 0, 0),
        $lt: new Date(timeString).setHours(23, 59, 59, 59),
      },
    });

    var yearTotal = 0;

    ordersYear.forEach((order) => {
      yearTotal = yearTotal + parseFloat(order.total);
    });

    res.status(200).json({
      error: false,
      data: {
        todayTotal: todayTotal,

        monthTotal: monthTotal,

        yearTotal: yearTotal,
      },
    });
  },

  changeOrderStatus: async (req, res) => {
    const { order_id, status } = req.body;

    orderSchemaModel.updateOne(
      { _id: order_id },
      {
        $set: {
          status: status,
        },
      },
      (err, response) => {
        if (err) {
          res.status(200).json({
            error: true,
            data: err,
          });
        } else {
          res.status(200).json({
            error: false,
          });
        }
      }
    );
  },
};
