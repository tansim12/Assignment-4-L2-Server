import { RequestHandler } from "express";
import { CheckOutService } from "./CheckOut.service";
import { successResponse } from "../../Re-Useable/CustomResponse";

const postCheckOutData: RequestHandler = async (req, res, next) => {
  try {
    const body = req?.body;
    const result = await CheckOutService.postCheckOutDataDB(body);
    res.send(successResponse(result, 200, "CheckOut Successfully Done"));
  } catch (error) {
    next(error);
  }
};

export const CheckOutController = {
  postCheckOutData,
};
