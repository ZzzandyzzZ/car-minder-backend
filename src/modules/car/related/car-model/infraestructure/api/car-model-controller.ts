import type { Request, Response } from "express";

import { CarModelService } from "@car-model/application/car-model-service";

export class CarModelController {
  private service;

  constructor(service: CarModelService) {
    this.service = service;
  }

  async getAll(_req: Request, res: Response) {
    return res.json({
      data: await this.service.getAll(),
    });
  }

  async getById(req: Request, res: Response) {
    return res.json({
      data: await this.service.getById(req.params.id),
    });
  }
}
